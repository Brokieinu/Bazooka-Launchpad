import React from 'react';
import styles from '@/styles/viewCoinToken.module.css';
import Chart from '../others/Chart';
import { TokenDetails } from '@/types/tProjectData';

type TViewCoinToken = {
  projectData: TokenDetails;
};

const ViewCoinToken = ({ projectData }: TViewCoinToken) => {
  const generateUniqueColor = (existingColors: any) => {
    let color;
    do {
      color =
        '#' +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0');
    } while (existingColors.has(color));
    existingColors.add(color);
    return color;
  };

  // Initialize a Set to store generated colors
  const existingColors = new Set();

  const chartData = Object.entries(projectData.tokenomics).map(
    ([title, value]) => ({
      title: title,
      value: Number(value) || 0,
      color: generateUniqueColor(existingColors),
    }),
  );

  //   title: title,
  //   value: Number(value) || 0, // Ensure value is a number, fallback to 0 if not
  //   color: '#' + Math.floor(Math.random() * 16777215).toString(16), // Generate random color for each slice
  // }));

  // const chartData = [
  //   {
  //     title: 'Team',
  //     value: projectData?.tokenomics.Team,
  //     color: '#333399',
  //   },
  //   { title: 'Advisors', value: projectData?.tokenomics.Advisors, color: '#FF5F6D' },
  //   {
  //     title: 'CEX and DEX',
  //     value: projectData?.tokenomics['CEX and DEX'],
  //     color: '#FC00FF',
  //   },
  //   {
  //     title: 'Fair Launch',
  //     value: projectData?.tokenomics['Fair Launch'],
  //     color: '#FFB75E',
  //   },
  //   {
  //     title: 'Game Utility',
  //     value: projectData?.tokenomics['Game Utility'],
  //     color: '#41d439',
  //   },
  //   {
  //     title: 'Community Airdrops',
  //     value: projectData?.tokenomics['Community Airdrops'],
  //     color: '#39ccd4',
  //   },
  // ];

  return (
    <div className={styles.card}>
      <h3>{projectData.token_name} Tokenomics</h3>
      <div>
        <div className={styles.chartWrapper}>
          <Chart data={chartData}></Chart>
        </div>
        <div className={styles.textWrapper}>
          {chartData.map((c: any) => (
            <div key={c.title}>
              <span style={{ backgroundColor: `${c.color}` }}></span>
              <span>
                {c.title} ({c.value}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewCoinToken;
