import Header from '@/components/home/Header';
import Projects from '@/components/home/Projects';
import TopLeftGradient from '@/components/others/TopLeftGradient';
import TopRightGradient from '@/components/others/TopRightGradient';
import AppBar from '@/components/shared/AppBar';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
import MyClaims from '@/components/my_claims/MyClaims';

const page = () => {
  return (
    <main>
      {/* Gradients in the right side and the left side of the top of the page */}
      <TopLeftGradient></TopLeftGradient>
      <TopRightGradient></TopRightGradient>
      {/* ------ */}

      <div className='container'>
        <Navbar></Navbar>
        <AppBar></AppBar>
      </div>
      <MyClaims></MyClaims>
      <Footer></Footer>
    </main>
  );
};

export default page;
