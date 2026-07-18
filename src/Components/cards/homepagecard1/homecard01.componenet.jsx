import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import './homecard01.styles.css';

const categories = [
  { title: "Clothware", className: "categories__card--clothes", desc: "Trendy styles for every occasion" },
  { title: "Footware", className: "categories__card--shoes", desc: "Walk in comfort and style" },
  { title: "Jewelry", className: "categories__card--jewelry", desc: "Accessories that shine" },
];

const responsive = {
  desktop: { breakpoint: { max: 4000, min: 768 }, items: 3 },
  tablet: { breakpoint: { max: 768, min: 480 }, items: 2 },
  mobile: { breakpoint: { max: 480, min: 0 }, items: 1 },
};

const Homecard01 = () => {
  return (
    <section className="categories">
      <div className="section-header">
        <h2>Shop by Category</h2>
        <p>Find exactly what you need</p>
      </div>
      <div className="categories__carousel">
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} showDots arrows>
          {categories.map((cat, i) => (
            <div key={i} className="categories__slide">
              <div className={`categories__card ${cat.className}`}>
                <div className="categories__overlay">
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                  <span>Explore &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Homecard01;
