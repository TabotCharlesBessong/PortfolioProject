import React from 'react'
import "./slider.scss"
import { useState } from 'react';
import images from '../../constant/images';

const Slider = ({image}) => {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(image.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === image.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src={images.arrow} alt="" />
          </div>
          <div className="imgContainer">
            <img src={image[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src={images.arrow} className="right" alt="" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={image[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {image.slice(1).map((img, index) => (
          <img
            src={img}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider