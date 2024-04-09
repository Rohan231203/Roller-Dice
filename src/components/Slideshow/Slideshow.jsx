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
      plusSlides(1);
    }, 2000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div>
      <div className="slideshow-container max-w-[70%] mx-auto relative max-h-[450px] overflow-hidden flex justify-center items-center h-[400px]  rounded-lg">

        <div className="sub-container border-white ">
        <div className="mySlides fade mx-auto animate__animated " key={1}>
          <img src="Circles-pana.png" className=" object-cover h-[350px] " alt="Slide 1" />
        </div>

        <div className="mySlides fade mx-auto animate__animated " key={2}>
          <img src="college students-pana.png" className="w-[600px] object-cover h-[350px] " alt="Slide 2" />
        </div>

   

        <div className="mySlides fade mx-auto animate__animated " key={4}>
          <img src="Education-pana.png" className="w-[600px] object-cover h-[350px] " alt="Slide 4" />
        </div>

        <div className="mySlides fade mx-auto animate__animated " key={4}>
          <img src="Physical education-pana.png" className="w-[600px] object-cover h-[350px] " alt="Slide 4" />
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
