import SmokeyCursor from "./components/lightswind/smokey-cursor";
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from "./components/contact/Contact";
import AboutPage from './components/aboutme/AboutMe';
import ProjectsPage from './components/product/ProjectsPage';
import ProjectDetail from './components/product/ProjectDetail';
import HireMe from './components/hire/HireMe';
import ThemeToggle from './components/theme/ThemeToggle';
import "./App.css"

function App() {
  return (
    <div className="app">
      <SmokeyCursor />
      <BrowserRouter>
        <div className="flex min-h-screen w-full max-w-full flex-col">
          <Navbar />
          <main className="flex w-full max-w-full flex-1 flex-col min-h-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/aboutme" element={<AboutPage />} />
              <Route path="/products" element={<ProjectsPage />} />
              <Route path="/products/:slug" element={<ProjectDetail />} />
              <Route path="/hire" element={<HireMe />} />
            </Routes>
          </main>
          <ThemeToggle />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
