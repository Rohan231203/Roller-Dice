/* eslint-disable no-unused-vars */
import LogInNav from "../../components/LogInNav/LogInNav";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import HomeSection from "../../components/HomeSection/HomeSection";

export default function HomePage() {
  return (
    <>
      <LogInNav />
      <div className="main-section-home flex">
        <Sidebar />
        <HomeSection />
      </div>
      <Footer />
    </>
  );
}
