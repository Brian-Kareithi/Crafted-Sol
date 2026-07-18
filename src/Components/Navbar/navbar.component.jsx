import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../../Context/AppContext';
import Searchbox from "./Icons/search-box/search-box.component";
import './navbar.style.css';

const WishIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const CartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

const AccountIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, wishlistCount } = useApp();
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="navbar">
        <div className="navbar__inner">
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <Link to="/" className="navbar__logo" onClick={closeMenu}>
            <img src="/logo.svg" alt="Crafted Sol" className="navbar__logo-img" />
          </Link>

          <div className="navbar__center">
            <div className="navbar__links">
              <Link to="/">Home</Link>
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
            <Link to="/wishlist" className={`navbar__icon-btn ${isActive('/wishlist') ? 'navbar__icon-btn--active' : ''}`} aria-label="Wishlist">
              <WishIcon />
              {wishlistCount > 0 && <span className="navbar__badge">{wishlistCount}</span>}
            </Link>
            <Link to="/cart" className={`navbar__icon-btn ${isActive('/cart') ? 'navbar__icon-btn--active' : ''}`} aria-label="Cart">
              <CartIcon />
              {cartCount > 0 && <span className="navbar__badge">{cartCount}</span>}
            </Link>
            <Link to="/profile" className={`navbar__icon-btn ${isActive('/profile') ? 'navbar__icon-btn--active' : ''}`} aria-label="Profile">
              <AccountIcon />
            </Link>
          </div>
        </div>
      </nav>

      <div className={`sidebar-overlay ${menuOpen ? 'sidebar-overlay--open' : ''}`} onClick={closeMenu} />
      <aside className={`sidebar ${menuOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar__header">
          <img src="/logo.svg" alt="Crafted Sol" style={{ height: 32 }} />
          <button className="sidebar__close" onClick={closeMenu} aria-label="Close menu"><CloseIcon /></button>
        </div>
        <div className="sidebar__links">
          <Link to="/" onClick={closeMenu} className={isActive('/') ? 'active' : ''}>Home</Link>
          <a href="#men" onClick={closeMenu}>Men</a>
          <a href="#women" onClick={closeMenu}>Women</a>
          <a href="#shoes" onClick={closeMenu}>Shoes</a>
          <a href="#bags" onClick={closeMenu}>Bags</a>
          <a href="#afri-culture" onClick={closeMenu}>Afri Culture</a>
          <a href="#signatures" onClick={closeMenu}>Signatures</a>
        </div>
        <div className="sidebar__divider" />
        <div className="sidebar__links">
          <Link to="/cart" onClick={closeMenu} className={isActive('/cart') ? 'active' : ''}>
            Cart {cartCount > 0 && `(${cartCount})`}
          </Link>
          <Link to="/wishlist" onClick={closeMenu} className={isActive('/wishlist') ? 'active' : ''}>
            Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
          </Link>
          <Link to="/profile" onClick={closeMenu} className={isActive('/profile') ? 'active' : ''}>Profile</Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
