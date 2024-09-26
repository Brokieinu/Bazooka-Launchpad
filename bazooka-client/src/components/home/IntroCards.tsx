import React from 'react';
import styles from '@/styles/intro.module.css';
import Image from 'next/image';
import left from '@/assets/images/intro/left.png';
import middle from '@/assets/images/intro/middle.png';
import right from '@/assets/images/intro/right.png';
import bazooka from '@/assets/images/intro/bazooka.png';

const IntroCards = () => {
  return (
    <div className={styles.introCards}>
      <div className={styles.gradient}></div>
      <div className={`${styles.cardMiddle} ${styles.card}`}>
      <Image src={bazooka} alt='Bazooka'></Image>
      </div>
    </div>
  );
};

export default IntroCards;
