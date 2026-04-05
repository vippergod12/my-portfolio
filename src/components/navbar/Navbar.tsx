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

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        MyPortfolio
      </Link>

      <ul
        id="nav-menu"
        className={isOpen ? 'nav-links active' : 'nav-links'}
        aria-hidden={!isOpen}
      >
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
        <li><Link to="/aboutme" onClick={closeMenu}>About me</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        <li><Link to="/hire" className="hire-me-btn" onClick={closeMenu}>Hire me</Link></li>
      </ul>

      <button
        type="button"
        className="hamburger"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="nav-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
};

export default Navbar;