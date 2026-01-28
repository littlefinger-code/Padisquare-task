import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/types';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white p-2 rounded-full shadow-md text-brand-600 hover:bg-brand-50 hover:text-brand-700 transition-colors" aria-label="Add to cart">
                        <ShoppingCart size={18} />
                    </button>
                </div>
            </div>
            <div className="p-4">
                <div className="text-xs font-medium text-brand-600 mb-1">{product.category}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-brand-600 transition-colors">
                    {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 min-h-[2.5rem]">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    <button className="flex items-center gap-2 bg-gray-50 hover:bg-brand-50 text-gray-900 hover:text-brand-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
