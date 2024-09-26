import TopLeftGradient from '@/components/others/TopLeftGradient';
import TopRightGradient from '@/components/others/TopRightGradient';
import AppBar from '@/components/shared/AppBar';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import FAQ from '@/components/view_coin/FAQ';
import ViewCoinMain from '@/components/view_coin/ViewCoinMain';
import { baseUrl } from '@/services/constant';
import React from 'react';

const page = async ({params}:any) => {
  const projectData = await getOneProjectData(params.id);


  return (
    <main>
      {/* Gradients in the right side and the left side of the top of the page */}
      <TopLeftGradient></TopLeftGradient>
      <TopRightGradient></TopRightGradient>
      {/* ------ */}

      <div className="container">
        <Navbar></Navbar>
        <AppBar></AppBar>
      </div>
      <ViewCoinMain projectData={projectData}></ViewCoinMain>
      {/* <FAQ></FAQ> */} 
      <Footer></Footer>
    </main>
  );
};

export default page;


async function getOneProjectData(id: string) {
  try {
    const res = await fetch(`${baseUrl}/project/${id}`, {
      cache: 'no-store',
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    const data = await res.json();

    return data || {};
  } catch (error) {
    console.log('error while fetching a project', error);
  }
}