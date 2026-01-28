import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getVendorBySlug, getProductsByVendorSlug } from '@/lib/mock-data';
import { VendorHero } from '@/components/vendor/VendorHero';
import { ProductCard } from '@/components/product/ProductCard';
import { SearchBar } from '@/components/shared/SearchBar';
import { SortSelect } from '@/components/shared/SortSelect';
import { Pagination } from '@/components/shared/Pagination';
import { Frown } from 'lucide-react';

interface PageProps {
    params: Promise<{ vendorSlug: string }>;
    searchParams?: Promise<{
        search?: string;
        sort?: string;
        page?: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { vendorSlug } = await params;
    const vendor = await getVendorBySlug(vendorSlug);

    if (!vendor) {
        return {
            title: 'Vendor Not Found',
        };
    }

    return {
        title: `${vendor.name} | Padisquare Storefront`,
        description: vendor.description,
    };
}

export default async function VendorPage({ params, searchParams }: PageProps) {
    const { vendorSlug } = await params;
    const resolvedSearchParams = await searchParams; // searchParams is optional but in JS undefined await is undefined. Wait, searchParams in PageProps is optional? Next.js types say: searchParams: Promise<...>.
    // Let's assume searchParams is always provided by Next as a promise even if empty?
    // Actually safe way:
    const { search, sort, page } = resolvedSearchParams || {};

    const vendor = await getVendorBySlug(vendorSlug);

    if (!vendor) {
        notFound();
    }

    const currentPage = Number(page) || 1;
    const { products, total, totalPages } = await getProductsByVendorSlug(vendorSlug, {
        search: search,
        sort: sort,
        page: currentPage,
        limit: 8, // Showing 8 products per page
    });

    return (
        <div className="pb-16">
            <VendorHero vendor={vendor} />

            <div className="container mx-auto px-4 max-w-7xl mt-8">
                {/* Filters and Search */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 bg-white p-4 rounded-xl border border-gray-100 shadow-sm sticky top-20 z-40">
                    <SearchBar />
                    <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                        <div className="text-sm text-gray-500 font-medium whitespace-nowrap hidden lg:block">
                            {total} Products Found
                        </div>
                        <SortSelect />
                    </div>
                </div>

                {/* Product Grid */}
                {products.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        <Pagination totalPages={totalPages} />
                    </>
                ) : (
                    <div className="text-center py-20 bg-white rounded-xl border border-gray-100 border-dashed">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4 text-gray-400">
                            <Frown size={32} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">No products found</h3>
                        <p className="text-gray-500 max-w-md mx-auto">
                            We couldn't find any products matching your search. Try adjusting your filters or search term.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
