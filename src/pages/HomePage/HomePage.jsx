import LogInNav from "../../components/LogInNav/LogInNav";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import About from '../../components/About/About';

/* eslint-disable no-unused-vars */
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <LogInNav/>
      <Sidebar />
      <Footer/>
      <About/>
    </div>
  )
}
