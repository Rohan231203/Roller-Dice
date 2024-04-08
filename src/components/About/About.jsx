// import React from 'react'

function About() {
  return (
    <div>
      <div>
        <section className="flex justify-center   bg-white w-[80%]" style={{ height: "calc(100vh - var(--navbar-height))" }}>
          <div className="about-content text-center max-w-3xl mt-8">
            <h2 className="text-3xl font-bold font-mono mb-4 text-red-700	color: rgb(185 28 28);">About Us</h2>
            <p className="text-lg mb-8 text-black	color: rgb(0 0 0);">
              The Soaring Coders project aims to address the challenge of resource reusability among hostel students on campus. It aims to provide a centralized platform called VelocityMart, where students can easily browse, negotiate, and get second-hand books, electrical components, mattresses, and other essentials. The platform also features robust search functionality, efficient communication tools, and real-time messaging to facilitate the sharing and renting of resources within the hostel community. The project aims to promote resource sharing, minimize waste, and provide a convenient way for students to access and rent various items essential for their academic and personal needs.
            </p>
            <div className="flex justify-center gap-x-16 mt-10">
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar flex-column">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About