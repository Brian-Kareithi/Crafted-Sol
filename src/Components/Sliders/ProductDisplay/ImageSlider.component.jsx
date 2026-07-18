import { useEffect, useRef, useState, useCallback } from "react";
import Skeleton from "../../Skeleton/skeleton.component";

const ImageSlider = ({ slides, parentWidth, currentIndex, onIndexChange }) => {
  const timerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [localIndex, setLocalIndex] = useState(0);

  const activeIndex = currentIndex !== undefined ? currentIndex : localIndex;
  const setActiveIndex = onIndexChange || setLocalIndex;

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length, setActiveIndex]);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => goToNext(), 4000);
    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div style={{ position: "relative", height: "100%", width: "100%", background: "#f0f0f0", borderRadius: "16px" }}>
      {!loaded && <Skeleton type="image" height="480px" />}
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${slide.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === activeIndex ? 1 : 0,
            transition: "opacity 0.5s ease",
            visibility: i === activeIndex ? "visible" : "hidden",
          }}
        >
          <img
            src={slide.url}
            alt=""
            style={{ display: "none" }}
            onLoad={() => setLoaded(true)}
          />
        </div>
      ))}
      <div
        style={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.8)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontWeight: 700,
          color: "#333",
          zIndex: 2,
          transition: "background 0.25s",
        }}
        onClick={() => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)}
        onMouseEnter={(e) => e.currentTarget.style.background = "#fff"}
        onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.8)"}
      >
        &#8249;
      </div>
      <div
        style={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.8)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontWeight: 700,
          color: "#333",
          zIndex: 2,
          transition: "background 0.25s",
        }}
        onClick={goToNext}
        onMouseEnter={(e) => e.currentTarget.style.background = "#fff"}
        onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.8)"}
      >
        &#8250;
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
          zIndex: 2,
        }}
      >
        {slides.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === activeIndex ? 24 : 10,
              height: 10,
              borderRadius: 5,
              background: i === activeIndex ? "#7085B6" : "rgba(255,255,255,0.6)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
