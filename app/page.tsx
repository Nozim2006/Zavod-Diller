import DashboardKPICards from '@/components/DashboardKPICards';
import DashboardCharts from '@/components/DashboardCharts';
import RecentOrdersTable from '@/components/RecentOrdersTable';
import TopProductsGrid from '@/components/TopProductsGrid';
import AlertsPanel from '@/components/AlertsPanel';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-heading-1 font-bold text-gray-900">
              Dashboard
            </h1>
            <p className="mt-2 text-body text-gray-600">
              Welcome back! Here's what's happening with your wholesale operations today.
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="btn-ghost">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export
            </button>
            <button className="btn-primary">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              New Order
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <DashboardKPICards />

      {/* Charts and Analytics */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DashboardCharts />
        </div>
        <div className="lg:col-span-1">
          <AlertsPanel />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RecentOrdersTable />
        </div>
        <div className="xl:col-span-1">
          <TopProductsGrid />
        </div>
      </div>
    </div>
  );
}