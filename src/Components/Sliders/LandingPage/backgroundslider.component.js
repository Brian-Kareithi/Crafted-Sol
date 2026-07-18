import React, { useEffect, useState, useCallback, useRef } from "react";
import './backgroundslider.component.css';
import ImageSlide from "./imageprac";
import Skeleton from "../../Skeleton/skeleton.component";

const BackgroundSlider = () => {
  const [currentState, setCurrentState] = useState(0);
  const [prevState, setPrevState] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [direction, setDirection] = useState("right");
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    if (transitioning || index === currentState) return;
    setDirection(index > currentState || (currentState === ImageSlide.length - 1 && index === 0) ? "right" : "left");
    setPrevState(currentState);
    setTransitioning(true);
    setTimeout(() => {
      setCurrentState(index);
      setPrevState(null);
      setTransitioning(false);
    }, 600);
  }, [currentState, transitioning]);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      const next = (currentState + 1) % ImageSlide.length;
      goTo(next);
    }, 5000);
    return () => clearTimeout(timerRef.current);
  }, [currentState, goTo]);

  const slide = ImageSlide[currentState];
  const prevSlide = prevState !== null ? ImageSlide[prevState] : null;

  return (
    <section className="hero">
      {!loaded && <Skeleton type="banner" />}
      <div className={`hero__slides ${loaded ? "hero__slides--loaded" : ""}`}>
        {prevSlide && (
          <div className={`hero__slide hero__slide--exit hero__slide--exit-${direction}`} key={`prev-${prevState}`}>
            <div className="hero__image" style={{ backgroundImage: `url(${prevSlide.url})` }} />
          </div>
        )}
        <div className={`hero__slide hero__slide--enter hero__slide--enter-${direction}`} key={`cur-${currentState}`}>
          <div className="hero__image" style={{ backgroundImage: `url(${slide.url})` }} />
          <img src={slide.url} alt="" onLoad={() => setLoaded(true)} style={{ display: "none" }} />
        </div>
      </div>
      <div className="hero__overlay" />
      <div className="hero__shapes">
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
      </div>
      <div className="hero__content" key={`content-${currentState}`}>
        <h1 className="hero__title">{slide.title}</h1>
        <p className="hero__desc">{slide.description}</p>
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
