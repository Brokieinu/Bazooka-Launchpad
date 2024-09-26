'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/styles/viewCoinBottom.module.css';
import { TIndicatorsItem } from '@/types/indicator';
import { ProjectStatus, TokenDetails } from '@/types/tProjectData';
import { useTonConnect } from '@/hooks/useTonConnect';
import { useTonClient } from '@/hooks/useTonClient';
// import ViewCoinProgressIndicator from './ViewCoinProgressIndicator';
import ViewCoinProgressIndicatorLG from './ViewCoinProgressIndicatorLG';
import ViewCoinProgressIndicatorSM from './ViewCoinProgressIndicatorSM';
import {
  getUserBillAddress,
  getUserDepositAmount,
} from '@/web3lib/CrowdFunding/getMethods';

type TViewCoinBottom = {
  projectData: TokenDetails;
};

const ViewCoinBottom = ({ projectData }: TViewCoinBottom) => {
  const { walletAddress } = useTonConnect();
  const { tonClient } = useTonClient();
  const [depositAmount, setDepositAmount] = useState('');

  const indicators: TIndicatorsItem[] = [
    {
      title: 'Waiting for pool start',
      subtitle: 'No one can purchase',
      lastChild: false,
      active:
        projectData?.status === ProjectStatus.WAITING_TO_START ||
        projectData?.status === ProjectStatus.PRESALE_ONGOING ||
        projectData?.status === ProjectStatus.PRESALE_ENDED ||
        projectData?.status === ProjectStatus.CLAIM_AVAILABLE
          ? true
          : false,
    },
    {
      title: 'Pool start',
      subtitle: 'Pool start at 2024',
      lastChild: false,
      active:
        projectData?.status === ProjectStatus.PRESALE_ONGOING ||
        projectData?.status === ProjectStatus.PRESALE_ENDED ||
        projectData?.status === ProjectStatus.CLAIM_AVAILABLE
          ? true
          : false,
    },
    {
      title: 'Pool ended',
      subtitle: 'Pool ended at 2024',
      lastChild: false,
      active:
        projectData?.status === ProjectStatus.PRESALE_ENDED ||
        projectData?.status === ProjectStatus.CLAIM_AVAILABLE
          ? true
          : false,
    },
    {
      title: 'Claim coins',
      subtitle: 'Claim coins at 2024',
      lastChild: true,
      active:
        projectData?.status === ProjectStatus.CLAIM_AVAILABLE ? true : false,
    },
  ];

  useEffect(() => {
    async function getDepositAmount() {
      if (!tonClient || !walletAddress || !projectData.presale_contract_address)
        return;
      const userBillAddress = await getUserBillAddress(
        projectData.presale_contract_address,
        walletAddress,
        tonClient,
      );
      const userDepositAmount = await getUserDepositAmount(
        userBillAddress,
        tonClient,
      );
      setDepositAmount(userDepositAmount);
    }
    getDepositAmount();
  }, [tonClient]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    // this component was moved to the top from bottom.
    <div className={styles.bottomContainer}>
      <div className={styles.bottomContainerLeft}>
        <ViewCoinProgressIndicatorLG
          projectData={projectData}
          indicators={indicators}
        ></ViewCoinProgressIndicatorLG>

        <ViewCoinProgressIndicatorSM
          projectData={projectData}
          indicators={indicators}
        ></ViewCoinProgressIndicatorSM>
      </div>
      <div className={styles.bottomContainerRight}>
        <div>
          <span>Status</span>
          <span className={styles.textGreen}>
            {projectData?.status === ProjectStatus.CLAIM_AVAILABLE
              ? 'Available for claim'
              : ''}
            {projectData?.status === ProjectStatus.PRESALE_ONGOING
              ? 'Presale ongoing'
              : ''}
            {projectData?.status === ProjectStatus.WAITING_TO_START
              ? 'To be launched'
              : ''}
            {projectData?.status === ProjectStatus.PRESALE_ENDED
              ? 'Presale ended'
              : ''}
          </span>
        </div>
        <div>
          <span>Sale Type</span>
          <span
            style={{ textTransform: 'capitalize' }}
            className={styles.textGreen}
          >
            {projectData?.sale_type}
          </span>
        </div>
        {/* <div>
          <span>Current Make</span>
          <span>{}</span>
        </div>
        <div>
          <span>Total Contributors</span>
          <span>{}</span>
        </div> */}

        {tonClient ? (
          <div>
            <span>Your Contribution</span>
            <span>{depositAmount} TON</span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ViewCoinBottom;
