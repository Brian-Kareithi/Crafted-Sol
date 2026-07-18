import { useState } from 'react';
import Searchbox from "./Icons/search-box/search-box.component";
import './navbar.style.css';

const WishIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const CartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

const AccountIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          <svg className="navbar__logo-icon" viewBox="0 0 100 100" width="32" height="32">
            <circle cx="50" cy="50" r="45" fill="#7085B6" opacity="0.25"/>
            <circle cx="50" cy="50" r="18" fill="#FFD700"/>
            <line x1="50" y1="8" x2="50" y2="20" stroke="#FFD700" strokeWidth="3" strokeLinecap="round"/>
            <line x1="50" y1="80" x2="50" y2="92" stroke="#FFD700" strokeWidth="3" strokeLinecap="round"/>
            <line x1="8" y1="50" x2="20" y2="50" stroke="#FFD700" strokeWidth="3" strokeLinecap="round"/>
            <line x1="80" y1="50" x2="92" y2="50" stroke="#FFD700" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20.3" y1="20.3" x2="29" y2="29" stroke="#FFD700" strokeWidth="3" strokeLinecap="round"/>
            <line x1="71" y1="71" x2="79.7" y2="79.7" stroke="#FFD700" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20.3" y1="79.7" x2="29" y2="71" stroke="#FFD700" strokeWidth="3" strokeLinecap="round"/>
            <line x1="71" y1="29" x2="79.7" y2="20.3" stroke="#FFD700" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <h1>Crafted Sol</h1>
        </a>

        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar__center ${menuOpen ? 'navbar__center--open' : ''}`}>
          <div className="navbar__links">
            <a href="#men">Men</a>
            <a href="#women">Women</a>
            <a href="#shoes">Shoes</a>
            <a href="#bags">Bags</a>
            <a href="#afri-culture">Afri Culture</a>
            <a href="#signatures">Signatures</a>
          </div>
        </div>

        <div className="navbar__actions">
          <Searchbox />
          <button className="navbar__icon-btn" aria-label="Wishlist"><WishIcon /></button>
          <button className="navbar__icon-btn" aria-label="Cart"><CartIcon /></button>
          <button className="navbar__icon-btn" aria-label="Account"><AccountIcon /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
