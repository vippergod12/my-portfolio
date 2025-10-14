import React, { useState } from 'react'; // 1. Import useState
import './Navbar.css';

const Navbar = () => {
  // 2. Tạo state để theo dõi trạng thái menu (đóng hay mở)
  const [isOpen, setIsOpen] = useState(false);

  // 3. Hàm để bật/tắt menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="nav-logo">
        MyPortfolio
      </a>

      {/* 4. Thêm class 'active' khi state isOpen là true */}
      <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Products</a></li>
        <li><a href="#about">About me</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#hire" className="hire-me-btn">Hire me</a></li>
      </ul>

      {/* 5. Thêm sự kiện onClick để gọi hàm toggleMenu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;