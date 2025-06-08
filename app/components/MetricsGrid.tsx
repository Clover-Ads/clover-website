import React from 'react';
import { Card, Grid, Metric, Text } from '@tremor/react';

const metrics = [
  {
    title: "Average ROI Increase",
    metric: "147%",
    description: "vs. traditional campaigns"
  },
  {
    title: "Cost Reduction",
    metric: "38%",
    description: "in ad spend waste"
  },
  {
    title: "Engagement Rate",
    metric: "2.5x",
    description: "higher than industry average"
  },
  {
    title: "Time Saved",
    metric: "15hrs",
    description: "per week on campaign management"
  }
];

const MetricsGrid = () => {
  return (
    <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="gap-6">
      {metrics.map((item) => (
        <Card key={item.title} className="feature-card stat-animate" style={{
          animationDelay: `${metrics.indexOf(item) * 0.1}s`
        }}>
          <Text className="text-gray-500">{item.title}</Text>
          <Metric className="text-green-600">{item.metric}</Metric>
          <Text className="text-sm text-gray-600">{item.description}</Text>
        </Card>
      ))}
    </Grid>
  );
};

export default MetricsGrid; 