'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export function SortSelect() {
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const handleSortChange = (sort: string) => {
        const params = new URLSearchParams(searchParams);
        if (sort) {
            params.set('sort', sort);
        } else {
            params.delete('sort');
        }
        replace(`?${params.toString()}`);
    };

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
            <select
                onChange={(e) => handleSortChange(e.target.value)}
                defaultValue={searchParams.get('sort')?.toString() || ''}
                className="py-2 pl-3 pr-8 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
            >
                <option value="recent">Most Recent</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
            </select>
        </div>
    );
}
