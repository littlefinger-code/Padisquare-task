export interface Product {
    id: string;
    slug: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    vendorSlug: string;
    createdAt: string; // ISO date string
}

export interface Vendor {
    id: string;
    slug: string;
    name: string;
    description: string;
    logo: string;
    heroImage: string;
    contactEmail: string;
}
