import React, { useEffect, useState, useCallback, useRef } from "react";
import './backgroundslider.component.css';
import ImageSlide from "./imageprac";

const BackgroundSlider = () => {
  const [current, setCurrent] = useState(0);
  const [ready, setReady] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    let loaded = 0;
    ImageSlide.forEach((s) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === ImageSlide.length) setReady(true);
      };
      img.src = s.url;
    });
  }, []);

  const goTo = useCallback((i) => {
    setCurrent(i);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % ImageSlide.length);
    }, 5000);
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % ImageSlide.length);
    }, 5000);
    return () => clearTimeout(timerRef.current);
  }, [current]);

  return (
    <section className="hero">
      {ImageSlide.map((slide, i) => (
        <div
          key={i}
          className={`hero__slide ${i === current ? "hero__slide--active" : ""} ${ready ? "hero__slide--ready" : ""}`}
          style={{ backgroundImage: `url(${slide.url})` }}
        />
      ))}
      <div className="hero__overlay" />
      <div className="hero__shapes">
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
      </div>
      <div className="hero__content">
        <h1 className="hero__title">{ImageSlide[current].title}</h1>
        <p className="hero__desc">{ImageSlide[current].description}</p>
        <div className="hero__actions">
          <span className="hero__price">{ImageSlide[current].price}</span>
          <button className="hero__cta">Shop Now →</button>
        </div>
        <div className="hero__bullets">
          {ImageSlide.map((_, i) => (
            <span
              key={i}
              className={`hero__bullet ${current === i ? "hero__bullet--active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
      <div className="hero__arrows">
        <button className="hero__arrow hero__arrow--prev" onClick={() => goTo((current - 1 + ImageSlide.length) % ImageSlide.length)} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button className="hero__arrow hero__arrow--next" onClick={() => goTo((current + 1) % ImageSlide.length)} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </section>
  );
};

export default BackgroundSlider;
