import React, { useState } from 'react'
import SmokeyCursor from "./components/lightswind/smokey-cursor";
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import "./App.css"
function App() {

  return (
    <div className="app">
      <SmokeyCursor />
      <div className="container">
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="Home">
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App
