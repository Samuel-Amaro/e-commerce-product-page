import "./Slide.css";
import React from "react";

export default function Slide(props) {
    return (
      <div className="Product-Images__slide">
        <img src={props.imageSlide} alt={props.descriptionImage} />
      </div>
    );
}