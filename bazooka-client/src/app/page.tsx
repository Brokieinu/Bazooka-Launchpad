import Header from '@/components/home/Header';
import Projects from '@/components/home/Projects';
import TopLeftGradient from '@/components/others/TopLeftGradient';
import TopRightGradient from '@/components/others/TopRightGradient';
import Footer from '@/components/shared/Footer';
import { baseUrl } from '@/services/constant';
import  Announcement from '@/components/home/Announcement';
import Cards from '@/components/home/Cards';

export default async function Home() {

  return (
    <main>
      {/* Gradients in the right side and the left side of the top of the page */}
      <TopLeftGradient></TopLeftGradient>
      <TopRightGradient></TopRightGradient>
      {/* ------ */}

      <Header></Header>
      <Projects ></Projects>
      <Announcement></Announcement>
      <Cards></Cards>
      <Footer></Footer>
    </main>
  );
}


