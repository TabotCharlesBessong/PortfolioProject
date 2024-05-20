import React from 'react'
import "./card.scss"
import { Link } from 'react-router-dom'
import images from '../../constant/images';

const Card = ({item}) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src={images.bed} alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src={images.bath} alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src={images.save} alt="" />
            </div>
            <div className="icon">
              <img src={images.chat} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card