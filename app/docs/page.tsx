import Link from 'next/link';

export default function DocsIndex() {
  return (
    <div className="max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Documentation</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-3 text-blue-600">Getting Started</h3>
          <p className="text-gray-600 mb-4">Learn how to get started with the B2B Wholesale Platform</p>
          <Link href="/docs/getting-started" className="text-blue-600 hover:underline">
            Read more →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-3 text-blue-600">Architecture</h3>
          <p className="text-gray-600 mb-4">System architecture and technical design specifications</p>
          <Link href="/docs/architecture/system-architecture" className="text-blue-600 hover:underline">
            Read more →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-3 text-blue-600">Features</h3>
          <p className="text-gray-600 mb-4">Detailed feature specifications and requirements</p>
          <Link href="/docs/features/specifications" className="text-blue-600 hover:underline">
            Read more →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-3 text-blue-600">API</h3>
          <p className="text-gray-600 mb-4">API specifications and integration guides</p>
          <Link href="/docs/api/specifications" className="text-blue-600 hover:underline">
            Read more →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-3 text-blue-600">User Experience</h3>
          <p className="text-gray-600 mb-4">User journeys and experience design patterns</p>
          <Link href="/docs/user-flows/user-journeys" className="text-blue-600 hover:underline">
            Read more →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-3 text-blue-600">Security</h3>
          <p className="text-gray-600 mb-4">Security specifications and compliance requirements</p>
          <Link href="/docs/security/specifications" className="text-blue-600 hover:underline">
            Read more →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-3 text-blue-600">Deployment</h3>
          <p className="text-gray-600 mb-4">Deployment guides and infrastructure setup</p>
          <Link href="/docs/deployment/guide" className="text-blue-600 hover:underline">
            Read more →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-3 text-blue-600">Business Model</h3>
          <p className="text-gray-600 mb-4">Business strategy and monetization approaches</p>
          <Link href="/docs/monetization/business-model" className="text-blue-600 hover:underline">
            Read more →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-3 text-blue-600">Database</h3>
          <p className="text-gray-600 mb-4">Database schema and data models</p>
          <Link href="/docs/database/schema" className="text-blue-600 hover:underline">
            Read more →
          </Link>
        </div>
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-blue-800">Essential Reading</h3>
            <ul className="mt-2 space-y-1">
              <li><Link href="/docs/enterprise-product-spec" className="text-blue-600 hover:underline">Enterprise Product Spec</Link></li>
              <li><Link href="/docs/enterprise-roadmap" className="text-blue-600 hover:underline">Enterprise Roadmap</Link></li>
              <li><Link href="/docs/project-summary" className="text-blue-600 hover:underline">Project Summary</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-blue-800">Design & UX</h3>
            <ul className="mt-2 space-y-1">
              <li><Link href="/docs/ui-ux/design-system" className="text-blue-600 hover:underline">Design System</Link></li>
              <li><Link href="/docs/ui-ux/enterprise-ui-system" className="text-blue-600 hover:underline">Enterprise UI System</Link></li>
              <li><Link href="/docs/user-flows/enterprise-ux-flows" className="text-blue-600 hover:underline">Enterprise UX Flows</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}