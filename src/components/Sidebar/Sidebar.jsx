import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import useLogout from "../../hooks/useLogout";

const Sidebar = () => {
  const { handleLogout, } = useLogout();
  return (
    <aside
      className="w-1/6 bg-white flex flex-col justify-between items-center px-[1rem] py-[2rem] border-r-2 border-slate-400"
      style={{ height: "calc(100vh - var(--navbar-height))" }}
    >
      <ul className="w-full flex flex-col gap-3">
        <div className="profile-item w-full flex items-center gap-6 text-black text-lg font-semibold cursor-pointer rounded-xl hover:bg-slate-200 active:bg-slate-400 px-[1.4rem] h-[2.5rem]">
          <CgProfile size={21} />
          <li>Profile</li>
        </div>
        <div className="home-item w-full flex items-center gap-6 text-black text-lg font-semibold cursor-pointer rounded-xl hover:bg-slate-200 active:bg-slate-400 px-[1.4rem] h-[2.5rem]">
          <IoHomeOutline size={21} />
          <li>Home</li>
        </div>
        <div className="about-item w-full flex items-center gap-6 text-black text-lg font-semibold cursor-pointer rounded-xl hover:bg-slate-200 active:bg-slate-400 px-[1.4rem] h-[2.5rem]">
          <RiTeamLine size={21} />
          <li>About us</li>
        </div>
        <div className="faq-item w-full flex items-center gap-6 text-black text-lg font-semibold cursor-pointer rounded-xl hover:bg-slate-200 active:bg-slate-400 px-[1.4rem] h-[2.5rem]">
          <FaQuestion size={21} />
          <li>FAQs</li>
        </div>
        <div className="listings-item w-full flex items-center gap-6 text-black text-lg font-semibold cursor-pointer rounded-xl hover:bg-slate-200 active:bg-slate-400 px-[1.4rem] h-[2.5rem]">
          <FaListCheck size={21} />
          <li>Listings</li>
        </div>
      </ul>
      <div className="listings-item w-full flex items-center gap-6 text-black text-lg font-semibold cursor-pointer rounded-xl hover:bg-slate-200 active:bg-slate-400 px-[1.4rem] h-[2.5rem]">
        <LuLogOut size={21} color="red" className="rotate-180" />
        <h2 className="text-red-600" onClick={handleLogout}>Logout</h2>
      </div>
    </aside>
  );
};

export default Sidebar;
