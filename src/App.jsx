import "./App.css";

import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Resume from "./Component/Resume/Resume";
import React, { useState, useEffect } from "react";
import Contact from "./Component/Contact/Contact";
import Portfolio from "./Component/Portfolio/Portfolio";
import About from "./Component/About/About";
import Main from "./Component/Main/Main";

function App() {
  return (
    <div className="main" style={{backgroundImage: "url('/Portfolio/src/assets/background.png') no-repeat"}}>
      <BrowserRouter>
        <Navbar />
        <Main />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
