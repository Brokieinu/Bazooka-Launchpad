'use client';
import React, { useRef, useState } from 'react';
import styles from '@/styles/projectCard.module.css';
import card_1 from '@/assets/images/projects/card_1.png';
import men_group from '@/assets/icons/men_group.png';
import Image from 'next/image';
import invest from '@/assets/icons/invest.png';
import view from '@/assets/icons/view.png';
import { FaChartArea } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { ProjectStatus, TokenDetails } from '@/types/tProjectData';
import useGetTotalRaisedCap from '@/hooks/useGetTotalRaisedCap';

type TProjectCard = {
  pathname?: string;
  i: number;
  project: TokenDetails;
};

const ProjectCard = ({ pathname, i, project }: TProjectCard) => {
  let { value: totalCapRaised } = useGetTotalRaisedCap(
    project?.presale_contract_address as string,
  );
  const maxProgressAllowed = 100;
  if (project.token_name == 'BROTON') {
    totalCapRaised = Number(project.total_cap_raised);
  }

  const router = useRouter();
  const progress = (totalCapRaised / parseInt(project?.target_soft_cap)) * 100;

  const [hoverWidth, setHoverWidth] = useState(0);

  const handleHover = (event: any) => {
    const div = event.currentTarget;
    const rect = div.getBoundingClientRect();
    const hoverX = event.clientX - rect.left;
    const widthPercent = (hoverX / rect.width) * 100;
    setHoverWidth(Math.round(widthPercent));
  };

  return (
    <div className={styles.projectCard}>
      <div className={styles.info}>
        {project?.token_image ? (
          <Image
            src={project?.token_image}
            alt="img"
            height={250}
            width={250}
          ></Image>
        ) : null}

        <div className={styles.statusWrapper}>
          <div className={styles.status}>
            <span>
              {project.status === ProjectStatus.CLAIM_AVAILABLE
                ? 'Claim Available'
                : ''}
              {project.status === ProjectStatus.PRESALE_ENDED ? 'Ended' : ''}
              {project.status === ProjectStatus.PRESALE_ONGOING
                ? 'Ongoing'
                : ''}
              {project.status === ProjectStatus.WAITING_TO_START
                ? 'To be launched'
                : ''}
            </span>
          </div>
          {/* <div className={styles.percentage}>
            <Image
              src={men_group}
              alt="group_men"
              height={15}
              width={15}
            ></Image>
            <span>5%</span>
          </div> */}
        </div>
        <div className={styles.infoTextWrapper}>
          <h2>{project.token_name}</h2>
          {project.status !== 'presale_ongoing' ? <h4></h4> : <h4></h4>}
          <h3>{project.target_soft_cap} TON Soft Cap</h3>
          <h5>{totalCapRaised} Raised</h5>
        </div>
        <div className={styles.infoTextSquare}>
          <p className={styles.liquidity}>
            <span>LP TONs:</span>
            <span>{project.liquidity_percentage}%</span>
          </p>
          <p className={styles.offered}>
            <span>Presale Offering:</span>
            <span>{project.tokenomics['Presale Allocation']} %</span>
          </p>
        </div>
        <div className={styles.progress}>
          <h4>Progress ({progress.toFixed(2)}%)</h4>
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
        <div className={styles.buttons}>
          {pathname === '/my_claims' ? (
            <button onClick={() => router.push(`/view_coin/${project?.uuid}`)}>
              <FaChartArea className={styles.chart} />
              Claim Coin
            </button>
          ) : (
            <button onClick={() => router.push(`/view_coin/${project?.uuid}`)}>
              <FaChartArea className={styles.chart} />
              {project.status === ProjectStatus.PRESALE_ENDED
                ? 'Details'
                : project.status === ProjectStatus.CLAIM_AVAILABLE
                ? 'Claim'
                : 'Invest'}
            </button>
          )}
          <button onClick={() => router.push(`/view_coin/${project?.uuid}`)}>
            <Image
              className={styles.view}
              src={view}
              alt="view_icon"
              width={16}
              height={12}
            ></Image>
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
