import { useState } from 'react';
import Searchbox from "./Icons/search-box/search-box.component";
import Account from "./Icons/account-icon/account.component";
import Cart from "./Icons/cart-icon/cart.component";
import Wish from "./Icons/wishlist-icon/wishlist.component";
import './navbar.style.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">
          <svg className="navbar__logo-icon" viewBox="0 0 100 100" width="32" height="32">
            <circle cx="50" cy="50" r="45" fill="#7085B6" opacity="0.3"/>
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
        </div>

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
          <div className="navbar__search">
            <Searchbox />
          </div>
          <div className="navbar__links">
            <a href="#men">Men</a>
            <a href="#women">Women</a>
            <a href="#shoes">Shoes</a>
            <a href="#bags">Bags</a>
            <a href="#afri-culture">Afri Culture</a>
            <a href="#signatures">Signatures</a>
          </div>
        </div>

        <div className="navbar__icons">
          <Wish />
          <Cart />
          <Account />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
