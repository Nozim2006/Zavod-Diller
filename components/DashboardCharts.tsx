'use client';

export default function DashboardCharts() {
  // Mock data for charts
  const salesData = [
    { month: 'Jan', sales: 180000, orders: 450 },
    { month: 'Feb', sales: 220000, orders: 520 },
    { month: 'Mar', sales: 190000, orders: 480 },
    { month: 'Apr', sales: 240000, orders: 580 },
    { month: 'May', sales: 280000, orders: 650 },
    { month: 'Jun', sales: 320000, orders: 720 },
  ];

  return (
    <div className="space-y-6">
      {/* Sales Performance Chart */}
      <div className="card card-hover p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-heading-3 font-semibold text-gray-900">Sales Performance</h3>
          <div className="flex space-x-2">
            <button className="btn-ghost text-sm">1M</button>
            <button className="btn-primary text-sm">6M</button>
            <button className="btn-ghost text-sm">1Y</button>
            <button className="btn-ghost text-sm">All</button>
          </div>
        </div>
        
        {/* Simple chart visualization */}
        <div className="h-64 flex items-end space-x-2">
          {salesData.map((data, index) => (
            <div key={data.month} className="flex-1 flex flex-col items-center">
              <div className="w-full bg-gray-100 rounded-t relative" style={{ height: '200px' }}>
                <div 
                  className="bg-gradient-to-t from-primary-600 to-primary-400 rounded-t w-full transition-all duration-1000 ease-out"
                  style={{ 
                    height: `${(data.sales / 350000) * 100}%`,
                    animationDelay: `${index * 200}ms`
                  }}
                />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-600">{data.month}</span>
              <span className="text-xs text-gray-500">${(data.sales / 1000).toFixed(0)}K</span>
            </div>
          ))}
        </div>
      </div>

      {/* Order Trends Chart */}
      <div className="card card-hover p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-heading-3 font-semibold text-gray-900">Order Trends</h3>
          <div className="flex space-x-2">
            <button className="btn-ghost text-sm">Weekly</button>
            <button className="btn-primary text-sm">Monthly</button>
            <button className="btn-ghost text-sm">Quarterly</button>
          </div>
        </div>
        
        {/* Line chart visualization */}
        <div className="h-48 relative">
          <svg className="w-full h-full" viewBox="0 0 400 150">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map(i => (
              <line
                key={i}
                x1="0"
                y1={30 * i}
                x2="400"
                y2={30 * i}
                stroke="#F3F4F6"
                strokeWidth="1"
              />
            ))}
            
            {/* Data line */}
            <polyline
              points="20,100 80,80 140,90 200,70 260,50 320,30 380,20"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Area under line */}
            <polygon
              points="20,100 80,80 140,90 200,70 260,50 320,30 380,20 380,150 20,150"
              fill="url(#gradient)"
            />
            
            {/* Data points */}
            {[
              { x: 20, y: 100 },
              { x: 80, y: 80 },
              { x: 140, y: 90 },
              { x: 200, y: 70 },
              { x: 260, y: 50 },
              { x: 320, y: 30 },
              { x: 380, y: 20 },
            ].map((point, index) => (
              <circle
                key={index}
                cx={point.x}
                cy={point.y}
                r="4"
                fill="#3B82F6"
                className="animate-pulse"
                style={{ animationDelay: `${index * 300}ms` }}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Top Suppliers Performance */}
      <div className="card card-hover p-6">
        <h3 className="text-heading-3 font-semibold text-gray-900 mb-6">Top Suppliers Performance</h3>
        <div className="space-y-4">
          {[
            { name: 'TechCorp Industries', performance: 95, orders: 124, revenue: '$245K' },
            { name: 'Global Manufacturing Co.', performance: 89, orders: 98, revenue: '$189K' },
            { name: 'Premium Electronics Ltd.', performance: 87, orders: 87, revenue: '$167K' },
            { name: 'Industrial Solutions Inc.', performance: 84, orders: 76, revenue: '$142K' },
            { name: 'Quality Products Corp.', performance: 82, orders: 65, revenue: '$128K' },
          ].map((supplier, index) => (
            <div key={supplier.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{supplier.name}</h4>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-sm text-gray-600">{supplier.orders} orders</span>
                  <span className="text-sm text-gray-600">{supplier.revenue}</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${supplier.performance}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
              <div className="ml-4 text-right">
                <span className="text-lg font-semibold text-gray-900">{supplier.performance}%</span>
                <div className="text-sm text-gray-500">score</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}