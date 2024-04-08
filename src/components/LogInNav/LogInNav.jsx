import { FaSearch } from "react-icons/fa";

const LogInNav = () => {
  return (
    <nav className="navbar bg-white px-[5rem] flex justify-between h-[4rem] py-0 border-b-2 border-slate-400">
      <div className="logo text-xl text-black font-bold">VelocityMart</div>
      <div className="search-bar input h-9">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>
    </nav>
  );
};

export default LogInNav;
