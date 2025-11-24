import React, { useState } from "react";
import "./TowelCardStyles.css";
const TowelCard = ({ towel, onSelect }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onSelect}
      className="towel-card"
      style={{
        background: `url(${towel.image_url})`,
        backgroundSize: "cover",
        textDecoration: "none",
        borderRadius: "20px",
        boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.45)",
        transition: "transform 0.3s ease",
      }}
    >
      <div className="towel_card_container">
        <h2>{towel.towel_name}</h2>
        <p>Brand: {towel.brand}</p>
        <p>Competitor: {towel.competitor}</p>
        {/* <p>Price: ${towel.price}</p> */}
        {hovered && <p className="compare-text">Compare</p>}
      </div>
    </div>
  );
};

export default TowelCard;
