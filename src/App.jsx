import "./index.css";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import LogInNav from "./components/LogInNav/LogInNav";
import SignUpNav from "./components/SignUpNav/SignUpNav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <LogInNav />
      <SignUpNav />
      <Footer />
      <Login />
      <Toaster />
    </>
  );
}

export default App;
