import "./ProductStyles.css";

import React, { useState, useEffect } from "react";

function PopularProductService() {
  const [value, setData] = useState([]);
  useEffect(() => {
    const url = "http://localhost:3005/api/towels";
    fetch(url)
      .then((response) => response.json())
      .then((value) => {
        console.log("This is value", value);
        // setData(value);
        setData(
          value.filter(
            (value) =>
              value.is_deleted === 0 && value.popular_product === "true"
          )
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const getImageUrl = (card_Id, section_Name) => {
    return `/description?id=${card_Id}&section_name=${section_Name}`;
  };
  return (
    <div className="card-container1" style={{ marginTop: "10%" }}>
      {/* <h1 style={{ fontSize: "3rem" }}>Popular Products</h1>
      <p>
        Experience luxury redefined with our exquisite towels - indulge in
        ultimate softness and absorbency
      </p> */}
      {value.map((card) => (
        <div className="t-card" style={{ width: "375px" }}>
          <div className="t-image">
            <a href={getImageUrl(card.section_id, card.section_name)}>
              <img src={card.image_url} alt="image" />
            </a>
          </div>

          <h4>{card.towel_name}</h4>
          <p style={{ color: "#fff", wordWrap: "break-word" }}>
            {card.attributes}
          </p>
        </div>
      ))}
    </div>
  );
}
export default PopularProductService;
