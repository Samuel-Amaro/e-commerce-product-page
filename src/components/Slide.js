import "./Slide.css";

export default function Slide(props) {
    return (
      <div className="Product-Images__slide">
        <img src={props.imageSlide} alt={props.descriptionImage} />
      </div>
    );
}