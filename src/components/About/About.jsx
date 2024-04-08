// import React from 'react'

function About() {
  return (
     
        <section className="flex justify-center overflow-y-auto bg-white w-5/6" style={{ height: "calc(100vh - var(--navbar-height))" }}>
          <div className="about-content text-center max-w-3xl mt-8 bg-[url('Assets\cool-background.png')]">
            <h2 className="text-5xl font-bold font-mono mb-4 text-red-700	color: rgb(185 28 28);">About Us</h2>
            <p className="text-xl mb-8 text-black	color: rgb(0 0 0);">
              The Soaring Coders project aims to address the challenge of resource reusability among hostel students on campus. It aims to provide a centralized platform called VelocityMart, where students can easily browse, negotiate, and get second-hand books, electrical components, mattresses, and other essentials. The platform also features robust search functionality, efficient communication tools, and real-time messaging to facilitate the sharing and renting of resources within the hostel community. The project aims to promote resource sharing, minimize waste, and provide a convenient way for students to access and rent various items essential for their academic and personal needs.
            </p>
            <div className="flex w-[100%] gap-x-8 mt-10  h-[15rem]">
              <div className="flex flex-col p-4 gap-3">
                <h1 className="font-mono font-bold" >ADITYA</h1>
                <div className="avatar ">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                
                </div>
                <h1>laudu NO 1</h1>
              </div>
              <div className="flex flex-col p-4 gap-3">
                <h1 className="font-mono font-bold" >PRIYAM</h1>
                <div className="avatar ">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                
                </div>
                <h1>GANDU</h1>
              </div>
              <div className="flex flex-col p-4 gap-3">
                <h1 className="font-mono font-bold" >ROHAN</h1>
                <div className="avatar ">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                
                </div>
                <h1>bhasond</h1>
              </div>
              <div className="flex flex-col p-4 gap-3">
                <h1 className="font-mono font-bold" >ASHAHAR</h1>
                <div className="avatar ">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                
                </div>
                <h1>cutu</h1>
              </div>
              <div className="flex flex-col p-4 gap-3">
                <h1 className="font-mono font-bold" >AKSHANSH</h1>
                <div className="avatar ">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                
                </div>
                <h1>Kanizah ka boyfriend</h1>
              </div>


            
          </div>
          </div>
        </section>
     
  )
}

export default About