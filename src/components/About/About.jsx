<<<<<<< HEAD
// import React from 'react'

export default function about() {
    return (
        <>
            <section className="flex flex-col justify-center items-center bg-gray-200 py-20">
                <div className="about-content text-center max-w-3xl">
                    <h2 className="text-3xl font-bold mb-4">About Us</h2>
                    <p className="text-lg mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at libero sed turpis mattis dictum. Nulla facilisi. Sed quis est ac ligula aliquet tincidunt. Vestibulum placerat luctus neque at ultricies. Ut vitae urna eu justo pharetra vestibulum vel ut lectus. Sed eget odio sit amet sapien mattis fermentum ac sed odio. Nam vulputate risus in lacinia suscipit.
                    </p>
                    <p className="text-lg">
                        Phasellus vestibulum urna vel odio vehicula, vel placerat nisl congue. Morbi fermentum nisi at justo tristique vehicula. Integer dapibus diam nec augue tempor, et vehicula orci blandit. Vestibulum a ex vitae turpis tristique lobortis. Aenean id dui leo. Duis viverra nisl sit amet quam consequat vestibulum. Integer quis justo ut sem malesuada congue et eget turpis.
                    </p>
                </div>
            </section></>
    )
}
=======
import React from 'react'

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
>>>>>>> 1137518888c07eb4e2c3c160e1c691115c0ab192
