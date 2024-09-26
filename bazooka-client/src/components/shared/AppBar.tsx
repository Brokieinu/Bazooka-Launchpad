'use client';
import React, { useContext, useState } from 'react';
import styles from '@/styles/appBar.module.css';
import styles2 from '@/styles/navbar.module.css';
import Image from 'next/image';
import logo from '@/assets/logo/logo.png';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import { navItems } from '@/services/constant';
import { TNavItems } from '@/types/tConstant';
import Link from 'next/link';
import {
  TonConnectButton,
  useTonConnectUI,
  useTonWallet,
} from '@tonconnect/ui-react';
import GlobalContext from '@/services/context';

const AppBar = () => {
  const value = useContext(GlobalContext);
  const wallet = useTonWallet();

  if (!value) {
    return <div></div>;
  }

  return (
    <ul className={value.openDrawer ? styles.openMenu : styles.closeMenu}>
      <li className={styles.authItemWrapper}>
        {/* <Link href="">Login</Link>
          <span className={styles.divider}>||</span>
          <Link href="">Register</Link> */}
      </li>

      {wallet && (
        <li className={styles.navItem}>
          <Link href={navItems[0].link ? navItems[0].link : '#'}>
            {navItems[0].title}
          </Link>
        </li>
      )}

      {/* {navItems.slice(1, navItems.length).map((item: TNavItems) => (
        <li className={styles.navItem} key={item.title}>
          <Link href={item.link ? item.link : '#'}>{item.title}</Link>
        </li>
      ))} */}
    </ul>
  );
};

export default AppBar;
