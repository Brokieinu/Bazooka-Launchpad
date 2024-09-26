import React from 'react';
import styles from '@/styles/viewCoinMiddle.module.css';
import ViewCoinClaim from './ViewCoinClaim';
import ViewCoinToken from './ViewCoinToken';
import { TokenDetails } from '@/types/tProjectData';
import Decimal from 'decimal.js';
import moment from 'moment';
import { appConfig } from '@/services/appConfig';

type TViewCoinMiddle = {
  projectData: TokenDetails;
}

const ViewCoinMiddle = ({ projectData }: TViewCoinMiddle) => {
  const tokensForLiquidity = new Decimal(projectData?.total_supply || 0)
    .mul(new Decimal(projectData?.dex_listing || 0))
    .div(new Decimal(100))
    .toFixed();

  const tokensForPresale = new Decimal(projectData?.total_supply || 0)
    .mul(new Decimal(projectData?.fair_launch_allocation || 0))
    .div(new Decimal(100))
    .toFixed();

  return (
    <div className={styles.middleContainer}>
      <div className={styles.middleContainerLeft}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>Coin Info</h2>
        </div>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            <span>Presale Address</span>
            <span>
              <span>
                <a
                  target="_blank"
                  href={`${appConfig.tonViewerUrl}/${projectData?.presale_contract_address}`}
                >
                  {projectData?.presale_contract_address}
                  <span className="redirect-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="16px"
                      height="16px"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M5 19.2l1.4-1.4L13 11.2V18h2V8h-10v2h6.8l-6.6 6.6L5 19.2z" />
                    </svg>
                  </span>
                </a>
              </span>
              <br />
              <span
                style={{
                  fontSize: '16px',
                  color: '#0088CB',
                  marginTop: '10px',
                  display: 'block',
                }}
              >
                * Do not send tokens directy to this address,use invest button.
              </span>{' '}
            </span>
          </li>
          <li className={styles.listItem}>
            <span>Token Name</span>
            <span>{projectData?.token_name}</span>
          </li>
          <li className={styles.listItem}>
            <span>Token Symbol</span>
            <span>{projectData?.token_symbol}</span>
          </li>
          <li className={styles.listItem}>
            <span>Token Decimal</span>
            <span>{projectData?.token_decimal}</span>
          </li>
          <li className={styles.listItem}>
            <span>Token Address</span>

            <span>
              <a
                target="_blank"
                href={`${appConfig.tonViewerUrl}/${projectData?.token_contract_address}`}
              >
                {projectData?.token_contract_address}
                <span className="redirect-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="16px"
                    height="16px"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M5 19.2l1.4-1.4L13 11.2V18h2V8h-10v2h6.8l-6.6 6.6L5 19.2z" />
                  </svg>
                </span>
              </a>
            </span>
          </li>
          <li className={styles.listItem}>
            <span>Total Supply</span>
            <span>{projectData?.total_supply}</span>
          </li>
          {/* <li className={styles.listItem}>
            <span>Tokens For Presale</span>
            <span>{tokensForPresale}</span>
          </li> */}
          {/* <li className={styles.listItem}>
            <span>Tokens For Liquidity</span>
            <span>{tokensForLiquidity}</span>
          </li> */}
          <li className={styles.listItem}>
            <span>Soft Cap</span>
            <span>{projectData?.target_soft_cap}</span>
          </li>
          <li className={styles.listItem}>
            <span>Limit Per User</span>
            <span>{projectData?.limit_per_user}</span>
          </li>
          <li className={styles.listItem}>
            <span>Presale Start Time</span>
            <span>
              {moment(projectData?.start_time)?.format('DD-MMM-yyyy')}
            </span>
          </li>
          <li className={styles.listItem}>
            <span>Presale End Time</span>
            <span>{moment(projectData?.end_time)?.format('DD-MMM-yyyy')}</span>
          </li>
          <li className={styles.listItem}>
            <span>Listing On</span>
            <span>
              <a href="https://ston.fi/" target="_blank">
                https://ston.fi/
              </a>
            </span>
          </li>
          <li className={styles.listItem}>
            <span>LP Pool</span>
            <span>{projectData?.liquidity_percentage} %</span>
          </li>
        </ul>
      </div>
      <div className={styles.middleContainerRight}>
        <ViewCoinClaim projectData={projectData}></ViewCoinClaim>
        <ViewCoinToken projectData={projectData}></ViewCoinToken>
      </div>
    </div>
  );
};

export default ViewCoinMiddle;
