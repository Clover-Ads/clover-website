import React from 'react';

const CampaignInsights = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-md transform hover:-translate-y-1 transition-transform duration-300">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 font-serif">Campaign Insights</h3>
          <p className="text-sm text-gray-500">Real-time optimization</p>
        </div>
      </div>

      {/* Metrics */}
      <div className="space-y-4">
        {/* Current Performance */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Current ROI</span>
            <span className="text-lg font-bold text-blue-600">2.4x</span>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>

        {/* Recommended Action */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Suggested Increase</span>
            <span className="text-lg font-bold text-green-600">+40%</span>
          </div>
          <p className="text-xs text-gray-600">Based on detected events & weather patterns</p>
        </div>

        {/* Predicted Outcome */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Expected ROI</span>
            <span className="text-lg font-bold text-purple-600">3.7x</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-xs text-green-600 font-medium">+54% improvement</span>
          </div>
        </div>
      </div>

      {/* Action Insight */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">Live optimization ready</span>
        </div>
      </div>
    </div>
  );
};

export default CampaignInsights; 