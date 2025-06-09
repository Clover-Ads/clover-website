import React from 'react';
import { Card, Grid, Metric, Text } from '@tremor/react';

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
    <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="gap-6">
      {metrics.map((item) => (
        <Card key={item.title} className="feature-card stat-animate relative pb-8" style={{
          animationDelay: `${metrics.indexOf(item) * 0.1}s`
        }}>
          <div className="mb-4">
            <Text className="text-gray-500 mb-2">{item.title}</Text>
            <Metric className="text-green-600 mb-1">{item.metric}</Metric>
            <Text className="text-sm text-gray-600">{item.description}</Text>
          </div>
          <Text className="text-xs text-gray-400 absolute bottom-4 left-4">
            Source: {item.source}
          </Text>
        </Card>
      ))}
    </Grid>
  );
};

export default MetricsGrid; 