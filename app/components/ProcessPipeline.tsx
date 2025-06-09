'use client';

import React from 'react';

const ProcessPipeline = () => {
  const steps = [
    {
      id: 1,
      title: "Data Collection",
      subtitle: "Live Events & Branding",
      description: "Weather, holidays, news, and your unique brand identity",
      color: "blue" as keyof typeof colorClasses,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "AI Campaign Strategy",
      subtitle: "Smart Optimization",
      description: "AI analyzes data to create the perfect campaign strategy",
      color: "green" as keyof typeof colorClasses,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Content Generation",
      subtitle: "Creative Ads",
      description: "Automatically generate engaging video content",
      color: "orange" as keyof typeof colorClasses,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Multi-Platform Launch",
      subtitle: "Everywhere at Once",
      description: "Deploy across TikTok, Instagram, YouTube, and Facebook",
      color: "purple" as keyof typeof colorClasses,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Real-Time Analytics",
      subtitle: "Performance Tracking",
      description: "Monitor performance across all platforms in real-time",
      color: "cyan" as keyof typeof colorClasses,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Smart Optimization",
      subtitle: "Continuous Improvement",
      description: "Automatically reallocate budget to best-performing content",
      color: "emerald" as keyof typeof colorClasses,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  const colorClasses = {
    blue: {
      bg: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      iconBg: "bg-blue-500",
      textTitle: "text-blue-900",
      textSubtitle: "text-blue-700",
      textDesc: "text-blue-600"
    },
    green: {
      bg: "from-green-50 to-green-100",
      border: "border-green-200",
      iconBg: "bg-green-500",
      textTitle: "text-green-900",
      textSubtitle: "text-green-700",
      textDesc: "text-green-600"
    },
    orange: {
      bg: "from-orange-50 to-orange-100",
      border: "border-orange-200",
      iconBg: "bg-orange-500",
      textTitle: "text-orange-900",
      textSubtitle: "text-orange-700",
      textDesc: "text-orange-600"
    },
    purple: {
      bg: "from-purple-50 to-purple-100",
      border: "border-purple-200",
      iconBg: "bg-purple-500",
      textTitle: "text-purple-900",
      textSubtitle: "text-purple-700",
      textDesc: "text-purple-600"
    },
    cyan: {
      bg: "from-cyan-50 to-cyan-100",
      border: "border-cyan-200",
      iconBg: "bg-cyan-500",
      textTitle: "text-cyan-900",
      textSubtitle: "text-cyan-700",
      textDesc: "text-cyan-600"
    },
    emerald: {
      bg: "from-emerald-50 to-emerald-100",
      border: "border-emerald-200",
      iconBg: "bg-emerald-500",
      textTitle: "text-emerald-900",
      textSubtitle: "text-emerald-700",
      textDesc: "text-emerald-600"
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      {/* Process Steps */}
      <div className="space-y-6">
        {steps.map((step, index) => {
          const colors = colorClasses[step.color];
          const isLast = index === steps.length - 1;
          
          return (
            <div key={step.id} className="relative">
              {/* Step Card */}
              <div className={`bg-gradient-to-br ${colors.bg} p-4 sm:p-6 rounded-xl border-2 ${colors.border} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                <div className="flex items-start space-x-4">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center mb-2`}>
                      {step.icon}
                    </div>
                    <div className="text-center">
                      <span className="text-xs font-bold text-gray-400">STEP {step.id}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-lg font-semibold ${colors.textTitle} mb-1`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm font-medium ${colors.textSubtitle} mb-2`}>
                      {step.subtitle}
                    </p>
                    <p className={`text-sm ${colors.textDesc} leading-relaxed`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connecting Arrow (except for last item) */}
              {!isLast && (
                <div className="flex justify-center py-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-200">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Optimization Loop Indicator */}
      <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 rounded-xl border-2 border-green-200">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <h3 className="text-lg font-semibold text-green-900">Continuous Optimization</h3>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-sm text-green-700 mb-4">
            The system continuously monitors and optimizes your campaigns 24/7
          </p>
          
          {/* Loop Back Arrow */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full border border-green-300">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              <span className="text-xs font-medium text-green-800">Loops back to Campaign Strategy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPipeline; 