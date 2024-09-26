'use client';

import React, { useContext, useEffect, useState } from 'react';
import { LuBaggageClaim } from 'react-icons/lu';
import Link from 'next/link';
import {
  TonConnectButton,
  useTonConnectUI,
  useTonWallet,
} from '@tonconnect/ui-react';
import { useTonConnect } from '@/hooks/useTonConnect';
import { baseUrl, defaultAvatar } from '@/services/constant';
import {
  useCheckTonProofMutation,
  useGenerateTonProofMutation,
} from '@/services/api/ohtersApi/authApi';
import styles from '@/styles/navbar.module.css';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import GlobalContext from '@/services/context';

const NavbarRight = () => {
  const [tonConnectUI] = useTonConnectUI();

  const wallet = useTonWallet();
  // const { tonConnectUI, wallet } = useTonConnect();

  // using RTK Query hooks for fetching and checking tonProof from the server
  const [fetchTonProof] = useGenerateTonProofMutation();
  const [checkTonProof] = useCheckTonProofMutation();

  const value = useContext(GlobalContext);

  if (!value) {
    return <div></div>;
  }

  // using useEffect hook to ensure that both fetchTonProof and checkTonProof functions run every time wallet's value is changed.
  // useEffect(() => {
  //   const initializeTonConnect = async () => {
  //     tonConnectUI.setConnectRequestParameters({
  //       state: 'loading',
  //     });

  //     const tonProofPayload: any = await fetchTonProof(null);
  //     const tonProof: any = tonProofPayload?.data?.data;

  //     if (tonProof) {
  //       tonConnectUI.setConnectRequestParameters({
  //         state: 'ready',
  //         value: {
  //           tonProof,
  //         },
  //       });

  //       tonConnectUI.onStatusChange((wallet: any) => {
  //         if (
  //           wallet?.connectItems?.tonProof &&
  //           'proof' in wallet.connectItems.tonProof
  //         ) {
  //           handleStatusChange(wallet);
  //         }
  //       });
  //     } else {
  //       tonConnectUI.setConnectRequestParameters(null);
  //       await tonConnectUI.disconnect();
  //     }
  //   };

  //   if (wallet) {
  //     initializeTonConnect();
  //   } else {
  //     localStorage.removeItem('token');
  //   }
  // }, [wallet]);

  // const handleStatusChange = async (wallet: any) => {
  //   const proofData = wallet?.connectItems?.tonProof?.proof;

  //   const address = {
  //     value: wallet?.account?.address,
  //   };

  //   const network = {
  //     value: wallet?.account?.chain,
  //   };

  //   const proof = {
  //     ...proofData,
  //     state_init: wallet?.account?.walletStateInit,
  //   };

  //   const body = {
  //     address,
  //     network,
  //     proof,
  //   };

  //   const result = await checkTonProof(body);

  //   if (result?.data?.status === 'success') {
  //     localStorage.setItem('token', result.data.data);
  //   } else {
  //     await tonConnectUI.disconnect();
  //   }
  // };

  return (
    <div className={styles.navbarRight}>
      {wallet && (
        <div className={styles.navIcons}>
          <Link href="/my_claims">
            <LuBaggageClaim className={styles.icon}></LuBaggageClaim>
          </Link>
          <img src={defaultAvatar} alt="avatar" className={styles.avatar}></img>
        </div>
      )}

      <TonConnectButton className="my-button-class"></TonConnectButton>
      {/* {value.openDrawer ? (
        <FaRegWindowClose
          onClick={() => value.setOpenDrawer(!value.openDrawer)}
          className={styles?.handleDrawerIcon}
        ></FaRegWindowClose>
      ) : (
        <FaBars
          onClick={() => value.setOpenDrawer(!value.openDrawer)}
          className={styles?.handleDrawerIcon}
        />
      )} */}
    </div>
  );
};

export default NavbarRight;
