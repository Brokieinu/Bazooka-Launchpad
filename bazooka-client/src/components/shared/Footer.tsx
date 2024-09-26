import React from 'react';
import FooterMain from './FooterMain';
import FooterBottom from './FooterBottom';
import styles from '@/styles/footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <FooterMain></FooterMain>
            <FooterBottom></FooterBottom>
        </div>
    );
};

export default Footer;