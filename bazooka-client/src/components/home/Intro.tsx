import React from 'react';
import styles from '@/styles/intro.module.css';
import IntroText from './IntroText';
import IntroCards from './IntroCards';

const Intro = () => {
  return (
    <div className={styles.intro}>
      <IntroText></IntroText>
      <IntroCards></IntroCards>
      
    </div>
  );
};

export default Intro;
