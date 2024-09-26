'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import claimCoin from '@/assets/images/view_coin/btn_icon.png';
import lock from '@/assets/images/view_coin/lock.png';
import chart from '@/assets/images/view_coin/chart.png';
import styles from '@/styles/viewCoinClaim.module.css';
import { TokenDetails, ProjectStatus } from '@/types/tProjectData';
import { useTonConnect } from '@/hooks/useTonConnect';
import { useTonClient } from '@/hooks/useTonClient';
import { HiOutlineRefresh } from 'react-icons/hi';

import {
  sendDeposit,
  sendInvestorJettonClaimReq,
} from '@/web3lib/CrowdFunding/internalCalls';
import { getTotalCapRaised } from '@/web3lib/CrowdFunding/getMethods';
import ViewCoinCountDownTimer from './ViewCoinCountDownTimer';
import useGetTotalRaisedCap from '@/hooks/useGetTotalRaisedCap';

type TViewCoinClaim = {
  projectData: TokenDetails;
};

const ViewCoinClaim = ({ projectData }: TViewCoinClaim) => {
  // console.log("here", projectData);

  const [hoverWidth, setHoverWidth] = useState(0);
  // const [totalCapRaised, setTotalCapRaised] = useState<string | number>('');
  const [minTonError, setMinTonError] = useState('');
  const [connectError, setConnectError] = useState('');
  const [investAmount, setInvestAmount] = useState('');
  const [isInvestLoading, setIsInvestLoading] = useState(false);
  const [isClaimLoading, setIsClaimLoading] = useState(false);

  const { tonConnectUI } = useTonConnect();
  const { tonClient } = useTonClient();

  let { value: totalCapRaised } = useGetTotalRaisedCap(
    projectData?.presale_contract_address as string,
  );

  if (projectData.token_name == 'BROTON') {
    totalCapRaised = Number(projectData.total_cap_raised);
  }

  const handleHover = (event: any) => {
    const div = event.currentTarget;
    const rect = div.getBoundingClientRect();
    const hoverX = event.clientX - rect.left;
    const widthPercent = (hoverX / rect.width) * 100;
    setHoverWidth(Math.round(widthPercent));
  };

  const handleInvestClick = async () => {
    if (!tonClient) return setConnectError('Please connect the wallet');
    if (parseInt(investAmount) < 5 || investAmount === '')
      return setMinTonError('Ton must be at least 5');

    if (!tonConnectUI) return;

    setIsInvestLoading(true);
    setMinTonError('')


    await sendDeposit(
      projectData.presale_contract_address || '',
      investAmount,
      tonConnectUI,
    );

    setTimeout(() => {
      setIsInvestLoading(false);
    }, 2000);
  };

  const handleClaimClick = async () => {
    if (!tonClient) return setConnectError('Please connect the wallet');
    if (parseInt(investAmount) < 5 || investAmount === '')
      return setMinTonError('Ton must be at least 5');

    setIsClaimLoading(true);
    setMinTonError('')

    await sendInvestorJettonClaimReq(
      projectData.presale_contract_address || '',
      tonConnectUI,
    );

    setTimeout(() => {
      setIsClaimLoading(false);
    }, 2000);
  };

  const progress =
    (totalCapRaised / parseInt(projectData?.target_soft_cap)) * 100;

  // console.log(progress);
  const maxProgressAllowed = 100;
  return (
    <div className={styles.card}>
      <div>
        {projectData?.status === ProjectStatus.PRESALE_ENDED && (
          <div className={styles.sellEnded}>
            <span>Sales Ended</span>
          </div>
        )}

        <ViewCoinCountDownTimer
          time={projectData.end_time}
        ></ViewCoinCountDownTimer>

        <div className={styles.progress}>
          <div onMouseMove={handleHover} className={styles.progressBarNormal}>
            <span
              style={{ left: `calc(${hoverWidth}% - 10px)` }}
              className={styles.tooltip}
            >
              {hoverWidth}%
            </span>
            <div
              style={{ width: `${Math.min(progress, maxProgressAllowed)}%` }}
              className={styles.progressBarYellow}
            ></div>
          </div>
        </div>

        <div className={styles.dataText}>
          <span>
            <span>{totalCapRaised} TON</span>

            <HiOutlineRefresh
              title="Refresh"
              onClick={() => window.location.reload()}
              style={{
                marginLeft: '5px',
                fontSize: '24px',
                fontWeight: 'bold',
                cursor: 'pointer',
                // color: "#364255"
              }}
            />
          </span>
          <span>{projectData?.target_soft_cap}</span>
        </div>

        {projectData.status === ProjectStatus.PRESALE_ONGOING && (
          <div className={styles.toClaim}>
            {/* <h4>To Claim: </h4> */}
            <div>
              {/* <span>1 Candle</span> */}
              <input
                type="number"
                name="ton"
                placeholder="5 TON"
                value={investAmount}
                required
                onChange={(e) => {
                  setInvestAmount(e.currentTarget.value);
                }}
              />
              {investAmount ? <span>TON</span> : <></>}
            </div>
          </div>
        )}

        {projectData?.status === ProjectStatus.PRESALE_ONGOING && (
          <div className={styles.claimButtonWrapper}>
            <button
              // style={
              //   !tonClient || parseInt(investAmount) < 5 || investAmount === ''
              //     ? { cursor: 'not-allowed' }
              //     : { cursor: 'pointer' }
              // }
              className={styles.claimButton}
              onClick={handleInvestClick}
              disabled={isInvestLoading}
            >
              {isInvestLoading ? (
                <span className={styles.loader}></span>
              ) : (
                <>
                  <Image
                    src={claimCoin}
                    alt="claim_coin_icon"
                    width={20}
                    height={20}
                  />
                  Invest
                </>
              )}
            </button>
          </div>
        )}

        {projectData?.status === ProjectStatus.CLAIM_AVAILABLE && (
          <div className={styles.claimButtonWrapper}>
            <button
              className={styles.claimButton}
              onClick={handleClaimClick}
              disabled={isClaimLoading}
            >
              {isClaimLoading ? (
                <span className={styles.loader}></span>
              ) : (
                <>
                  <Image
                    src={claimCoin}
                    alt="claim_coin_icon"
                    width={20}
                    height={20}
                  />
                  Claim Coin
                </>
              )}
            </button>
          </div>
        )}

        {connectError && !tonClient ? (
          <small className={styles.error}>{connectError}</small>
        ) : (
          <></>
        )}

        {minTonError ? (
          <small className={styles.error}>{minTonError}</small>
        ) : (
          <></>
        )}

        {projectData.status === ProjectStatus.WAITING_TO_START && (
          <div className={styles.claimButtonWrapper}>
            <button
              style={{ cursor: 'not-allowed' }}
              disabled={true}
              className={styles.claimButton}
            >
              Waiting to start
            </button>
          </div>
        )}

        {/* <div className={styles.iconButtons}>
          <button>
            <Image src={lock} alt="lock_icon" width={20} height={20}></Image>
          </button>
          <button>
            <Image src={chart} alt="chart_icon" width={20} height={20}></Image>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ViewCoinClaim;
