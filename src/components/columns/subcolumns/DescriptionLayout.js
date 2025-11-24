import "./DescriptionStyles.css";
import React, { useState, useEffect } from "react";
import TowelPopUp from "./TowelPopUp";

function DescriptionLayout(props) {
  // const [cards, setCards] = useState([]);

  // const addCard = () => {
  //   const newCard = {
  //     name: cards.length + 1,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueHnstWWG81cUnEaaKT5stcDTZUL4nmhOobZ8cRgnpw&s",
  //     heading: `Card ${cards.length + 1}`,
  //   };
  //   setCards([...cards, newCard]);
  // };
  // const deleteCard = (name) => {
  //   setCards(cards.filter((card) => card.name !== name));
  // };

  //
  // Alternate
  //
  // const [cards, setCards] = useState([]);
  // const [inputValue, setInputValue] = useState("");
  // const [editId, setEditId] = useState(null);

  // const addCard = () => {
  //   const newCard = {
  //     id: cards.length + 1,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueHnstWWG81cUnEaaKT5stcDTZUL4nmhOobZ8cRgnpw&s",
  //     heading: `Section ${cards.length + 1}`,
  //   };
  //   setCards([...cards, newCard]);
  //   setInputValue("");
  // };
  // const deleteCard = (id) => {
  //   setCards(cards.filter((card) => card.id !== id));
  // };
  // const editCard = (id) => {
  //   const editedCards = cards.map((card) => {
  //     if (card.id === id) {
  //       card.heading = inputValue || card.heading;
  //     }
  //     return card;
  //   });
  //   setCards(editedCards);
  //   setEditId(null);
  //   setInputValue("");
  // };
  // const handleEditInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  // const handleEditButtonClick = (id, heading) => {
  //   setEditId(id);
  //   setInputValue(heading);
  // };

  //
  const [value, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3005/api/towels";
    fetch(url)
      .then((response) => response.json())
      .then((value) => {
        console.log(value);
        // console.log(value.section_id);
        console.log(
          "This is value",
          value.filter(
            (value) =>
              value.section_id == props.section_id && value.is_deleted === 0
          )
        );
        setData(
          value.filter(
            (value) =>
              value.section_id == props.section_id && value.is_deleted === 0
          )
        );
        // setData(value);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // const getImageUrl = (card_Id) => {
  //   return `#${card_Id}`;
  // };
  const [openModal, setOpenModal] = useState(false);
  const [towelId, setTowelId] = useState("");
  const [scrollable, setScrollable] = useState(false);
  const scrollFunction = (scrollable) => {
    if (scrollable) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    // <div className="t-card2">
    //   <div className="t-image2">
    //     <a href={props.path}>
    //       <img src={props.image} alt="image" />
    //     </a>
    //   </div>
    //   <h4>{props.heading}</h4>
    //   <p>{props.text}</p>
    // </div>
    // <div>
    //   {openModal && <TowelPopUp closeModal={setOpenModal} />}

    <div className="card-container">
      {
        (openModal,
        scrollable && (
          <TowelPopUp
            closeModal={setOpenModal}
            towel_id={towelId}
            scroll={setScrollable}
          />
        ))
      }

      {value.map((card) => (
        <div key={card.towel_id} className="card">
          <div className="img-box">
            <a
              href="#towelPopup"
              // href={getImageUrl(card.towel_id)}
              onClick={() => {
                setOpenModal(true);
                setTowelId(card.towel_id);
                setScrollable(true);
                scrollFunction(true);
              }}
              // href={getImageUrl(card.towel_id)}
            >
              <img src={card.image_url} alt="image" />
            </a>
          </div>
          <div className="content">
            <h2 style={{ color: props.color }}>{card.towel_name}</h2>
            <p style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
              {card.attributes}
            </p>
            <a
              href="#towelPopup"
              onClick={() => {
                setOpenModal(true);
                setTowelId(card.towel_id);
                setScrollable(true);
                scrollFunction(true);
              }}
              // href={getImageUrl(card.towel_id)}
              style={{
                background: props.color,
                boxShadow: " 0 5px 15px 0 rgba(0, 0, 0, 0.45)",
              }}
            >
              Read More
            </a>
            {/* <div className="card">
        <div className="img-box">
          <a href={props.path}>
            <img src={props.image} alt="image" />
          </a>
        </div>
        <div className="content">
          <h2 style={{ color: props.color }}>{props.heading}</h2>
          <p>{props.text}</p>
          <a href={props.link} style={{ background: props.color }}>
            Read More
          </a> */}
          </div>
        </div>
      ))}
    </div>

    // </div>
  );
}
export default DescriptionLayout;

// {
/* <div className="card-container">
        {cards.map((card) => (
          <div key={card.name} className="card">
            <img src={card.image} alt="Card Image" />
            <h4>{card.heading}</h4>
            <button onClick={() => deleteCard(card.name)}>Delete Card</button>
          </div>
        ))}
        <button onClick={addCard}>Add Card</button>
      </div> */
// }
// {
/* <div id="card-container">
        {cards.map((card) => (
          <div key={card.id} className="card1">
            <a href={getImageUrl(card.id)}>
              <img className="img1" src={card.image} alt="Card Image" />
            </a>
            {editId === card.id ? (
              <>
                <input
                  className="edit-text"
                  type="text"
                  value={inputValue}
                  onChange={handleEditInputChange}
                />
                <div className="card-buttons1">
                  <button
                    onClick={() => editCard(card.id)}
                    className="edit-button"
                  >
                    Save Edit
                  </button>
                </div>
              </>
            ) : (
              <>
                <h4>{card.heading}</h4>
                <div className="card-buttons1">
                  <button
                    onClick={() => handleEditButtonClick(card.id, card.heading)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteCard(card.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div> */
// }

// {/*  */}
// {/* Alternate */}
// {/*  */}

// {/* <input
//   style={{ paddingTop: "5px", paddingBottom: "5px" }}
//   type="text"
//   value={inputValue}
//   onChange={handleEditInputChange}
// /> */}
// {/*  */}
// {/* <button
//   className="add-card"
//   onClick={editId !== null ? () => editCard(editId) : addCard}
// >
//   {editId !== null ? "Save Edit" : "Add Card"}
// </button> */}
// </div>
