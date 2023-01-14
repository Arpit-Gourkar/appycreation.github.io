import React from "react";
import about from "../About/about.css";
import { BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";

const ABout = () => {
  return (
    <>
      <div className="about">
        <div className="about-heading">
          <h3>I am a Wedding Photographer</h3>
          <h1>......Arpit Gourkar......</h1>
        </div>
        <div className="about-content">
          <p>
            Right after my graduation from the New India School of Photography
            in India, MA I began doing my gigs. After first few years of working
            at the event agency and with dozens of beautiful wedding sets
            already in my portfolio, I decided to give it a go and opened up my
            very own wedding photography service
          </p>
        </div>
        <div className="about-social">
          <article>
            <div
              id="github"
              style={{
                animationDelay: "0.7s",
              }}
            >
              <a href="https://github.com/Arpit-Gourkar">
                <BsGithub />
              </a>
              <p>GitHub</p>
            </div>

            <div
              id="instagram"
              style={{
                animationDelay: "1s",
              }}
            >
              <a href="https://www.instagram.com/arpitgaurkar000/">
                <BsInstagram />
              </a>
              <p>Instagram</p>
            </div>
            <div
              id="facebook"
              style={{
                animationDelay: "1.5s",
              }}
            >
              <a href="https://www.facebook.com/arpit.gourkar.7">
                <BsFacebook id="facebook-icon" />
              </a>

              <p>FaceBook</p>
            </div>
          </article>
        </div>
        <div className="about2">
          <div className="section1">
            <h3>---WHY WEDDINGSUTRA?---</h3>
            <p>
              We understand Weddings. We have been writing about and featuring
              weddings since over a decade. It’s our love. It’s our Life. We are
              completely focused on bringing the best of wedding news, trends
              and advice to our readers, we have the best team in the business
              and we are lucky to work with digital-savvy advertisers.
            </p>
          </div>

          <div className="section2">
            <h3>---OUR AUDIENCE---</h3>
            <p>
              Our audience includes engaged couples and families. Billions of
              rupees are spent on fashion, jewellery, beauty, travel, gifts,
              wedding services and others as millennial couples plan for their
              future. Reaching them at this moment is crucial, as brand
              loyalties are forming and spending patterns are changing —they are
              not only planning for their big day, but also for life beyond it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ABout;
