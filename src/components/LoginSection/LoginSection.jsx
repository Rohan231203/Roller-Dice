import College from "../../Assets/college.svg";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginSection = () => {
  return (
    <main className="w-full px-[6rem] pt-[3rem] pb-[5rem] bg-white flex relative">
      <div className="hero-img w-3/6">
        <img src={College} alt="College.svg" width="550px" height="550px" />
      </div>
      <section className="w-3/6 flex items-center justify-center flex-col ">
        <div className="login-container flex items-start flex-col gap-8 p-[1.5rem]">
          <div className="header-login flex flex-col gap-3">
            <h2 className="text-3xl text-black font-bold">
              Login in to VelocityMart
            </h2>
            <p className="text-slate-700 text-lg">Enter your details here</p>
          </div>
          <form action="" className="flex flex-col gap-4">
            <div className="email-cont flex justify-center items-center gap-3">
              <MdOutlineEmail size={20} />
              <input
                type="email"
                placeholder="Enter your VIT mail"
                className="px-3 py-1 bg-transparent border-b-2 border-slate-600 placeholder:text-slate-400 pl-1 w-[230px] text-[15px] "
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
          <div className="buttons w-full flex justify-around mt-[1rem]">
            <button
              type="button"
              className=" bg-[#DB4444] flex justify-center items-center text-white font-medium  text-sm px-6 py-2 rounded-sm hover:text-[#DB4444] hover:bg-transparent hover:border-2 hover:py-1 border-[#DB4444]"
            >
              Login
            </button>
            <button
              type="button"
              className="flex justify-center items-center text-[#DB4444] text-sm font-medium px-6 py-2 rounded-sm hover:underline hover:underline-offset-4 hover:decoration-2"
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginSection;
