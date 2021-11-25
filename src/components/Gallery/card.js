import React from "react";
import "./style.css";

const GalleryCard = ({ image }) => {
  const handleClick = () => {
    window.open(image.redirectUrl, "_blank");
  };
  return (
    <div className="card" onClick={handleClick}>
      <div className="ui image">
        <img src={image.imgSrc} alt="img" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{image.title}</h3>
        <br />
      </div>
    </div>
  );
};

export default GalleryCard;
