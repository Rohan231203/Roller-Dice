/* eslint-disable no-unused-vars */
import React from 'react'
import ProfileSection from '../../components/ProfileSection/ProfileSection.jsx'
// import ProfileSection from "./components/ProfileSection/ProfileSection";
import LogInNav from "../../components/LogInNav/LogInNav.jsx";
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer.jsx';



export default function Profilepage() {
  return (
    <div className='h-screen'>
      <LogInNav/>
      
      <div className="flex">
      <Sidebar/>
      <ProfileSection/>
      </div>
      <Footer/>
    
     
   
     
    </div>
  )
}
