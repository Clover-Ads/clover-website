import React from 'react';

const metrics = [
  {
    title: "Average ROI Increase",
    metric: "290%",
    description: "vs. traditional campaigns",
    source: "Vidyard"
  },
  {
    title: "Cost Reduction",
    metric: "62%",
    description: "in ad spend waste",
    source: "Forrester Consulting"
  },
  {
    title: "Engagement Rate",
    metric: "2.5x",
    description: "more engagement than long-form videos",
    source: "Firework"
  },
  {
    title: "Time Saved",
    metric: "12.5hrs",
    description: "per week on campaign management with AI automation",
    source: "AI Institute"
  }
];

const MetricsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((item) => (
        <div 
          key={item.title} 
          className="feature-card stat-animate relative pb-8 bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow" 
          style={{
            animationDelay: `${metrics.indexOf(item) * 0.1}s`
          }}
        >
          <div className="mb-4">
            <p className="text-gray-500 mb-2 text-sm font-medium">{item.title}</p>
            <p className="text-green-600 mb-1 text-3xl font-bold">{item.metric}</p>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
          <p className="text-xs text-gray-400 absolute bottom-4 left-4">
            Source: {item.source}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MetricsGrid; 