import { GoPaperAirplane } from "react-icons/go";
import QR from "../../Assets/qr-code.svg";

const Footer = () => {
  return (
    <footer className="flex justify-between items-start bg-black px-[8rem] pt-[2rem] pb-[5rem]">
      <div className="subscribe flex items-start flex-col gap-6">
        <h3 className="text-white font-bold text-lg">Subscribe</h3>
        <p className="text-white text-base font-normal">
          Get product info in your mail
        </p>
        <div className="input bg-transparent flex h-[2.2rem] rounded-md border-white">
          <input
            type="email"
            placeholder="Enter your email"
            className="text-[0.9rem]"
          />
          <button type="submit">
            <GoPaperAirplane />
          </button>
        </div>
      </div>
      <div className="account flex items-start flex-col gap-2">
        <h3 className="text-white font-bold text-lg">Account</h3>
        <ul className="flex flex-col gap-[7px]">
          <li className="hover:text-white">
            <a href="">My account</a>
          </li>
          <li className="hover:text-white">
            <a href="">Login</a>
          </li>
          <li className="hover:text-white">
            <a href="">Sign Up</a>
          </li>
          <li className="hover:text-white">
            <a href="">Listings</a>
          </li>
        </ul>
      </div>
      <div className="quick-link flex items-start flex-col gap-2">
        <h3 className="text-white font-bold text-lg">Quick link</h3>
        <ul className="flex flex-col gap-[7px]">
          <a href="">
            <li className="hover:text-white">FAQs</li>
          </a>
          <li className="hover:text-white">
            <a href="">Contact</a>
          </li>
          <li className="hover:text-white">
            <a href="">About</a>
          </li>
        </ul>
      </div>
      <div className="download-app flex items-start flex-col gap-4">
        <h3 className="text-white font-bold text-lg">Download App</h3>
        <div className="qr-code mx-auto">
          <img src={QR} alt="" className="w-[100px] h-[100px]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
