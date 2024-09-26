"use client"
import React from 'react';
import styles from '@/styles/viewCoinMain.module.css';
import ViewCoinTop from './ViewCoinTop';
import ViewCoinMiddle from './ViewCoinMiddle';
import ViewCoinBottom from './ViewCoinBottom';
import ViewCoinLockRecords from './ViewCoinLockRecords';
import { baseUrl } from '@/services/constant';
import { TokenDetails } from '@/types/tProjectData';
import { useEffect } from 'react';

type TViewCoinMain = {
  projectData: TokenDetails;
};

const ViewCoinMain = ({ projectData }: TViewCoinMain) => {

  useEffect(() => {
    if (projectData && projectData.token_symbol) {
      document.title = `${projectData.token_symbol} on Bazooka Launchpad`;
    }
    return () => {
      document.title = 'Bazooka Launchpad';
    };
  }, [projectData]);


  return (
    <div className={styles.mainContainer}>
      <ViewCoinTop projectData={projectData}></ViewCoinTop>
      <ViewCoinMiddle projectData={projectData}></ViewCoinMiddle>
      <ViewCoinBottom projectData={projectData}></ViewCoinBottom>
      {/* <ViewCoinLockRecords></ViewCoinLockRecords> */}
      {/* this ViewCoinBottom component was moved to the top of the page. */}
      {/* <ViewCoinBottom></ViewCoinBottom> */}
    </div>
  );
};

export default ViewCoinMain;
