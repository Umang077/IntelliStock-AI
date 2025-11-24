import React, { useState } from "react";
// import "./TestStyles.css";
function Test1() {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const newCard = {
      name: cards.length + 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueHnstWWG81cUnEaaKT5stcDTZUL4nmhOobZ8cRgnpw&s",
      heading: `Card ${cards.length + 1}`,
    };
    setCards([...cards, newCard]);
  };
  const deleteCard = (name) => {
    setCards(cards.filter((card) => card.name !== name));
  };
  return (
    <div>
      <div className="card-container">
        {cards.map((card) => (
          <div key={card.name} className="card">
            <img src={card.image} alt="Card Image" />
            <h3>{card.heading}</h3>
            <button onClick={() => deleteCard(card.name)}>Delete Card</button>
          </div>
        ))}
      </div>
      <button onClick={addCard}>Add Card</button>
    </div>
  );
}
export default Test1;
