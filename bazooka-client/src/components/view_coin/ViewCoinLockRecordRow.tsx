import React from 'react';
import styles from '@/styles/viewCoinLockRecords.module.css';
import Link from 'next/link';

type TRecordRow = {
  i: number;
  rowLength: number;
};

const ViewCoinLockRecordRow = ({ i, rowLength }: TRecordRow) => {
  return (
    <div
      style={{
        borderRadius: i + 1 === rowLength ? '0 0 10px 10px' : '0',
        backgroundColor: i % 2 !== 0 ? '#1C2736' : '',
      }}
      className={styles.tableDataRow}
    >
      <span>540 004 493 859 candle</span>
      <span>2024-04-23, 14:25</span>
      <span>
        <Link className={styles.viewButton} href="/">
          View
        </Link>
      </span>
    </div>
  );
};

export default ViewCoinLockRecordRow;
