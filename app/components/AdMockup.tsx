import React from 'react';

const AdMockup = () => {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 transform hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Campaign Builder</h3>
            <p className="text-sm text-gray-500">Event-Driven Optimization</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Active</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">Event Detection</span>
            <span className="text-sm text-green-600">3 Active Events</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-gray-900">Local Sports Game - 2.5mi away</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm text-gray-900">Weather: Rain Expected (87%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm text-gray-900">Weekend Festival - High Intent</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">Creative Suggestions</span>
            <span className="text-xs text-gray-500">Auto-Generated</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white p-3 rounded border border-gray-200">
              <div className="w-full h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded mb-2 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <p className="text-xs text-gray-600">Weather-Based Ad</p>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <div className="w-full h-24 bg-gradient-to-br from-purple-50 to-purple-100 rounded mb-2 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <p className="text-xs text-gray-600">Event-Based Ad</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Auto-Optimization</p>
              <p className="text-xs text-gray-500">Budget allocation ready</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-colors">
            Launch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdMockup; 