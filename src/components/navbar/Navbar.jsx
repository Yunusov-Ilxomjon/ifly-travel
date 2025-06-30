import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from './nav-logo.png';
import facebook from './facebook.png';
import twitter from './twitter.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png';
import youtube from './youtube.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
<div className="navbar">
          <div className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          <img src={logo} alt="Logo" width={60} />
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className={`nav-link ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="./travel" onClick={closeMenu}>Ekskursiyalar</a></li>
            <li><a href="#" onClick={closeMenu}>Shahar</a></li>
            <li><a href="/about" onClick={closeMenu}>Haqida</a></li>
            <li><a href="#" onClick={closeMenu}>Aloqaga chiqish</a></li>
          </ul>

          {/* Mobil tillar */}
          <div className="mobile-langs">
            <span onClick={closeMenu}>Uzbek</span>
            <span onClick={closeMenu}>Russian</span>
            <span onClick={closeMenu}>English</span>
          </div>

          {/* Mobil iconlar */}
          <div className="mobile-socials">
            <a href="https://facebook.com" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" width={24} />
            </a>
            <a href="https://twitter.com" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" width={24} />
            </a>
            <a href="https://instagram.com" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" width={24} />
            </a>
            <a href="https://linkedin.com" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" width={24} />
            </a>
            <a href="https://youtube.com" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" width={24} />
            </a>
          </div>
        </div>

        {/* Desktop iconlar va tillar */}
        <div className="nav-contact">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" width={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" width={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" width={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" width={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" width={24} />
          </a>
          <select>
            <option value="">Uzbek</option>
            <option value="">Russian</option>
            <option value="">English</option>
          </select>
        </div>
      </div>


</div>
  );
};

export default Navbar;
