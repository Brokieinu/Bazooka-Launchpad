import React from 'react';
import styles from '@/styles/viewCoinProgressIndicatorSM.module.css';

import { TIndicatorsItem } from '@/types/indicator';
import { ProjectStatus, TokenDetails } from '@/types/tProjectData';

type TViewCoinBottom = {
  projectData: TokenDetails;
  indicators: TIndicatorsItem[];
};

const ViewCoinProgressIndicatorSM = ({
  projectData,
  indicators,
}: TViewCoinBottom) => {
  let successLine = 0;

  if (projectData.status === ProjectStatus.WAITING_TO_START) {
    successLine = 33;
  } else if (projectData.status === ProjectStatus.PRESALE_ONGOING) {
    successLine = 66;
  } else if (projectData.status === ProjectStatus.CLAIM_AVAILABLE) {
    successLine = 99;
  }
  return (
    <div className={styles.indicatorMain}>
      <div className={styles.indicatorLine}>
        <div
          style={{ height: `${successLine}%` }}
          className={styles.indicatorLineSuccess}
        ></div>
      </div>

      <div className={styles.indicatorsContainer}>
        {indicators.map((indicator: TIndicatorsItem, i: number) => (
          <div key={i} className={styles.indicator}>
            <div className={styles.indicatorCircleWrapper}>
              <div
                className={`${styles.indicatorCircle} ${''}
          ${
            indicator.active
              ? styles.indicatorCircleActive
              : styles.indicatorCircleInactive
          }
          `}
              >
                <div>
                  <span></span>
                </div>
              </div>
            </div>

            <div className={styles.indicatorText}>
              <h3>{indicator.title}</h3>
              <h5>{indicator.subtitle} </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCoinProgressIndicatorSM;
