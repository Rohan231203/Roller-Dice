import { FaSearch } from "react-icons/fa";

const LogInNav = () => {
  return (
    <nav className="navbar bg-[#141414] px-[5rem] flex justify-between h-[4rem] py-0  fixed top-0 z-10 ">
      <div className="logo text-xl text-white font-bold">VelocityMart</div>
      <div className="search-bar input h-9">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>
    </nav>
  );
};

export default LogInNav;
