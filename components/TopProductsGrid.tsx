'use client';

export default function TopProductsGrid() {
  const topProducts = [
    {
      id: 1,
      name: 'Industrial Electronics Kit',
      manufacturer: 'TechCorp Industries',
      category: 'Electronics',
      price: '$245.50',
      moq: 10,
      stock: 250,
      sales: 1247,
      trend: 'up',
      image: '/api/placeholder/120/120',
    },
    {
      id: 2,
      name: 'Office Furniture Set',
      manufacturer: 'Premium Office Co.',
      category: 'Furniture',
      price: '$187.25',
      moq: 5,
      stock: 180,
      sales: 986,
      trend: 'up',
      image: '/api/placeholder/120/120',
    },
    {
      id: 3,
      name: 'Kitchen Appliances Bundle',
      manufacturer: 'Global Appliances Ltd.',
      category: 'Appliances',
      price: '$321.75',
      moq: 3,
      stock: 95,
      sales: 756,
      trend: 'down',
      image: '/api/placeholder/120/120',
    },
    {
      id: 4,
      name: 'Storage Solutions',
      manufacturer: 'Industrial Solutions Inc.',
      category: 'Storage',
      price: '$123.00',
      moq: 20,
      stock: 320,
      sales: 645,
      trend: 'up',
      image: '/api/placeholder/120/120',
    },
    {
      id: 5,
      name: 'Point of Sale Equipment',
      manufacturer: 'TechSystems Corp.',
      category: 'Technology',
      price: '$456.80',
      moq: 2,
      stock: 67,
      sales: 534,
      trend: 'up',
      image: '/api/placeholder/120/120',
    },
    {
      id: 6,
      name: 'Display Units',
      manufacturer: 'Visual Systems Ltd.',
      category: 'Display',
      price: '$198.40',
      moq: 8,
      stock: 142,
      sales: 423,
      trend: 'down',
      image: '/api/placeholder/120/120',
    },
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') {
      return (
        <svg className="w-4 h-4 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
        </svg>
      );
    }
    return (
      <svg className="w-4 h-4 text-error-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7L7.8 16.2M7 7v10h10" />
      </svg>
    );
  };

  return (
    <div className="card card-hover p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-heading-3 font-semibold text-gray-900">Top-Selling Products</h3>
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View All Products →
        </button>
      </div>

      <div className="space-y-4">
        {topProducts.map((product, index) => (
          <div 
            key={product.id} 
            className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Product Image */}
            <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 truncate">
                    {product.name}
                  </h4>
                  <p className="text-xs text-gray-600 truncate">
                    {product.manufacturer}
                  </p>
                  <div className="mt-1 flex items-center space-x-2">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-primary-100 text-primary-800">
                      {product.category}
                    </span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                </div>
                
                <div className="text-right ml-4">
                  <div className="text-sm font-semibold text-gray-900">
                    {product.price}
                  </div>
                  <div className="flex items-center justify-end mt-1">
                    {getTrendIcon(product.trend)}
                    <span className="text-xs text-gray-600 ml-1">
                      {product.sales.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stock Level */}
              <div className="mt-2">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                  <span>Stock: {product.stock}</span>
                  <span>{Math.round((product.stock / 500) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full transition-all duration-1000 ease-out ${
                      product.stock > 200 
                        ? 'bg-success-500' 
                        : product.stock > 100 
                          ? 'bg-warning-500' 
                          : 'bg-error-500'
                    }`}
                    style={{
                      width: `${Math.min((product.stock / 500) * 100, 100)}%`,
                      animationDelay: `${index * 150}ms`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-3">
          <button className="btn-secondary text-sm py-2">
            Add Product
          </button>
          <button className="btn-ghost text-sm py-2">
            Import CSV
          </button>
        </div>
      </div>
    </div>
  );
}