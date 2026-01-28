import { ReactNode } from "react";

export default function VendorSiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1">{children}</main>

      <footer className="bg-white border-t border-gray-100 py-8 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Padisquare. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
