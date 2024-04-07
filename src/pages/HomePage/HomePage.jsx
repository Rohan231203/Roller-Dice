/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../../components/Card/Card'
import Modal from '../../components/Modal/Modal'

export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col  bg-white w-[80%] text-black" style={{ height: "calc(100vh - var(--navbar-height))" }}>
        <div className="flex flex-row  h-[40%]">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 m-16">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <div className='flex flex-col mt-12 text-xl  w-[40%] px-8 py-1 '>
              <div className='text-3xl font-bold  mb-1 font-mono text-red-500 '>Aytaditya</div>
              <div className='  mb-1  text-black '>Aditya Aryan</div>
              <div className="">A-Block Vellore Institute of Technology,Chennai,Tamil Nadu</div>
            </div>
          </div>

        </div>
        
        <div className="flex flex-row gap-10 justify-center items-center mt-[-1px]">
          <button className="btn btn-sm btn-slate-200 ">View Your Listed Items</button>
          <button className="btn btn-sm btn-error ">View Your History</button>
        </div>
        <div className="divider mt-[-1px]"></div>
        <div className="my-3 mx-5">
          <Card/>
          <Modal/>
        </div>



      </div>
    </div>
  )
}
