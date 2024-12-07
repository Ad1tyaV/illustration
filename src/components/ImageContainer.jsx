import React from "react";
import './styles/image_container.css'

function ImageContainer(props) {
  const { image, description } = props;
  if(!image || !description)
    return
  return (
  <div className="imageContainer">
    <img src={require(`./static_data/images/${image}`)} alt={description}></img>
    <span className="label">{description}</span>
  </div>
);
}

export default ImageContainer;
