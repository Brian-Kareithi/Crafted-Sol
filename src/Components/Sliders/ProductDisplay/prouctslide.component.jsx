import React, { useState } from "react";
import './productdisplay.style.css';
import ImageSlider from "./ImageSlider.component";
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import pic1 from './images/pics1.jpg';
import pic2 from './images/pics2.jpg';
import pic3 from './images/pics3.jpg';
import pic4 from './images/pics4.jpg';
import photo1 from './images/photo1.jpg';
import photo2 from './images/photo2.jpg';
import photo3 from './images/photo3.jpg';
import photo4 from './images/photo4.jpg';

const imageSets = [
  { image: image1, set: [image1, image2, image3, image4] },
  { image: pic1, set: [pic1, pic2, pic3, pic4] },
  { image: photo1, set: [photo1, photo2, photo3, photo4] }
];

const Productslide = () => {
  const [selectedSetIndex, setSelectedSetIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedSet = imageSets[selectedSetIndex].set;

  const prev = () => {
    setSelectedSetIndex((i) => (i - 1 + imageSets.length) % imageSets.length);
    setSelectedImageIndex(0);
  };

  const next = () => {
    setSelectedSetIndex((i) => (i + 1) % imageSets.length);
    setSelectedImageIndex(0);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <section className="gallery">
      <div className="section-header">
        <h2>Product Gallery</h2>
        <p>Browse our latest collections</p>
      </div>
      <div className="gallery__inner">
        <div className="gallery__main">
          <ImageSlider
            slides={selectedSet.map((url) => ({ url }))}
            parentWidth={640}
            currentIndex={selectedImageIndex}
            onIndexChange={setSelectedImageIndex}
          />
        </div>
        <div className="gallery__thumbs">
          <button className="gallery__arrow gallery__arrow--prev" onClick={prev} aria-label="Previous set" />
          <div className="gallery__thumbs-list">
            {selectedSet.map((image, index) => (
              <img
                key={index}
                alt={`Product ${index + 1}`}
                loading="lazy"
                className={`gallery__thumb ${selectedImageIndex === index ? 'gallery__thumb--active' : ''}`}
                src={image}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
          <button className="gallery__arrow gallery__arrow--next" onClick={next} aria-label="Next set" />
        </div>
      </div>
    </section>
  );
};

export default Productslide;
