/* eslint-disable no-unused-vars */
import "./index.css";
// import Login from "./pages/Login"; 
import { Toaster } from "react-hot-toast";
// import useAuthStore from "./store/authStore";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Route,  Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginSection from "./components/AuthForm/LoginSection";
import SignupSection from "./components/AuthForm/SignupSection";
import { auth } from "./firebase/firebase";



function App() {
  const [authUser]=useAuthState(auth);
  
  return (
    <>
    
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginSection />} />
        
        <Route path='/signup' element={<SignupSection />} />
       
   
      </Routes>
      <Toaster/>
      </>

    
      
      

      
    
    
      
    
  );
}

export default App;
