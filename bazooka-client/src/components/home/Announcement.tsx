import React from 'react';
import Image from 'next/image';
import styles from "@/styles/announcement.module.css"

function Announcement() {
  return (
    <>
      <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={`${styles.comingText} ${styles.title}`}>COMING</h1>
        <h1 className={styles.soonText}>SOON</h1>
        <p className={styles.paragraph}>
          Apply Now below and we will get on a call to discuss.
        </p>
        <a target='_blank' href="https://forms.gle/piurTz3HTt5B5MDZ9" className={styles.button}>
          <button className={styles.applyButton}>Apply Now!!!</button>
        </a>
      </div>
    </div>
      {/* <div className={styles.mobileContainer}>
        <div className={styles.mobileImageContainer}>
          <div className={styles.mobileImage}>
            <Image
              src="/squareannouncement.png"
              alt="announcement"
              className="w-full h-auto"
              width={200}
              height={200}
            />
          </div>
          <div className={styles.mobileTextContainer}>
            <div className={styles.mobileFlexContainer}>
              <h1 className={styles.mobileComingText}>
                COMING
              </h1>
              <h1 className={styles.mobileSoonText}>
                SOON
              </h1>
            </div>
            <p className={styles.mobileParagraph}>
              Apply Now below and we will get on a call to discuss.
            </p>
            <a target='_blank' href="https://forms.gle/piurTz3HTt5B5MDZ9">
              <button className={styles.mobileApplyButton}>
                Apply Now!!!
              </button>
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Announcement;
