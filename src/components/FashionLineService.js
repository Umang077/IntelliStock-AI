import "./ProductStyles.css";

import React, { useState, useEffect } from "react";

function FashionLineService() {
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
            (value) => value.is_deleted === 0 && value.fashion_line === "true"
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
    <div className="card-container1">
      {value.map((card) => (
        <div className="t-card" style={{ width: "375px" }}>
          <div className="t-image">
            <a href={getImageUrl(card.section_id, card.section_name)}>
              <img src={card.image_url} alt="image" />
            </a>
          </div>

          <h4>{card.towel_name}</h4>
          <p style={{ color: "#fff" }}>{card.attributes}</p>
        </div>
      ))}
    </div>
  );
}
export default FashionLineService;
