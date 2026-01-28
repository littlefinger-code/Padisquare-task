import Link from "next/link";
import { VENDORS } from "@/lib/mock-data";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 container mx-auto px-4 max-w-5xl py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Padisquare
          </h1>
          <p className="text-lg text-gray-600">
            Explore our curated collection of vendor storefronts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VENDORS.map((vendor) => (
            <Link
              key={vendor.id}
              href={`/site/${vendor.slug}`}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 font-bold text-lg uppercase">
                  {vendor.name.substring(0, 2)}
                </div>
                <ArrowRight
                  className="text-gray-400 group-hover:text-brand-500 transition-colors"
                  size={20}
                />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {vendor.name}
              </h2>
              <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                {vendor.description}
              </p>
              <span className="text-brand-600 font-medium text-sm group-hover:underline">
                Visit Store &rarr;
              </span>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-8 text-center text-gray-500 text-sm mt-auto">
        <p>
          &copy; {new Date().getFullYear()} Padisquare. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
