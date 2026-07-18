import React, { useState, useRef, useEffect } from "react";
import './search-box.style.css'

const Searchbox = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <div className={`search-wrapper ${open ? 'search-wrapper--open' : ''}`}>
      <input
        ref={inputRef}
        type="text"
        className="search-wrapper__input"
        placeholder="Search products..."
        onBlur={() => {
          if (!inputRef.current?.value) setOpen(false);
        }}
      />
      <button
        className="search-wrapper__btn"
        onClick={() => setOpen(!open)}
        aria-label="Search"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </button>
    </div>
  );
};

export default Searchbox;
