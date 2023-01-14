import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../Images/one.jpg";
import slide2 from "../Images/two.jpg";
import slide3 from "../Images/three.jpg";
import slide4 from "../Images/four.jpg";
const Home3 = () => {
  return (
    <>
      <div className="imageslider">
        <Carousel
          className="carousel1"
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          interval={1000}
        
        >
          <div>
            <img src={slide1} alt="image" />
          </div>
          <div>
            <img src={slide2} alt="image" />
          </div>
          <div>
            <img src={slide3} alt="image" />
          </div>
          <div>
            <img src={slide4} alt="image" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Home3;
