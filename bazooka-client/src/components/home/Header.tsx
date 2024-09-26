import React from 'react';
import styles from "@/styles/header.module.css"
import Navbar from '../shared/Navbar';
import AppBar from '../shared/AppBar';
import Intro from './Intro';

const Header = () => {
    return (
        <div className={styles.container}>
           <Navbar></Navbar>
           <AppBar></AppBar>
           {/* <Intro></Intro> */}
        </div>
    );
};

export default Header;