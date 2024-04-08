/* eslint-disable no-unused-vars */
import LogInNav from "../../components/LogInNav/LogInNav";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import About from '../../components/About/About';
import HomeSection from "../../components/HomeSection/HomeSection";
import About from "../../components/About/About";

export default function HomePage() {
  return (
    <>
      <LogInNav />
      <div className="main-section-home flex w-full">
        <Sidebar />
        <HomeSection />
      </div>
      <Footer />
    </>
  );
    <div>
      <LogInNav/>
      <div className="main-section-home flex">
      <Sidebar/>
      <HomeSection />
      </div>
      <Footer/>
      <About/>
    </div>
  )
}
