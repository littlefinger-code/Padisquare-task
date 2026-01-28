import Image from 'next/image';
import { Mail, ShieldCheck } from 'lucide-react';
import { Vendor } from '@/lib/types';

interface VendorHeroProps {
    vendor: Vendor;
}

export function VendorHero({ vendor }: VendorHeroProps) {
    return (
        <div className="w-full bg-white border-b border-gray-100">
            {/* Hero Cover */}
            <div className="relative h-48 md:h-64 lg:h-80 w-full bg-gray-100 overflow-hidden">
                <Image
                    src={vendor.heroImage}
                    alt={`${vendor.name} cover`}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Vendor Details */}
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="relative -mt-16 md:-mt-20 flex flex-col md:flex-row items-center md:items-end gap-6 pb-8">
                    {/* Logo */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white border-4 border-white shadow-md overflow-hidden flex-shrink-0">
                        {/* For mock purposes, using a generic image if logo is a placeholder path that doesn't exist. In real app, would use vendor.logo */}
                        <div className="w-full h-full bg-brand-50 flex items-center justify-center text-brand-600 font-bold text-3xl uppercase">
                            {vendor.name.substring(0, 2)}
                        </div>
                    </div>

                    {/* Text Info */}
                    <div className="flex-1 text-center md:text-left pt-2 md:pt-0 pb-2">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{vendor.name}</h1>
                            <ShieldCheck className="text-brand-500 fill-brand-50" size={24} />
                        </div>
                        <p className="text-gray-600 max-w-2xl mb-4 text-sm md:text-base">{vendor.description}</p>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
                            <a href={`mailto:${vendor.contactEmail}`} className="flex items-center gap-2 text-gray-500 hover:text-brand-600 transition-colors">
                                <Mail size={16} />
                                {vendor.contactEmail}
                            </a>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mb-2">
                        <button className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-2.5 rounded-lg font-medium shadow-sm transition-colors text-sm md:text-base">
                            Contact Vendor
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
