'use client';
import React, { useState, useEffect } from 'react';
import styles from '@/styles/viewCoinClaim.module.css';

const ViewCoinCountDownTimer = ({ time }: any) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(time) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div className={styles.timing}>
      <div>
        <span>{timeLeft.days || 0}</span>
        <span>Days</span>
      </div>
      <div>
        <span>{timeLeft.hours || 0}</span>
        <span>Hours</span>
      </div>
      <div>
        <span>{timeLeft.minutes || 0}</span>
        <span>Mins</span>
      </div>
      <div>
        <span>{timeLeft.seconds || 0}</span>
        <span>Secs</span>
      </div>
    </div>
  );
};

export default ViewCoinCountDownTimer;
