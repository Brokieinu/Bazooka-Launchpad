'use client';
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { TokenDetails } from '@/types/tProjectData';

type TChart = {
  data: any,
};

const Chart = ({ data }: TChart) => {
  

  return (
    <div>
      <PieChart
        data={data}
        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
        labelStyle={{
          fill: '#FFFFFF',
          fontSize: '6px',
          fontWeight: '700',
        }}
        labelPosition={60}
      />
    </div>
  );
};

export default Chart;
