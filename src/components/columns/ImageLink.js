import React, { useState, useEffect } from "react";
import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpeg";
import img5 from "./images/img5.jpeg";
import img6 from "./images/img6.jpeg";
import img7 from "./images/img7.jpeg";
import img8 from "./images/img8.jpeg";
import img9 from "./images/img9.jpeg";
import img10 from "./images/img10.jpeg";
import img11 from "./images/img11.jpeg";
import img12 from "./images/img12.jpeg";
import img13 from "./images/img13.jpeg";
import img14 from "./images/img14.jpeg";
import img15 from "./images/img15.jpeg";
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];
const ImageLink = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  // setRandomImage(images[randomIndex]);
  const randomImage = images[randomIndex];

  // useEffect(() => {
  //   getRandomImage();
  // }, []);
  return (
    <div>
      <img src={randomImage} alt="image" />
    </div>
  );
};
export default ImageLink;
