import React from "react";
import { NavLink } from "react-router-dom";
import footer from "../Footer/footer.css";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import whatsapp from "../Images/whatsapp.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <p>2022 © Apppy Creation (India) Pvt. Ltd</p>
        <div className="footer-content">
          <div className="link">
            <NavLink id="navlink" exact to="/About">
              About
            </NavLink>
            <NavLink id="navlink" exact to="/Work">
              Work
            </NavLink>
            <NavLink id="navlink" exact to="/Contact">
              Contact
            </NavLink>
          </div>
          <div className="social-icon">
            <a href="https://www.instagram.com/arpitgaurkar000/">
              <BsInstagram className="s-icon" />
            </a>
            <a href="https://github.com/Arpit-Gourkar">
              <BsGithub className="s-icon" />
            </a>
            <a href="mailto:arpitgaurkar000@gmail.com">
              <CgMail className="s-icon" />
            </a>
          </div>
          <div className="whatsapp">
            <p>Scan Me For Whatsapp</p>
            <img src={whatsapp} alt="Whatsapp Link" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
