import React from 'react';
import styles from '@/styles/footer.module.css';
import { socials } from '@/services/constant';
import Link from 'next/link';
import Image from 'next/image';

const FooterBottom = () => {
  return (
    <div className={styles.footerBottom}>
      <div>
        <div className={styles.copyright}>©All rights reserved.</div>
        <div className={styles.social}>
          {socials.map((s, i) => (
            <Link
            key={i}
            href={s.url}
            target='_blank'>
              <Image
                src={s.icon}
                alt="social_logo"
                width={22}
                height={22}
              ></Image>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
