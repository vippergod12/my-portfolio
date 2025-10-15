import { useState } from 'react'; // 1. Import useState
import { Link } from 'react-router-dom';
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
      <Link to="/" className="nav-logo">
        MyPortfolio
      </Link>

      {/* 4. Thêm class 'active' khi state isOpen là true */}
      <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/aboutme">About me</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/hire" className="hire-me-btn">Hire me</Link></li>
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