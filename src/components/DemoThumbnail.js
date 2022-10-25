import React from "react";
import "./DemoThumbnail.css";

export default function DemoThumbnail(props) {
    return (
      <li
        className={
          props.slideIndex === props.index
            ? "Product-Images__item-Demo Product-Images__item-Demo_active"
            : "Product-Images__item-Demo"
        }
        tabIndex="0"
        title="Toggle to image"
        onPointerDown={(event) => {
          props.setCurrentSlide(props.index);
          //setDemoActive(true);
        }}
        onKeyDown={(event) => {
          if (event.code === "Enter") {
            props.setCurrentSlide(props.index);
          }
        }}
      >
        <img src={props.thumbnail} alt="" aria-hidden="true" />
      </li>
    );
}