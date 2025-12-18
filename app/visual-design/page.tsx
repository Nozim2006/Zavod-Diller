'use client';

export default function VisualDesignShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-heading-1 font-bold text-gray-900">
          B2B Dealer Platform - Visual Design System
        </h1>
        <p className="mt-2 text-body text-gray-600">
          Enterprise-grade visual design for modern wholesale distribution platform
        </p>
      </div>

      {/* Design Philosophy */}
      <div className="card card-hover p-8 mb-8">
        <h2 className="text-heading-2 font-semibold text-gray-900 mb-4">Design Philosophy</h2>
        <p className="text-body text-gray-700 mb-6">
          This B2B dealer platform embodies the principles of modern enterprise software design: 
          clean, trustworthy, data-rich, and built for serious business operations. Inspired by 
          platforms like Amazon Business, Stripe Dashboard, and Salesforce.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-primary-50 rounded-lg">
            <div className="text-2xl font-bold text-primary-600 mb-2">Trust</div>
            <div className="text-sm text-gray-600">Verified suppliers and secure transactions</div>
          </div>
          <div className="text-center p-4 bg-teal-50 rounded-lg">
            <div className="text-2xl font-bold text-teal-600 mb-2">Efficiency</div>
            <div className="text-sm text-gray-600">Streamlined workflows and bulk operations</div>
          </div>
          <div className="text-center p-4 bg-violet-50 rounded-lg">
            <div className="text-2xl font-bold text-violet-600 mb-2">Data-Driven</div>
            <div className="text-sm text-gray-600">Rich analytics and insights</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-600 mb-2">Scalable</div>
            <div className="text-sm text-gray-600">Built for enterprise growth</div>
          </div>
        </div>
      </div>

      {/* Color System */}
      <div className="card card-hover p-8 mb-8">
        <h2 className="text-heading-2 font-semibold text-gray-900 mb-6">Color System</h2>
        
        {/* Primary Colors */}
        <div className="mb-8">
          <h3 className="text-heading-3 font-semibold text-gray-900 mb-4">Primary Colors</h3>
          <div className="grid grid-cols-5 gap-4">
            {[
              { name: 'Primary 600', color: 'bg-primary-600', value: '#2563EB' },
              { name: 'Primary 700', color: 'bg-primary-700', value: '#1D4ED8' },
              { name: 'Primary 800', color: 'bg-primary-800', value: '#1E40AF' },
              { name: 'Teal 500', color: 'bg-teal-500', value: '#0891B2' },
              { name: 'Violet 500', color: 'bg-violet-500', value: '#7C3AED' },
            ].map((item) => (
              <div key={item.name} className="text-center">
                <div className={`w-full h-20 ${item.color} rounded-lg mb-2`}></div>
                <div className="text-sm font-medium text-gray-900">{item.name}</div>
                <div className="text-xs text-gray-500">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Status Colors */}
        <div className="mb-8">
          <h3 className="text-heading-3 font-semibold text-gray-900 mb-4">Status Colors</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { name: 'Success', color: 'bg-success-500', value: '#059669', bg: 'bg-success-100', text: 'text-success-800' },
              { name: 'Warning', color: 'bg-warning-500', value: '#D97706', bg: 'bg-warning-100', text: 'text-warning-800' },
              { name: 'Error', color: 'bg-error-500', value: '#DC2626', bg: 'bg-error-100', text: 'text-error-800' },
              { name: 'Info', color: 'bg-primary-500', value: '#3B82F6', bg: 'bg-primary-100', text: 'text-primary-800' },
            ].map((item) => (
              <div key={item.name} className="text-center">
                <div className="w-full h-16 bg-gray-100 rounded-lg mb-2 p-4">
                  <div className={`w-full h-8 ${item.color} rounded`}></div>
                </div>
                <div className="text-sm font-medium text-gray-900">{item.name}</div>
                <div className="text-xs text-gray-500">{item.value}</div>
                <div className={`mt-1 px-2 py-1 rounded text-xs ${item.bg} ${item.text}`}>
                  Badge Example
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gray Scale */}
        <div>
          <h3 className="text-heading-3 font-semibold text-gray-900 mb-4">Gray Scale</h3>
          <div className="grid grid-cols-5 gap-2">
            {[
              { name: '50', color: 'bg-gray-50', value: '#F9FAFB' },
              { name: '100', color: 'bg-gray-100', value: '#F3F4F6' },
              { name: '200', color: 'bg-gray-200', value: '#E5E7EB' },
              { name: '300', color: 'bg-gray-300', value: '#D1D5DB' },
              { name: '400', color: 'bg-gray-400', value: '#9CA3AF' },
              { name: '500', color: 'bg-gray-500', value: '#6B7280' },
              { name: '600', color: 'bg-gray-600', value: '#4B5563' },
              { name: '700', color: 'bg-gray-700', value: '#374151' },
              { name: '800', color: 'bg-gray-800', value: '#1F2937' },
              { name: '900', color: 'bg-gray-900', value: '#111827' },
            ].map((item) => (
              <div key={item.name} className="text-center">
                <div className={`w-full h-12 ${item.color} rounded mb-1 border`}></div>
                <div className="text-xs font-medium text-gray-900">Gray {item.name}</div>
                <div className="text-xs text-gray-500">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="card card-hover p-8 mb-8">
        <h2 className="text-heading-2 font-semibold text-gray-900 mb-6">Typography System</h2>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-heading-3 font-semibold text-gray-900 mb-4">Font Hierarchy</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-display-xl text-gray-900">Display XL</div>
                  <div className="text-sm text-gray-500">72px / Hero Headers</div>
                </div>
                <div>
                  <div className="text-heading-1 text-gray-900">Heading 1</div>
                  <div className="text-sm text-gray-500">36px / Page Titles</div>
                </div>
                <div>
                  <div className="text-heading-2 text-gray-900">Heading 2</div>
                  <div className="text-sm text-gray-500">30px / Section Headers</div>
                </div>
                <div>
                  <div className="text-heading-3 text-gray-900">Heading 3</div>
                  <div className="text-sm text-gray-500">24px / Card Titles</div>
                </div>
                <div>
                  <div className="text-body-large text-gray-900">Body Large</div>
                  <div className="text-sm text-gray-500">18px / Important Text</div>
                </div>
                <div>
                  <div className="text-body text-gray-900">Body Regular</div>
                  <div className="text-sm text-gray-500">16px / Standard Text</div>
                </div>
                <div>
                  <div className="text-body-small text-gray-900">Body Small</div>
                  <div className="text-sm text-gray-500">14px / Secondary Text</div>
                </div>
                <div>
                  <div className="text-caption text-gray-900">Caption</div>
                  <div className="text-sm text-gray-500">12px / Labels</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-heading-3 font-semibold text-gray-900 mb-4">Font Weights</h3>
              <div className="space-y-3">
                <div className="font-light text-gray-900">Light Weight (300) - Subtle emphasis</div>
                <div className="font-normal text-gray-900">Regular Weight (400) - Standard text</div>
                <div className="font-medium text-gray-900">Medium Weight (500) - UI elements</div>
                <div className="font-semibold text-gray-900">Semibold Weight (600) - Emphasis</div>
                <div className="font-bold text-gray-900">Bold Weight (700) - Strong emphasis</div>
                <div className="font-extrabold text-gray-900">Extra Bold (800) - Headlines</div>
              </div>
              
              <h3 className="text-heading-3 font-semibold text-gray-900 mb-4 mt-8">Monospace Font</h3>
              <div className="space-y-2">
                <div className="font-mono text-gray-900">ORDER-2024-001</div>
                <div className="font-mono text-gray-900">$1,247.50</div>
                <div className="font-mono text-gray-900">SKU: ABC-123-XYZ</div>
                <div className="text-sm text-gray-500">Used for prices, IDs, and technical data</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Component Library */}
      <div className="card card-hover p-8 mb-8">
        <h2 className="text-heading-2 font-semibold text-gray-900 mb-6">Component Library</h2>
        
        <div className="space-y-8">
          {/* Buttons */}
          <div>
            <h3 className="text-heading-3 font-semibold text-gray-900 mb-4">Buttons</h3>
            <div className="flex flex-wrap items-center gap-4">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-secondary">Secondary Button</button>
              <button className="btn-ghost">Ghost Button</button>
            </div>
          </div>

          {/* Status Badges */}
          <div>
            <h3 className="text-heading-3 font-semibold text-gray-900 mb-4">Status Badges</h3>
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge-success">Completed</span>
              <span className="badge-warning">In Progress</span>
              <span className="badge-error">Error</span>
              <span className="badge-info">Information</span>
            </div>
          </div>

          {/* Cards */}
          <div>
            <h3 className="text-heading-3 font-semibold text-gray-900 mb-4">Card Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card card-hover p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Default Card</h4>
                <p className="text-sm text-gray-600">Card with hover effect and subtle shadows</p>
              </div>
              <div className="card p-6 border-l-4 border-l-primary-500">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Highlighted Card</h4>
                <p className="text-sm text-gray-600">Card with accent border for important content</p>
              </div>
            </div>
          </div>

          {/* Tables */}
          <div>
            <h3 className="text-heading-3 font-semibold text-gray-900 mb-4">Table Components</h3>
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="table-header">
                  <tr>
                    <th className="table-header-cell">Product</th>
                    <th className="table-header-cell">Price</th>
                    <th className="table-header-cell">Status</th>
                    <th className="table-header-cell">Actions</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr className="table-row">
                    <td className="table-cell">Industrial Electronics</td>
                    <td className="table-cell">$245.50</td>
                    <td className="table-cell"><span className="badge-success">In Stock</span></td>
                    <td className="table-cell">
                      <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-cell">Office Furniture Set</td>
                    <td className="table-cell">$187.25</td>
                    <td className="table-cell"><span className="badge-warning">Low Stock</span></td>
                    <td className="table-cell">
                      <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Form Elements */}
          <div>
            <h3 className="text-heading-3 font-semibold text-gray-900 mb-4">Form Elements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Input Field</label>
                <input type="text" placeholder="Enter product name..." className="input" />
                <p className="form-error">Error message example</p>
              </div>
              <div className="form-group">
                <label className="form-label">Select Dropdown</label>
                <select className="input">
                  <option>Choose category</option>
                  <option>Electronics</option>
                  <option>Furniture</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Examples */}
      <div className="card card-hover p-8 mb-8">
        <h2 className="text-heading-2 font-semibold text-gray-900 mb-6">Layout Examples</h2>
        
        <div className="space-y-8">
          {/* KPI Cards */}
          <div>
            <h3 className="text-heading-3 font-semibold text-gray-900 mb-4">KPI Dashboard Cards</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Orders</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">12,847</p>
                    <p className="mt-1 text-sm text-success-600">+12.5% vs last month</p>
                  </div>
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Orders</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">1,249</p>
                    <p className="mt-1 text-sm text-success-600">+8.2% vs last month</p>
                  </div>
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Sales Volume</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">$2.4M</p>
                    <p className="mt-1 text-sm text-success-600">+15.3% vs last month</p>
                  </div>
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Outstanding</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">$847K</p>
                    <p className="mt-1 text-sm text-error-600">-3.1% vs last month</p>
                  </div>
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div>
            <h3 className="text-heading-3 font-semibold text-gray-900 mb-4">Product Grid Layout</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { name: 'Industrial Electronics Kit', price: '$245.50', rating: 4.8 },
                { name: 'Office Furniture Set', price: '$187.25', rating: 4.6 },
                { name: 'Kitchen Appliances Bundle', price: '$321.75', rating: 4.7 },
                { name: 'Storage Solutions', price: '$123.00', rating: 4.4 },
              ].map((product, index) => (
                <div key={index} className="card">
                  <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-card flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">{product.name}</h4>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-gray-900">{product.price}</span>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <button className="w-full btn-primary text-sm py-2">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Design Principles */}
      <div className="card card-hover p-8">
        <h2 className="text-heading-2 font-semibold text-gray-900 mb-6">Design Principles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-heading-3 font-semibold text-gray-900 mb-4">Visual Hierarchy</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Clear information architecture</li>
              <li>• Consistent spacing and layout grid</li>
              <li>• Strategic use of color and typography</li>
              <li>• Focus on data density and readability</li>
              <li>• Progressive disclosure of information</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-heading-3 font-semibold text-gray-900 mb-4">User Experience</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Intuitive navigation patterns</li>
              <li>• Efficient workflows for bulk operations</li>
              <li>• Clear feedback for all interactions</li>
              <li>• Accessible design for all users</li>
              <li>• Responsive across all device sizes</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-heading-3 font-semibold text-gray-900 mb-4">Enterprise Features</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Scalable component system</li>
              <li>• Dark mode support</li>
              <li>• Multi-language ready</li>
              <li>• Print-friendly layouts</li>
              <li>• Integration with business tools</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-heading-3 font-semibold text-gray-900 mb-4">Performance</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Optimized for large datasets</li>
              <li>• Fast loading and smooth interactions</li>
              <li>• Efficient data visualization</li>
              <li>• Smart caching strategies</li>
              <li>• Progressive enhancement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}