import { useEffect, useState } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 600);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`splash ${fadeOut ? "splash--hidden" : ""}`}>
      <div className="splash__inner">
        <svg className="splash__logo" viewBox="0 0 100 100" width="80" height="80">
          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
          <circle cx="50" cy="50" r="18" fill="#FFD700" className="splash__sun"/>
          <line x1="50" y1="8" x2="50" y2="20" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" className="splash__ray"/>
          <line x1="50" y1="80" x2="50" y2="92" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" className="splash__ray"/>
          <line x1="8" y1="50" x2="20" y2="50" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" className="splash__ray"/>
          <line x1="80" y1="50" x2="92" y2="50" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" className="splash__ray"/>
          <line x1="20.3" y1="20.3" x2="29" y2="29" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" className="splash__ray"/>
          <line x1="71" y1="71" x2="79.7" y2="79.7" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" className="splash__ray"/>
          <line x1="20.3" y1="79.7" x2="29" y2="71" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" className="splash__ray"/>
          <line x1="71" y1="29" x2="79.7" y2="20.3" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" className="splash__ray"/>
        </svg>
        <h1 className="splash__title">Crafted Sol</h1>
        <p className="splash__sub">Premium fashion, crafted for you.</p>
        <div className="splash__loader">
          <div className="splash__bar" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
