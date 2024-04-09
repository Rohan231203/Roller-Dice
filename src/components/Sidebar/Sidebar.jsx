import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineQuestionMark } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

import useLogout from "../../hooks/useLogout";
import Modal from "../Modal/Modal";

const Sidebar = () => {
  const { handleLogout } = useLogout();
  return (
    <aside
      className="w-1/6 bg-[#141414]  flex flex-col justify-between items-center px-[1rem] py-[2rem] "
      style={{ height: "calc(100vh - var(--navbar-height))" }}
    >
      <ul className="w-full flex flex-col gap-3 ">
        <Link to="/profile">
          <div className="profile-item w-full flex items-center gap-6 text-[#b6b5b5] text-md font-semibold cursor-pointer rounded-xl hover:bg-slate-300 hover:text-black active:bg-slate-400 px-[1.4rem] h-[2.5rem] ">
            <CgProfile size={19} />
            <Link to="/profile">Profile</Link>
          </div>
        </Link>
        <Link to="/">
          <div className="home-item w-full flex items-center gap-6 text-[#b6b5b5]  text-md font-semibold cursor-pointer rounded-xl hover:bg-slate-300 hover:text-black active:bg-slate-400 px-[1.4rem] h-[2.5rem]  ">
            <IoHomeOutline size={19} />
            <li>Home</li>
          </div>
        </Link>
        <Link to="/about">
          <div className="about-item w-full flex items-center gap-6  text-md font-semibold cursor-pointer rounded-xl text-[#b6b5b5]  hover:bg-slate-300 hover:text-black active:bg-slate-400 px-[1.4rem] h-[2.5rem] ">
            <RiTeamLine size={19} />
            <li>About us</li>
          </div>
        </Link>
        <Link to="/faq">
          <div className="faq-item w-full flex items-center gap-6 text-[#b6b5b5]  text-md font-semibold cursor-pointer rounded-xl hover:bg-slate-300 hover:text-black active:bg-slate-400 px-[1.4rem] h-[2.5rem] ">
            <MdOutlineQuestionMark size={19} />
            <li>FAQs</li>
          </div>
        </Link>
        <div className="faq-item w-full flex items-center text-[#b6b5b5] text-md font-semibold cursor-pointer rounded-xl hover:bg-slate-300 hover:text-black active:bg-slate-400 px-[1.5rem] h-[2.5rem] ">
          <FaPlus />
          <Modal />
        </div>
      </ul>
      <div className="listings-item w-full flex items-center gap-6 text-[#b6b5b5] text-md font-semibold cursor-pointer rounded-xl hover:bg-slate-300 active:bg-slate-400 px-[1.4rem] h-[2.5rem] ">
        <LuLogOut size={19} color="red" className="rotate-180" />
        <h2 className="text-red-600" onClick={handleLogout}>
          Logout
        </h2>
      </div>
    </aside>
  );
};

export default Sidebar;
