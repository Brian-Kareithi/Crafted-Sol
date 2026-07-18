import React from "react";
import './homecard01.styles.css';

const Homecard01 = () => {
  return (
    <section className="categories">
      <div className="section-header">
        <h2>Shop by Category</h2>
        <p>Find exactly what you need</p>
      </div>
      <div className="categories__grid">
        <div className="categories__card categories__card--clothes">
          <div className="categories__overlay">
            <h3>Clothware</h3>
            <span>Explore &rarr;</span>
          </div>
        </div>
        <div className="categories__card categories__card--shoes">
          <div className="categories__overlay">
            <h3>Footware</h3>
            <span>Explore &rarr;</span>
          </div>
        </div>
        <div className="categories__card categories__card--jewelry">
          <div className="categories__overlay">
            <h3>Jewelry</h3>
            <span>Explore &rarr;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homecard01;
