import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-gray-900 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/Dark.svg"
            alt="Padisquare Logo"
            width={150}
            height={150}
          />
        </Link>
      </div>
    </header>
  );
}
