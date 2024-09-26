'use client';
import React, { useState } from 'react';
import styles from '@/styles/projects.module.css';
import Image from 'next/image';
import fire_icon from '@/assets/icons/fire_icon.png';
import ProjectCard from './ProjectCard';
import { ProjectStatus, TokenDetails } from '@/types/tProjectData';
import { useGetProjectsQuery } from '@/services/api/ohtersApi/projectApi';
import Loader from '../others/Loader';

type TProjectsComp = {
  projects: TokenDetails[];
};

const Projects = () => {
  const [projectStatus, setProjectStatus] = useState<ProjectStatus | ''>('');

  const { data, isLoading } = useGetProjectsQuery(projectStatus);

  if (isLoading) {
    return <Loader></Loader>;
  }
  const projects = data?.data;

  return (
    <div className={styles.container}>
      <div className={styles.projectsTop}>
        <h2>
          <span>Latest Projects</span>
          <Image src={fire_icon} width={20} height={20} alt="fire"></Image>
        </h2>

        {/* <div className={styles.buttonWrapper}>
          <span
            className={
              projectStatus === ProjectStatus.PRESALE_ONGOING
                ? styles.left_active
                : styles.right_active
            }
          >
            {projectStatus === ProjectStatus.PRESALE_ONGOING
              ? 'Ongoing Projects'
              : 'To Be Launched'}
          </span>

          <button
            onClick={() => setProjectStatus(ProjectStatus.PRESALE_ONGOING)}
          >
            Ongoing Projects
          </button>
          <button
            onClick={() => setProjectStatus(ProjectStatus.WAITING_TO_START)}
          >
            To Be Launched
          </button>
        </div> */}
      </div>
      <div className={styles.cardsWrapper}>
        {projects?.length ? (
          <>
            {projects?.map((p: TokenDetails, i: number) => (
              <ProjectCard key={p?.uuid} i={i} project={p}></ProjectCard>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Projects;
