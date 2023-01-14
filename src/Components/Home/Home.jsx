import React from "react";
import home from "../Home/home.css";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";

const Home = () => {
  return (
    <>
      <div className="Homemain">
        <div className="home">
          <div className="home-heading">
            <h1>Hello</h1>
            <h2>I am Arpit Gourkar</h2>
            <p>I am Cinemetographer</p>
          </div>
        </div>
        <Home2 />
        <Home3 />
        <Home4 />
      </div>
    </>
  );
};

export default Home;
