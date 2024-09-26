import React, { useState } from 'react';
import styles from '@/styles/faq.module.css';
import Question from './Question';

const FAQ = () => {
  return (
    <div className={styles.faqContainer}>
      <h2>FAQS</h2>
      <div>
        <Question></Question>
        <Question></Question>
        <Question></Question>
        <Question></Question>
      </div>
    </div>
  );
};

export default FAQ;
