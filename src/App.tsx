import React, { useState } from 'react'
import SmokeyCursor from "./components/lightswind/smokey-cursor";
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from "./components/contact/Contact";
import AboutPage from './components/aboutme/AboutMe';
import "./App.css"
function App() {

  return (
    <div className="app">
      <SmokeyCursor />
      <BrowserRouter>
        <div className="container h-screen">
          <div className="navbar">
            <Navbar/>
          </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/aboutme" element={<AboutPage/>}/>
              {/* Thêm các trang khác ở đây, ví dụ: */}
              {/* <Route path="/projects" element={<ProjectsPage />} /> */}
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
