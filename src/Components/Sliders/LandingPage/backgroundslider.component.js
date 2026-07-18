import React, { useEffect, useState } from "react";
import './backgroundslider.component.css';
import ImageSlide from "./imageprac";
import Skeleton from "../../Skeleton/skeleton.component";

const BackgroundSlider = () => {
  const [currentState, setCurrentState] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${ImageSlide[currentState].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
  };

  return (
    <section className="hero">
      {!loaded && <Skeleton type="banner" />}
      <div
        style={bgImageStyle}
        className={`hero__bg ${loaded ? 'hero__bg--loaded' : ''}`}
      >
        <img
          src={ImageSlide[currentState].url}
          alt=""
          onLoad={() => setLoaded(true)}
          style={{ display: 'none' }}
        />
        <div className="hero__overlay" />
      </div>
      <div className="hero__content">
        <div>
          <h1 className="hero__title">{ImageSlide[currentState].title}</h1>
          <p className="hero__desc">{ImageSlide[currentState].description}</p>
          <span className="hero__price">{ImageSlide[currentState].price}</span>
        </div>
        <div className="hero__bullets">
          {ImageSlide.map((_, index) => (
            <span
              key={index}
              className={`hero__bullet ${currentState === index ? 'hero__bullet--active' : ''}`}
              onClick={() => setCurrentState(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackgroundSlider;
