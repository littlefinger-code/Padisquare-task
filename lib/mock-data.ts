import { Product, Vendor } from './types';

export const VENDORS: Vendor[] = [
    {
        id: 'v1',
        slug: 'tech-gurus',
        name: 'Tech Gurus',
        description: 'Your one-stop shop for the latest gadgets and electronics.',
        logo: '/tech-gurus-logo.png', // Placeholder, using text or generate_image if needed
        heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000',
        contactEmail: 'support@techgurus.com',
    },
    {
        id: 'v2',
        slug: 'green-earth',
        name: 'Green Earth',
        description: 'Sustainable and organic products for a better lifestyle.',
        logo: '/green-earth-logo.png',
        heroImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&q=80&w=2000',
        contactEmail: 'hello@greenearth.com',
    },
    {
        id: 'v3',
        slug: 'fashion-hub',
        name: 'Fashion Hub',
        description: 'Trendy clothing and accessories for everyone.',
        logo: '/fashion-hub-logo.png',
        heroImage: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=2000',
        contactEmail: 'style@fashionhub.com',
    }
];

export const PRODUCTS: Product[] = [
    // Tech Gurus
    {
        id: 'p1',
        slug: 'wireless-headphones',
        name: 'Wireless Pro Headphones',
        description: 'High-fidelity audio with active noise cancellation.',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000',
        category: 'Electronics',
        vendorSlug: 'tech-gurus',
        createdAt: '2024-01-15T10:00:00Z'
    },
    {
        id: 'p2',
        slug: 'smart-watch',
        name: 'Ultra Smart Watch',
        description: 'Track your fitness and stay connected.',
        price: 199.50,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000',
        category: 'Electronics',
        vendorSlug: 'tech-gurus',
        createdAt: '2024-01-20T14:30:00Z'
    },
    // Green Earth
    {
        id: 'p3',
        slug: 'bamboo-toothbrush',
        name: 'Bamboo Toothbrush Set',
        description: 'Eco-friendly toothbrushes made from sustainable bamboo.',
        price: 12.00,
        image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb6dcaf?auto=format&fit=crop&q=80&w=1000',
        category: 'Home',
        vendorSlug: 'green-earth',
        createdAt: '2024-02-01T09:00:00Z'
    },
    {
        id: 'p4',
        slug: 'organic-tea',
        name: 'Premium Organic Green Tea',
        description: 'Hand-picked organic green tea leaves.',
        price: 25.00,
        image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=1000',
        category: 'Food',
        vendorSlug: 'green-earth',
        createdAt: '2024-02-05T11:20:00Z'
    },
    // Fashion Hub
    {
        id: 'p5',
        slug: 'denim-jacket',
        name: 'Classic Denim Jacket',
        description: 'Timeless style with a modern fit.',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&q=80&w=1000',
        category: 'Clothing',
        vendorSlug: 'fashion-hub',
        createdAt: '2024-01-10T16:45:00Z'
    },
    {
        id: 'p6',
        slug: 'sneakers',
        name: 'Urban Runners',
        description: 'Comfortable sneakers for daily wear.',
        price: 120.00,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000',
        category: 'Footwear',
        vendorSlug: 'fashion-hub',
        createdAt: '2024-03-01T08:00:00Z'
    }
];

export async function getVendorBySlug(slug: string): Promise<Vendor | undefined> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return VENDORS.find(v => v.slug === slug);
}

export async function getProductsByVendorSlug(
    vendorSlug: string,
    options: { search?: string; sort?: string; page?: number; limit?: number } = {}
): Promise<{ products: Product[]; total: number; totalPages: number }> {
    await new Promise(resolve => setTimeout(resolve, 300));

    let filtered = PRODUCTS.filter(p => p.vendorSlug === vendorSlug);

    if (options.search) {
        const query = options.search.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
    }

    if (options.sort) {
        switch (options.sort) {
            case 'price_asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price_desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'recent':
                filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                break;
        }
    }

    const page = options.page || 1;
    const limit = options.limit || 10;
    const start = (page - 1) * limit;
    const end = start + limit;

    return {
        products: filtered.slice(start, end),
        total: filtered.length,
        totalPages: Math.ceil(filtered.length / limit)
    };
}
