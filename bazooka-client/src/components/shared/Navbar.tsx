import React from 'react';
import styles from '@/styles/navbar.module.css';
import Image from 'next/image';
import bazooka from '@/assets/images/intro/bazooka.png';
import Link from 'next/link';
import NavbarRight from './NavbarRight';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <div className={styles.navbarLogo}>
          <Image
            alt="logo"
            src={bazooka}
            width={100}
            height={60}
          />
          <div className={styles.navbarLogoLink}>
            <Link href="/" className="gradient-text">
              BAZOOKA LAUNCHPAD
            </Link>
          </div>
          <div className={styles.navbarLogoSubtitle}>
            <div className='gradient-text'>Powered by Brokie Inu</div>
          </div>
        </div>

        <div className={styles.navbarItems}>
          <ul>
            {/* {navItems.map((item: TNavItems) => (
              <li key={item.title}>
                <Link href="">{item.title}</Link>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
      <NavbarRight />
    </div>
  );
};

export default Navbar;
