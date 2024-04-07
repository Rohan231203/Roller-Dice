import toast from "react-hot-toast";
import LoginSection from "../components/LoginSection/LoginSection";
import SignupSection from "../components/SignupSection/SignupSection";
import LogInNav from "../components/LogInNav/LogInNav";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Login() {
  const hello = () => {
    console.log("Bruhhh");
    toast("Here is your toast.");
  };
  return (
    <div>
      {/* <button onClick={hello}>Login</button> */}
      <LogInNav />
      <Sidebar />
      {/* <LoginSection /> */}
      {/* <SignupSection /> */}
      <Footer />
    </div>
  );
}
