import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import work from "../Work/work.css";
import one from "../Images/Work/caroone.jfif";
import two from "../Images/Work/carotwo.jfif";
import three from "../Images/Work/carothree.jpg";
import four from "../Images/Work/carofour.png";
import five from "../Images/Work/carofive.jpg";
import six from "../Images/Work/carosix.jfif";
import Data from "./WorkData";

const Work = () => {
  return (
    <>
      <div className="work-container">
        <Mycarousel />
        <div className="work-container2">
          <font>Here Is My Some Awsome Work</font>
          <div className="workimages">
            {Data.map((workgallary) => {
              return (
                <>
                  <img src={workgallary.src} alt="image one" id="workimg" />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;

const Mycarousel = () => {
  return (
    <Carousel
      className="mycarousel"
      infiniteLoop
      autoPlay
      showStatus={false}
      showArrows={false}
      interval={1000}
      showThumbs={false}
    >
      <div>
        <img
          src={one}
          alt="img1"
          height="400px"
          width="200px"
          objectFit={"cover"}
        />
      </div>
      <div>
        <img
          src={two}
          alt="img1"
          height="400px"
          width="200px"
          objectFit={"cover"}
        />
      </div>
      <div>
        <img
          src={three}
          alt="img1"
          height="400px"
          width="200px"
          objectFit={"cover"}
        />
      </div>
      <div>
        <img
          src={four}
          alt="img1"
          height="400px"
          width="200px"
          objectFit={"cover"}
        />
      </div>
      <div>
        <img
          src={five}
          alt="img1"
          height="400px"
          width="200px"
          objectFit={"cover"}
        />
      </div>
      <div>
        <img
          src={six}
          alt="img1"
          height="400px"
          width="200px"
          objectFit={"cover"}
        />
      </div>
    </Carousel>
  );
};
