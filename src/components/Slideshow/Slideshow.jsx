import { useState } from "react";
import Notes from "../../Assets/notes.jpg";
import Dumbbell from "../../Assets/dumbbell.webp";
import SolderingIron from "../../Assets/soldering-iron.webp";

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1);

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

    if (n > slides.length) {
      newSlideIndex = 1;
    } else if (n < 1) {
      newSlideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setSlideIndex(newSlideIndex);
  }

  return (
    <div>
      <div className="slideshow-container max-w-full mx-auto relative max-h-[400px] overflow-hidden flex justify-center items-center">
        <div className="mySlides fade mx-auto">
          {/* <div className="numbertext">1 / 3</div> */}
          <img src={Notes} className="w-[600px]" alt="Slide 1" />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade mx-auto">
          {/* <div className="numbertext">2 / 3</div> */}
          <img src={Dumbbell} className="w-[600px]" alt="Slide 2" />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade mx-auto">
          {/* <div className="numbertext">3 / 3</div> */}
          <img src={SolderingIron} className="w-[600px]" alt="Slide 3" />
          <div className="text">Caption Three</div>
        </div>

        <button
          className="prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white font-bold py-2 px-4 rounded-l focus:outline-none"
          onClick={() => plusSlides(-1)}
        >
          &#10094;
        </button>
        <button
          className="next absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white font-bold py-2 px-4 rounded-r focus:outline-none"
          onClick={() => plusSlides(1)}
        >
          &#10095;
        </button>
      </div>
      <br />

      <div className="text-center">
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
