import React from 'react';
import styles from '@/styles/viewCoinLockRecords.module.css';
import ViewCoinLockRecordRow from './ViewCoinLockRecordRow';

const ViewCoinLockRecords = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div className={styles.container}>
      <h3>Candle Coin Lock Records</h3>

      <div className={styles.tableHead}>
        <span>Amount</span>
        <span>Lock time</span>
        <span>Action</span>
      </div>
      <div className={styles.tableData}>
        {arr.map((record: number, i: number) => (
          <ViewCoinLockRecordRow
            i={i}
            key={i}
            rowLength={arr.length}
          ></ViewCoinLockRecordRow>
        ))}
      </div>
    </div>
  );
};

export default ViewCoinLockRecords;
