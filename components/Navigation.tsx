import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              B2B Wholesale Platform
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/docs"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Documentation
            </Link>
            <Link
              href="https://github.com"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}