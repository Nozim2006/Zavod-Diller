'use client';

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
}

const kpiData = [
  {
    title: 'Total Orders',
    value: '12,847',
    change: '+12.5%',
    changeType: 'positive' as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Active Orders',
    value: '1,249',
    change: '+8.2%',
    changeType: 'positive' as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Total Sales Volume',
    value: '$2.4M',
    change: '+15.3%',
    changeType: 'positive' as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
  },
  {
    title: 'Outstanding Balance',
    value: '$847K',
    change: '-3.1%',
    changeType: 'negative' as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function KPICard({ title, value, change, changeType, icon }: KPICardProps) {
  const changeColorClass = {
    positive: 'text-success-600',
    negative: 'text-error-600',
    neutral: 'text-gray-500',
  }[changeType];

  return (
    <div className="card card-hover p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-body-small font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-heading-3 font-bold text-gray-900">{value}</p>
          <div className="mt-3 flex items-center">
            <span className={`text-sm font-medium ${changeColorClass}`}>
              {change}
            </span>
            <span className="ml-2 text-sm text-gray-500">vs last month</span>
          </div>
        </div>
        <div className="ml-4 p-3 bg-primary-50 rounded-lg">
          <div className="text-primary-600">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardKPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpiData.map((kpi) => (
        <KPICard key={kpi.title} {...kpi} />
      ))}
    </div>
  );
}