'use client';

import { useState } from 'react';

interface Alert {
  id: number;
  type: 'info' | 'warning' | 'error' | 'success';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export default function AlertsPanel() {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: 1,
      type: 'warning',
      title: 'Low Stock Alert',
      message: 'Industrial Electronics Kit running low (15 units remaining)',
      time: '2 min ago',
      read: false,
    },
    {
      id: 2,
      type: 'error',
      title: 'Payment Failed',
      message: 'Payment failed for order #ORD-2024-005',
      time: '15 min ago',
      read: false,
    },
    {
      id: 3,
      type: 'info',
      title: 'New Manufacturer',
      message: 'Premium Electronics Ltd. joined the platform',
      time: '1 hour ago',
      read: true,
    },
    {
      id: 4,
      type: 'success',
      title: 'Order Delivered',
      message: 'Order #ORD-2024-003 successfully delivered',
      time: '2 hours ago',
      read: true,
    },
    {
      id: 5,
      type: 'info',
      title: 'Contract Renewal',
      message: 'Contract with Global Manufacturing Co. expires in 30 days',
      time: '3 hours ago',
      read: true,
    },
  ]);

  const getAlertIcon = (type: Alert['type']) => {
    const iconClass = "w-5 h-5";
    switch (type) {
      case 'warning':
        return (
          <svg className={`${iconClass} text-warning-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      case 'error':
        return (
          <svg className={`${iconClass} text-error-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'success':
        return (
          <svg className={`${iconClass} text-success-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className={`${iconClass} text-primary-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const getAlertBgClass = (type: Alert['type']) => {
    switch (type) {
      case 'warning':
        return 'bg-warning-50 border-warning-200';
      case 'error':
        return 'bg-error-50 border-error-200';
      case 'success':
        return 'bg-success-50 border-success-200';
      default:
        return 'bg-primary-50 border-primary-200';
    }
  };

  const markAsRead = (id: number) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, read: true } : alert
    ));
  };

  const unreadCount = alerts.filter(alert => !alert.read).length;

  return (
    <div className="card card-hover p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-heading-3 font-semibold text-gray-900">Alerts & Notifications</h3>
        {unreadCount > 0 && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-error-100 text-error-800">
            {unreadCount} new
          </span>
        )}
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer hover:shadow-sm ${
              getAlertBgClass(alert.type)
            } ${!alert.read ? 'ring-2 ring-primary-100' : ''}`}
            onClick={() => markAsRead(alert.id)}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                {getAlertIcon(alert.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className={`text-sm font-medium ${
                    !alert.read ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {alert.title}
                  </h4>
                  {!alert.read && (
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  )}
                </div>
                <p className="mt-1 text-sm text-gray-600">{alert.message}</p>
                <p className="mt-2 text-xs text-gray-500">{alert.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex space-x-3">
          <button className="flex-1 btn-ghost text-sm py-2">
            Mark All Read
          </button>
          <button className="flex-1 btn-secondary text-sm py-2">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}