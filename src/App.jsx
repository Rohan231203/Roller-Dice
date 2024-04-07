import "./index.css";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import LogInNav from "./components/LogInNav/LogInNav";
import SignUpNav from "./components/SignUpNav/SignUpNav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
<<<<<<< HEAD
     <div className="navbar bg-blue-400"></div>
     <div className="flex">
        <div className="sidebar flex flex-col items-center text-white w-1/4 h-screen">Hi</div>
        <div className="content bg-slate-400 text-white w-3/4 h-screen">this is content</div>
     </div>
=======
      <LogInNav />
      <SignUpNav />
      <Footer />
      <Login />
      <Toaster />
>>>>>>> 9208722120a95c107f4af4f3141f3b1165eadacd
    </>
  );
}

export default App;
