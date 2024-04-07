/* eslint-disable react/no-unescaped-entities */
import College from "../../Assets/college.svg";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginSection = () => {
  return (
    <main
      className="w-full h-[calc(100vh - 4rem)] pb-[3rem] px-[6rem] bg-white flex relative"
      style={{ height: "calc(100vh - var(--navbar-height))" }}
    >
      <div className="hero-img w-3/6">
        <img src={College} alt="College.svg" width="550px" height="550px" />
      </div>
      <section className="w-3/6 flex items-center justify-center flex-col ">
        <div className="login-container flex items-center flex-col gap-8 p-[2.5rem] border-2">
          <div className="header-login flex flex-col gap-3">
            <h2 className="text-3xl text-black font-bold">
              Login to <span className="text-[#DB4444]">VelocityMart</span>
            </h2>
          </div>
          <form action="" className="flex flex-col gap-4">
            <div className="email-cont flex justify-center items-center gap-3">
              <MdOutlineEmail size={20} />
              <input
                type="email"
                placeholder="Enter your VIT mail"
                className="px-3 py-1 bg-transparent border-b-2 border-slate-600 placeholder:text-slate-400 pl-1 w-full text-[15px] "
              />
            </div>
            <div className="password-cont flex justify-center items-center gap-3">
              <RiLockPasswordLine size={20} />
              <input
                type="password"
                name="password"
                id=""
                placeholder="Password"
                className="px-3 py-1 bg-transparent border-b-2 border-slate-600 placeholder:text-slate-400 pl-1 w-[230px] text-[15px]"
              />
            </div>
          </form>
          <div className="buttons w-full flex flex-col gap-4 justify-around mt-[1rem]">
            <button
              type="button"
              className="w-full bg-[#DB4444] flex justify-center items-center text-white font-medium text-base h-10 rounded-sm hover:text-[#DB4444] hover:bg-transparent hover:border-2 hover:py-1 border-[#DB4444]"
            >
              Login
            </button>
            <div className="login-link flex justify-center items-center gap-2">
              <p className="text-sm text-black">Don't have an account?</p>
              <a
                href="#"
                className="text-sm text-black font-medium underline underline-offset-4"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginSection;
