'use client';

import React, { useState } from 'react';
import styles from '@/styles/faq.module.css';
import down from '@/assets/icons/view_coin/down.png';
import Image from 'next/image';

const Question = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.question}>
      <div>
        <span className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, numquam?
        </span>
        <Image src={down} alt="chevron" width={16} height={12}></Image>
      </div>
    </div>
  );
};

export default Question;
