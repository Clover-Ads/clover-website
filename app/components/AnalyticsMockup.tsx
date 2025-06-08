import React from 'react';

const AnalyticsMockup = () => {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 transform hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Real-Time Analytics</h3>
            <p className="text-sm text-gray-500">Campaign Performance</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="text-sm text-gray-500 hover:text-gray-700">Daily</button>
          <button className="text-sm bg-purple-100 text-purple-600 px-3 rounded-full">Weekly</button>
          <button className="text-sm text-gray-500 hover:text-gray-700">Monthly</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1">Engagement Rate</p>
          <p className="text-2xl font-bold text-gray-900">8.7%</p>
          <div className="flex items-center mt-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-sm text-green-500 ml-1">+2.4%</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1">Click-Through Rate</p>
          <p className="text-2xl font-bold text-gray-900">4.2%</p>
          <div className="flex items-center mt-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-sm text-green-500 ml-1">+1.8%</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1">Conversion Rate</p>
          <p className="text-2xl font-bold text-gray-900">2.8%</p>
          <div className="flex items-center mt-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-sm text-green-500 ml-1">+3.1%</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-gray-700">Active Campaigns</h4>
          <span className="text-sm text-purple-600">View All</span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-white p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">Weekend Special</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">4.5k views</span>
              <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-green-400"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm font-medium">Weather Campaign</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">3.2k views</span>
              <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-blue-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsMockup; 