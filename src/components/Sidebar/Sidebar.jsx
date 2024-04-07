import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside
      className="w-1/5 bg-blue-500 flex flex-col justify-between items-center py-[2rem] px-[1rem]"
      style={{ height: "calc(100vh - var(--navbar-height))" }}
    >
      <ul className="w-full">
        <div className="profile-item w-full flex justify-between items-center">
          <li>Profile</li>
          <CgProfile />
        </div>
        <div className="home-item w-full flex justify-between items-center">
          <li>Home</li>
          <IoHomeOutline />
        </div>
        <div className="about-item w-full flex justify-between items-center">
          <li>About us</li>
          <RiTeamLine />
        </div>
        <div className="faq-item w-full flex justify-between items-center">
          <li>FAQs</li>
          <FaQuestion />
        </div>
        <div className="listings-item w-full flex justify-between items-center">
          <li>Listings</li>
          <FaListCheck />
        </div>
      </ul>
      <h2>Logout</h2>
    </aside>
  );
};

export default Sidebar;
