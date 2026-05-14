import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { FiUser, FiCalendar, FiTag, FiTrendingUp } from 'react-icons/fi';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Events Attended', value: '3', icon: FiCalendar, color: 'blue' },
    { label: 'Tickets Purchased', value: '5', icon: FiTag, color: 'green' },
    { label: 'Network Connections', value: '28', icon: FiUser, color: 'purple' },
  ];

  const upcomingEvents = [
    { name: 'GSEF 2025', date: 'July 19-20, 2025', status: 'Registered' },
    { name: 'Investment Summit', date: 'August 15, 2025', status: 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.first_name || 'Entrepreneur'}!</h1>
          <p className="text-blue-100">Track your events, tickets, and network from your dashboard.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                <stat.icon className={`text-${stat.color}-600 text-xl`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">{event.name}</h3>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  event.status === 'Registered' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                }`}>
                  {event.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
