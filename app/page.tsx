import { getDocContent } from '@/lib/content';
import Link from 'next/link';

export default async function Home() {
  const doc = await getDocContent('');

  return (
    <div className="max-w-none">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4 text-white">
          B2B Wholesale Distribution Platform
        </h1>
        <p className="text-xl text-blue-100 mb-6">
          Enterprise-grade B2B wholesale platform connecting manufacturers with retailers
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/docs/getting-started" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Get Started
          </Link>
          <Link 
            href="/docs/architecture/system-architecture" 
            className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
          >
            Architecture
          </Link>
        </div>
      </div>

      <div 
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: doc.content }}
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-3">Core Features</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Multi-role authentication</li>
            <li>• Product catalog management</li>
            <li>• Order management system</li>
            <li>• Payment processing</li>
            <li>• Real-time analytics</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• React 18+ with TypeScript</li>
            <li>• Next.js 14+ for SSR/SSG</li>
            <li>• TailwindCSS + shadcn/ui</li>
            <li>• Node.js/Express backend</li>
            <li>• PostgreSQL database</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-3">Documentation</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• <Link href="/docs/enterprise-product-spec" className="text-blue-600 hover:underline">Product Spec</Link></li>
            <li>• <Link href="/docs/user-flows/user-journeys" className="text-blue-600 hover:underline">User Journeys</Link></li>
            <li>• <Link href="/docs/api/specifications" className="text-blue-600 hover:underline">API Documentation</Link></li>
            <li>• <Link href="/docs/deployment/guide" className="text-blue-600 hover:underline">Deployment Guide</Link></li>
            <li>• <Link href="/docs/security/specifications" className="text-blue-600 hover:underline">Security</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}