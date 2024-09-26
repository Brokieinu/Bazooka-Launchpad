import React from 'react';
import styles from '@/styles/footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import bazooka from '@/assets/images/intro/bazooka.png'; // Assuming this is the correct path

const FooterMain = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerInfo}>
          <Link className={styles.logo} href="/">
            <div className={styles.logoText}> <span className='gradient-text'> BAZOOKA LAUNCHPAD</span> </div>
            <div className={styles.logoSubtitle}> <span className='gradient-text'>Powered by Brokie Inu</span> </div>
            {/* <p className={styles.text}>
          Launcher of Rockets on TON
          </p> */}
          </Link>
        </div>
        {/* Uncomment and use if needed
        <div className={styles.footerItems}>
          {fItems.map((fi: any) => (
            <div key={fi.title}>
              <h3>{fi.title}</h3>
              <br />
              <ul>
                {fi.items.map((fi_item: any) => (
                  <li key={fi_item.item}>
                    <Link href={fi_item.link}>{fi_item.item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
      </div>
      <div className={styles.footerBottom}>
        <div>
          <div className={styles.copyright}>© 2024 Your Company</div>
          <div className={styles.social}>
            {/* Add social icons here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
