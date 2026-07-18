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
