import { appConfig } from '@/services/appConfig';
import React, { useEffect, useState } from 'react';

const useGetTotalRaisedCap = (address: string) => {
  const [value, setValue] = useState<number>(0);

  const getTotalCapRaised = async (address: string) => {
    try {
      const body = {
        address: address,
        method: 'get_total_cap_raised',
        stack: [
          {
            type: 'num',
            value: '0x12a',
          },
        ],
      };

      const response = await fetch(
        `${appConfig.tonCenterUrl}/api/v3/runGetMethod`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data?.stack[1]?.value;
    } catch (error) {
      console.error('Error fetching total cap raised:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchTotalCapRaised = async () => {
      const value = await getTotalCapRaised(address);
      if (value !== null) {
        setValue(parseInt(value, 16) / 1e9);
      }
    };
    fetchTotalCapRaised();
  }, [address]);

  return {
    value,
  };
};

export default useGetTotalRaisedCap;
