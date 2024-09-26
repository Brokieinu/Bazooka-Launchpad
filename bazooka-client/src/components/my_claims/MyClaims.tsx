'use client';
import React, { useState } from 'react';
import styles from '@/styles/myClaims.module.css';
import ProjectCard from '../home/ProjectCard';
import { usePathname } from 'next/navigation';
import { useGetProjectsQuery } from '@/services/api/ohtersApi/projectApi';
import { ProjectStatus, TokenDetails } from '@/types/tProjectData';
import Loader from '../others/Loader';
const MyClaims = () => {
  const [claimCoins, setClaimCoins] = useState(true);
  const pathname = usePathname();

  const { data, isLoading } = useGetProjectsQuery(
    ProjectStatus.CLAIM_AVAILABLE,
  );

  if (isLoading) {
    return <Loader></Loader>;
  }

  const projects = data?.data;

  return (
    <div className={styles.container}>
      <div className={styles.claimsTop}>
        <h2>
          <span>My Claims</span>
        </h2>

        <div className={styles.buttonWrapper}>
          <span
            className={claimCoins ? styles.left_active : styles.right_active}
          ></span>

          <button onClick={() => setClaimCoins(true)}>Claim Coins</button>
          <button onClick={() => setClaimCoins(false)}>MBC Claim</button>
        </div>
      </div>
      {claimCoins ? (
        <div className={styles.cardsWrapper}>
          {projects?.map((project: TokenDetails, i: number) => (
            <ProjectCard
              key={i}
              i={i}
              pathname={pathname}
              project={project}
            ></ProjectCard>
          ))}
        </div>
      ) : (
        <div>
          <h2 style={{ textAlign: 'center', color: 'white' }}>
            Will be available soon
          </h2>
        </div>
      )}
    </div>
  );
};

export default MyClaims;
