import React, { useEffect, useState, useCallback } from "react";
import './backgroundslider.component.css';
import ImageSlide from "./imageprac";
import Skeleton from "../../Skeleton/skeleton.component";

const BackgroundSlider = () => {
  const [currentState, setCurrentState] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [animDir, setAnimDir] = useState("next");

  const goTo = useCallback((index) => {
    setAnimDir(index > currentState || (currentState === 2 && index === 0) ? "next" : "prev");
    setCurrentState(index);
  }, [currentState]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const next = (currentState + 1) % ImageSlide.length;
      goTo(next);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState, goTo]);

  const slide = ImageSlide[currentState];

  return (
    <section className="hero">
      {!loaded && <Skeleton type="banner" />}
      <div className={`hero__slides ${loaded ? "hero__slides--loaded" : ""} ${animDir}`}>
        <div className="hero__slide" key={currentState}>
          <div
            className="hero__image"
            style={{ backgroundImage: `url(${slide.url})` }}
          />
          <img src={slide.url} alt="" onLoad={() => setLoaded(true)} style={{ display: "none" }} />
        </div>
      </div>
      <div className="hero__overlay" />
      <div className="hero__shapes">
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
      </div>
      <div className="hero__content">
        <span className="hero__badge">New Collection</span>
        <h1 className="hero__title" key={`t-${currentState}`}>{slide.title}</h1>
        <p className="hero__desc" key={`d-${currentState}`}>{slide.description}</p>
        <div className="hero__actions">
          <span className="hero__price">{slide.price}</span>
          <button className="hero__cta">Shop Now →</button>
        </div>
        <div className="hero__bullets">
          {ImageSlide.map((_, index) => (
            <span
              key={index}
              className={`hero__bullet ${currentState === index ? "hero__bullet--active" : ""}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
      <div className="hero__arrows">
        <button className="hero__arrow hero__arrow--prev" onClick={() => goTo((currentState - 1 + ImageSlide.length) % ImageSlide.length)} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button className="hero__arrow hero__arrow--next" onClick={() => goTo((currentState + 1) % ImageSlide.length)} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </section>
  );
};

export default BackgroundSlider;
