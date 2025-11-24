import ReactCaroussel from "react-caroussel";
import "./TowelPopCarousel.css";
import React, { useState, useEffect } from "react";

const Card = (value) => (
  <div className="sliderContent_pop">
    {/* <h3>{value.towel_name}</h3>
    <p>{value.attributes}</p> */}
  </div>
);

function TowelPopCarousel() {
  const [value, setData] = useState([]);
  useEffect(() => {
    const url = "http://localhost:3005/api/towels";
    fetch(url)
      .then((response) => response.json())
      .then((value) => {
        console.log("This is value", value);
        setData(value.filter((value) => value.is_deleted === 0));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="slideC_pop">
      <ReactCaroussel
        slidesToShow={3}
        infinite={true}
        autoplay={true}
        speed={5}
      >
        {value.map((item, i) => (
          <div
            style={{
              background: `url(${item.image_url})`,
              backgroundSize: "cover",
              textDecoration: "none",
              borderRadius: "20px",
            }}
          >
            <Card {...item} />
          </div>
        ))}
      </ReactCaroussel>
    </div>
  );
}
export default TowelPopCarousel;
