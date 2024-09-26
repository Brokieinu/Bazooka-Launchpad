import React from 'react';
import styles from '@/styles/viewCoinTop.module.css';
import Image from 'next/image';
import telegram from '@/assets/icons/view_coin/telegram.png';
import dribble from '@/assets/icons/view_coin/dribble.png';
import x from '@/assets/icons/view_coin/x.png';
import { TokenDetails } from '@/types/tProjectData';
import Link from 'next/link';

type TViewCoinTop = {
  projectData: TokenDetails;
};

const ViewCoinTop = ({ projectData }: TViewCoinTop) => {
  return (
    <div className={styles.topContainer}>
      <div className={styles.topContainerLeft}>
        <div className={styles.imgWrapper}>
          {projectData?.token_image ? (
            <Image
              alt="token"
              src={projectData?.token_image}
              height={200}
              width={190}
            />
          ) : null}
        </div>
        <div className={styles.textWrapper}>
          <h2>{projectData?.token_name}</h2>
          <h4>{projectData?.target_soft_cap} TON</h4>

          <p>{projectData?.token_description}</p>
          {/* <p>PLEASE INVEST THROUGH INVEST BUTTON</p> */}
        </div>
      </div>
      <div className={styles.topContainerRight}>
        <span>
          <Link target="_blank" href={projectData?.project_twitter_url}>
            <Image alt="x_icon" src={x} height={20} width={20}></Image>
          </Link>
        </span>
        <span>
          <Link target="_blank" href={projectData?.project_website_url}>
            <Image
              alt="dribble_icon"
              src={dribble}
              height={20}
              width={20}
            ></Image>
          </Link>
        </span>
        <span>
          <Link target="_blank" href={projectData?.project_telegram_url}>
            <Image
              alt="telegram_icon"
              src={telegram}
              height={20}
              width={20}
            ></Image>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ViewCoinTop;
