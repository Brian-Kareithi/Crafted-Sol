import React from 'react';
import './App.css';
import BackgroundSlider from "./Components/Sliders/LandingPage/backgroundslider.component";
import Navbar from "./Components/Navbar/navbar.component";
import Homecard01Componenet from "./Components/cards/homepagecard1/homecard01.componenet";
import Fetcher from "./Components/Sliders/PageCourosel/caurosel1fetch.component";
import Productslide from "./Components/Sliders/ProductDisplay/prouctslide.component";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <BackgroundSlider />
        <Homecard01Componenet />
        <Fetcher />
        <Productslide />
      </main>
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__col">
            <h4>Crafted Sol</h4>
            <p>Your destination for premium fashion. Quality meets style.</p>
            <div className="footer__social">
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer__col">
            <h4>Quick Links</h4>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Shoes</a>
            <a href="#">Bags</a>
          </div>
          <div className="footer__col">
            <h4>Customer Care</h4>
            <a href="#">Help Center</a>
            <a href="#">Shipping Info</a>
            <a href="#">Returns</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign:'middle',marginRight:8}}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              hello@craftedsol.com
            </p>
            <p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign:'middle',marginRight:8}}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +254 119 343 294
            </p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2026 Crafted Sol. All rights reserved. Made with care in Kenya.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
