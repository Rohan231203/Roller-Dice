import toast from "react-hot-toast";
import LoginSection from "../components/LoginSection/LoginSection";
import SignupSection from "../components/SignupSection/SignupSection";

export default function Login() {
  const hello = () => {
    console.log("Bruhhh");
    toast("Here is your toast.");
  };
  return (
    <div>
      <button onClick={hello}>Login</button>
      <LoginSection />
      <SignupSection />
    </div>
  );
}
