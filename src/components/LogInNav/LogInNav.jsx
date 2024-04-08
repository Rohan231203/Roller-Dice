import { FaSearch } from "react-icons/fa";

const LogInNav = () => {
  return (
    <nav className="navbar bg-white px-[5rem] flex justify-between h-[4rem] py-0 border-b-2 border-slate-400">
      <div className="logo text-xl text-black font-bold">VelocityMart</div>
      <ul className="flex gap-9 text-black">
        <li className="py-5">
          <a href="">Home</a>
        </li>
        <li className="py-5">
          <a href="">Contact</a>
        </li>
        <li className="py-5">
          <a href="">About</a>
        </li>
        <li className="underline underline-offset-4">
          <a href="">Log in</a>
        </li>
      </ul>
      <div className="search-bar input h-9">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>
    </nav>
  );
};

export default LogInNav;
