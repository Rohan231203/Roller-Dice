import { useState, useEffect } from "react";
import "animate.css"

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    let newSlideIndex = n;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n >= slides.length) {
      newSlideIndex = 0; // Reset to the first slide
    } else if (n < 0) {
      newSlideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[newSlideIndex].style.display = "block";
    dots[newSlideIndex].className += " active";

    setSlideIndex(newSlideIndex);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1); // Auto-advance to the next slide every 2 seconds
    }, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div>
      <div className="slideshow-container max-w-full mx-auto relative max-h-[450px] overflow-hidden flex justify-center items-center bg-[#29292e] rounded-lg">
        <div className="sub-container border-white">
        <div className="mySlides fade mx-auto animate__animated animate__backInRight" key={1}>
          <img src="vit1.jpg" className="w-[600px] cover h-[350px] " alt="Slide 1" />
          
        </div>

        <div className="mySlides fade mx-auto animate__animated animate__backInRight" key={2}>
          <img src="vit2.jpg" className="w-[600px] cover h-[350px] " alt="Slide 2" />
          
        </div>

        <div className="mySlides fade mx-auto animate__animated animate__backInRight" key={3}>
          <img src="vit3.jpg" className="w-[600px] cover h-[350px] " alt="Slide 3" />
          
        </div>

        <div className="mySlides fade mx-auto animate__animated animate__backInRight" key={4}>
          <img src="vit4.jpg" className="w-[600px] cover h-[350px] " alt="Slide 4" />
          
        </div>

        </div>
        

       
      </div>
      <br />

      <div className="text-center">
        <span
          className="dot bg-gray-500 h-3 w-3 rounded-full inline-block mx-1"
          onClick={() => currentSlide(0)}
        ></span>
        <span
          className="dot bg-gray-500 h-3 w-3 rounded-full inline-block mx-1"
          onClick={() => currentSlide(1)}
        ></span>
        <span
          className="dot bg-gray-500 h-3 w-3 rounded-full inline-block mx-1"
          onClick={() => currentSlide(2)}
        ></span>
        <span
          className="dot bg-gray-500 h-3 w-3 rounded-full inline-block mx-1"
          onClick={() => currentSlide(3)}
        ></span>
      </div>
    </div>
  );
}

export default Slideshow;
