import "./Slide.css";
import React from "react";

export default function Slide(props) {
    return (
      <div className="Product-Images__slide">
        <img
          src={`${process.env.PUBLIC_URL}${props.imageSlide}`}
          alt={props.descriptionImage}
        />
      </div>
    );
}