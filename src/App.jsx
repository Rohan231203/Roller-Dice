import "./index.css";
import { Toaster } from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";
import LoginSection from "./components/AuthForm/LoginSection";
import SignupSection from "./components/AuthForm/SignupSection";
import { auth } from "./firebase/firebase";
import Profilepage from "./pages/ProfilePage/Profilepage";
import AboutPage from "./pages/AuthPage/AboutPage";
import HomePageSkeleton from "./pages/HomePage/HomePageSkeleton";

function App() {
  const [authUser] = useAuthState(auth);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePageSkeleton /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginSection /> : <Navigate to="/" />}
        />

        <Route
          path="/signup"
          element={!authUser ? <SignupSection /> : <Navigate to="/" />}
        />

        <Route path="/profile" element={<Profilepage />} />

        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
