import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../src/Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import mediaquery from "./Components/Style/mediaquery.css";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Work" element={<Work />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
