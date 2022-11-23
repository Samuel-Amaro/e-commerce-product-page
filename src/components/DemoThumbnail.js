import React from "react";
import "./DemoThumbnail.css";

export default function DemoThumbnail(props) { 
  return (
    <li
      className={
        props.slideIndex === props.indexThumbnail
          ? "Product-Images__item-Demo Product-Images__item-Demo_active"
          : "Product-Images__item-Demo"
      }
      title="Toggle to image"
      onPointerDown={(event) => {
        props.setCurrentSlide(props.indexThumbnail);
        //setDemoActive(true);
      }}
      onKeyDown={(event) => {
        if (event.code === "Enter") {
          props.setCurrentSlide(props.indexThumbnail);
        }
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}${props.thumbnail}`}
        alt=""
        aria-hidden="true"
      />
    </li>
  );
}