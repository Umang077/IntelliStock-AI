import "./ColumnStyles.css";
import React, { useEffect, useState } from "react";
import ImageLink from "./ImageLink";
import { Link } from "react-router-dom";
// import img1 from "./images/img1.jpeg";
// import img2 from "./images/img2.jpeg";
// import img3 from "./images/img3.jpeg";
// import img4 from "./images/img4.jpeg";
// import img5 from "./images/img5.jpeg";
// import img6 from "./images/img6.jpeg";
// import img7 from "./images/img7.jpeg";
// import img8 from "./images/img8.jpeg";
// import img9 from "./images/img9.jpeg";
// import img10 from "./images/img10.jpeg";
// import img11 from "./images/img11.jpeg";
// import img12 from "./images/img12.jpeg";
// import img13 from "./images/img13.jpeg";
// import img14 from "./images/img14.jpeg";
// import img15 from "./images/img15.jpeg";
// function sectionIdAccess(){
//   const url = "http://localhost:3005/api/towels/getAll";
//   fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       "Access-Control-Allow-Origin": "*",
//     },
//   })
//     .then((response) => {
//       console.log("response", response);
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
//     return(
//       card.section_id;
//     );
// }

function ColumnLayout(props) {
  // const images = [
  //   img1,
  //   img2,
  //   img3,
  //   img4,
  //   img5,
  //   img6,
  //   img7,
  //   img8,
  //   img9,
  //   img10,
  //   img11,
  //   img12,
  //   img13,
  //   img14,
  //   img15,
  // ];
  // const RandomImageComponent = () => {
  //   useEffect(() => {
  //     const randomIndex = Math.floor(Math.random() * images.length);
  //     // setRandomImage(images[randomIndex]);
  //     const randomImage = images[randomIndex];
  //     setRandomImage(randomImage);
  //   }, []);
  //   // useEffect(() => {
  //   //   getRandomImage();
  //   // }, []);
  // };

  const [cards, setCards] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3004/api/sections";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log(data.section_id);
        setData(data.filter((data) => data.wall_id === props.wall_id));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  // const postPutEvent = () => {
  //   const data_value = {
  //     section_name: inputValue,
  //     wall_id: props.wall_id,
  //   };
  //   const url = "http://localhost:3004/api/sections/add";
  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify(data_value),
  //   })
  //     .then((response) => {
  //       console.log("response", response);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };
  const deleteEvent = (value) => {
    const url = `http://localhost:3004/api/sections/delete/${value}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const updateEvent = (value) => {
    const data_value = {
      section_name: inputValue,
    };
    const url = `http://localhost:3004/api/sections/update/${value}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data_value),
    })
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const deleteAlert = (value) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteEvent(value);
    }
  };
  // useEffect(() => {
  //   localStorage.setItem("cards", JSON.stringify(cards));
  // }, [cards]);

  const addCard = () => {
    const data_value = {
      section_name: inputValue,
      wall_id: props.wall_id,
    };
    const url = "http://localhost:3004/api/sections/add";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data_value),
    })
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setCards([...cards, data_value]);
    setInputValue("");
  };
  const deleteCard = (section_id) => {
    setCards(cards.filter((card) => card.section_id !== section_id));
  };
  const editCard = (section_id) => {
    const editedCards = cards.map((card) => {
      if (card.section_id === section_id) {
        card.section_name = inputValue || card.section_name;
      }
      return card;
    });
    setCards(editedCards);
    setEditId(null);
    setInputValue("");
  };
  const handleEditInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleEditButtonClick = (section_id, section_name) => {
    setEditId(section_id);
    setInputValue(section_name);
  };
  const getImageUrl = (card_Id, section_Name) => {
    return `/description?id=${card_Id}&section_name=${section_Name}`;
  };
  // const importAll = (r) => {
  //   let images = {};
  //   r.keys().map((item, index) => {
  //     images[item.replace("./", "")] = r(item);
  //   });
  //   return images;
  // };
  // const images = importAll(
  //   require.context("./images", false, /\.(png|jpe?g|svg)$/)
  // );
  // const getImage = (image) => {
  //   return images[image];
  // };
  // const RandomImageComponent = () => {
  //   const image =
  //     Object.keys(images)[
  //       Math.floor(Math.random() * Object.keys(images).length)
  //     ];
  //   return <img src={getImage(image)} />;
  // };
  const isLoggedIn = sessionStorage.getItem("employeeId") !== null;
  console.log("isLoggedIn", isLoggedIn);
  console.log("Value", sessionStorage.getItem("employeeId"));
  const employee_id = sessionStorage.getItem("employeeId");
  return (
    <div className="big-container">
      {/* <div className="t-card1">
        <div className="t-image1">
          <a href={props.path}>
            <img src={props.image} alt="image" />
          </a>
        </div> */}
      {/* <h4>{props.section_name}</h4> */}
      {/* <p>{props.text}</p> */}
      {/* </div> */}
      {/* 1 */}
      <div id="card-container">
        {data.map((card) => (
          <div key={card.section_id} className="card">
            <a href={getImageUrl(card.section_id, card.section_name)}>
              {/* <img src={randomImage} alt="Card Image" /> */}
              <ImageLink />
            </a>
            {editId === card.section_id ? (
              <>
                <input
                  className="edit-text"
                  type="text"
                  value={inputValue}
                  onChange={handleEditInputChange}
                />
                <div className="card-buttons">
                  <a
                    onClick={() => {
                      editCard(card.section_id);
                      updateEvent(card.section_id, inputValue);
                    }}
                    className="edit-button"
                  >
                    Save Edit
                  </a>
                </div>
                {/* <AddData section_name={inputValue} wall_id={props.wall_id} /> */}
              </>
            ) : (
              <>
                <h4>{card.section_name}</h4>
                {employee_id === "44235" ? (
                  <div className="card-buttons">
                    <a
                      style={{ textDecoration: "none" }}
                      href=""
                      onClick={() =>
                        handleEditButtonClick(
                          card.section_id,
                          card.section_name
                        )
                      }
                      className="edit-button"
                    >
                      Edit
                    </a>
                    <a
                      onClick={() => {
                        // deleteCard(card.section_id);
                        deleteAlert(card.section_id);

                        // deleteEvent(card.section_id);
                      }}
                      className="delete-button"
                      href=""
                      style={{ textDecoration: "none" }}
                      // onClick={() => deleteCard(card.section_id)}
                      // target="_blank"
                      // rel="noopener noreferrer"
                    >
                      Delete
                    </a>
                  </div>
                ) : null}
              </>
            )}
          </div>
        ))}
      </div>
      {/* 2 */}
      {employee_id === "44235" ? (
        <a href="" style={{ textDecoration: "none" }}>
          <button
            className="add-card"
            onClick={editId !== null ? () => editCard(editId) : addCard}
          >
            {editId !== null ? "Save Edit" : "Add Card"}
          </button>
        </a>
      ) : null}
    </div>
  );
}
export default ColumnLayout;

//1
// {
/* <div className="card-container">
        {cards.map((card) => (
          <div key={card.name} className="card">
            <img src={card.image} alt="Card Image" />
            <h4>{card.section_name}</h4>
            <button onClick={() => deleteCard(card.name)}>Delete Card</button>
          </div>
        ))}
        <button onClick={addCard}>Add Card</button>
      </div> */
// }

//2

// {
/* <input
        style={{ paddingTop: "5px", paddingBottom: "5px" }}
        type="text"
        value={inputValue}
        onChange={handleEditInputChange}
      /> */
// }
