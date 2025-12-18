'use client';

export default function RecentOrdersTable() {
  const orders = [
    {
      id: 'ORD-2024-001',
      customer: 'TechStore Inc.',
      product: 'Industrial Electronics Kit',
      amount: '$24,500',
      status: 'Processing',
      date: '2024-01-15',
      statusType: 'info' as const,
    },
    {
      id: 'ORD-2024-002',
      customer: 'Global Retail Solutions',
      product: 'Office Furniture Set',
      amount: '$18,750',
      status: 'Shipped',
      date: '2024-01-15',
      statusType: 'success' as const,
    },
    {
      id: 'ORD-2024-003',
      customer: 'Urban Store Group',
      product: 'Kitchen Appliances Bundle',
      amount: '$32,100',
      status: 'Delivered',
      date: '2024-01-14',
      statusType: 'success' as const,
    },
    {
      id: 'ORD-2024-004',
      customer: 'Premium Markets Ltd.',
      product: 'Electronics Display Units',
      amount: '$45,900',
      status: 'Pending',
      date: '2024-01-14',
      statusType: 'warning' as const,
    },
    {
      id: 'ORD-2024-005',
      customer: 'Metro Distribution Co.',
      product: 'Storage Solutions',
      amount: '$12,300',
      status: 'Cancelled',
      date: '2024-01-13',
      statusType: 'error' as const,
    },
    {
      id: 'ORD-2024-006',
      customer: 'Smart Retail Systems',
      product: 'Point of Sale Equipment',
      amount: '$28,600',
      status: 'Processing',
      date: '2024-01-13',
      statusType: 'info' as const,
    },
  ];

  const statusBadgeClass = {
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
    info: 'badge-info',
  };

  return (
    <div className="card card-hover p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-heading-3 font-semibold text-gray-900">Recent Orders</h3>
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View All Orders →
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead className="table-header">
            <tr>
              <th className="table-header-cell">Order ID</th>
              <th className="table-header-cell">Customer</th>
              <th className="table-header-cell">Product</th>
              <th className="table-header-cell">Amount</th>
              <th className="table-header-cell">Status</th>
              <th className="table-header-cell">Date</th>
              <th className="table-header-cell">Actions</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {orders.map((order) => (
              <tr key={order.id} className="table-row">
                <td className="table-cell">
                  <span className="font-mono text-sm font-medium text-primary-600">
                    {order.id}
                  </span>
                </td>
                <td className="table-cell">
                  <div className="font-medium text-gray-900">{order.customer}</div>
                </td>
                <td className="table-cell">
                  <div className="text-gray-900">{order.product}</div>
                </td>
                <td className="table-cell">
                  <span className="font-semibold text-gray-900">{order.amount}</span>
                </td>
                <td className="table-cell">
                  <span className={statusBadgeClass[order.statusType]}>
                    {order.status}
                  </span>
                </td>
                <td className="table-cell">
                  <span className="text-gray-600">{order.date}</span>
                </td>
                <td className="table-cell">
                  <div className="flex space-x-2">
                    <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                      View
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 text-sm font-medium">
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Showing 1-6 of 847 orders
        </div>
        <div className="flex space-x-2">
          <button className="btn-ghost text-sm px-3 py-2">
            Previous
          </button>
          <button className="btn-primary text-sm px-3 py-2">
            1
          </button>
          <button className="btn-ghost text-sm px-3 py-2">
            2
          </button>
          <button className="btn-ghost text-sm px-3 py-2">
            3
          </button>
          <button className="btn-ghost text-sm px-3 py-2">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}