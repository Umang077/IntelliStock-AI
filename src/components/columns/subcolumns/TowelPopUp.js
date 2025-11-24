import React, { useEffect, useState } from "react";
import "./TowelPopUp.css";
import "./TowelPopCarousel.css";
import ReactCaroussel from "react-caroussel";
import TowelPopCarousel from "./TowelPopCarousel";
function TowelPopUp({ closeModal, towel_id, scroll }) {
  console.log("This is towel_id:", towel_id);
  //   console.log("This is closeModal:", closeModal);
  //   const getTowel = (towel_id) => {
  //     return "${towel_id}";
  //   };
  const [value, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3005/api/towels";
    fetch(url)
      .then((response) => response.json())
      .then((value) => {
        // console.log(value);
        // console.log(value.section_id);
        console.log(
          "This is value",
          value.filter((value) => value.towel_id == towel_id)
        );
        setData(value.filter((value) => value.towel_id == towel_id));
        // setData(value);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const getImageUrl = (
    card_Id,
    tName,
    tType,
    tColor,
    sId,
    sName,
    iUrl,
    retailer,
    brand,
    cOrigin,
    comp,
    size,
    gsm,
    price,
    cNumber,
    speciality,
    pCount,
    pLength,
    pick,
    reed,
    attributes,
    pProduct,
    nAddition,
    oPatent,
    fLine,
    homePProduct,
    homeNewAddition,
    homeOurPatent,
    homeFashionLine
  ) => {
    return `/database?id=${card_Id}&towel_name=${tName}&towel_type=${tType}&towel_color=${tColor}&section_id=${sId}&section_name=${sName}&image_url=${iUrl}&retailer=${retailer}&brand=${brand}&country_of_origin=${cOrigin}&competitor=${comp}&size=${size}&gsm=${gsm}&price=${price}&color_number=${cNumber}&speciality=${speciality}&pile_count=${pCount}&pile_length=${pLength}&pick=${pick}&reed=${reed}&attributes=${attributes}&popular_product=${pProduct}&new_addition=${nAddition}&our_patent=${oPatent}&fashion_line=${fLine}&homepage_popular_product=${homePProduct}&homepage_new_addition=${homeNewAddition}&homepage_our_patent=${homeOurPatent}&homepage_fashion_line=${homeFashionLine}`;
  };
  const deleteEvent = (value) => {
    const url = `http://localhost:3005/api/towels/delete/${value}`;
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

  const deleteAlert = (value) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteEvent(value);
    }
  };
  const [scrollable, setScrollable] = useState(false);
  const scrollFunctionPop = (scrollable) => {
    if (scrollable) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  const employee_id = sessionStorage.getItem("employeeId");
  return (
    <div id="towelPopup" className="overlay">
      {value.map((card) => (
        <div key={card.towel_id} className="popup">
          <h2>{card.towel_name}</h2>
          <a
            onClick={(e) => {
              closeModal(false);
              scroll(false);
              e.preventDefault();
              setScrollable(true);
              scrollFunctionPop(true);
            }}
            className="close"
            href=""
          >
            &times;
          </a>
          <div className="content">
            <TowelPopCarousel />
            {/* <div className="slideC_pop">
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
            </div> */}
            <h3 style={{ marginTop: "45px" }}>Towel Type: {card.towel_type}</h3>
            <h3>Towel Color: {card.towel_color}</h3>
            <h3>Retailer: {card.retailer}</h3>
            <h3>Brand: {card.brand}</h3>
            <h3>Country Of Origin: {card.country_of_origin}</h3>
            <h3>Competitor: {card.competitor}</h3>
            <h3>Size: {card.size}</h3>
            <h3>GSM: {card.gsm}</h3>
            <h3>Price: {card.price}</h3>
            <h3>Color Number: {card.color_number}</h3>
            <h3>Speciality: {card.speciality}</h3>
            <h3>Pile Count: {card.pile_count}</h3>
            <h3>Pile Length: {card.pile_length}</h3>
            <h3>Pick: {card.pick}</h3>
            <h3>Reed: {card.reed}</h3>
            <h3>Attributes: {card.attributes}</h3>
          </div>
          {employee_id === "44235" ? (
            <div className="button-class" style={{ marginTop: "3.5%" }}>
              <a
                href={getImageUrl(
                  card.towel_id,
                  card.towel_name,
                  card.towel_type,
                  card.towel_color,
                  card.section_id,
                  card.section_name,
                  card.image_url,
                  card.retailer,
                  card.brand,
                  card.country_of_origin,
                  card.competitor,
                  card.size,
                  card.gsm,
                  card.price,
                  card.color_number,
                  card.speciality,
                  card.pile_count,
                  card.pile_length,
                  card.pick,
                  card.reed,
                  card.attributes,
                  card.popular_product,
                  card.new_addition,
                  card.our_patent,
                  card.fashion_line,
                  card.homepage_popular_product,
                  card.homepage_new_addition,
                  card.homepage_our_patent,
                  card.homepage_fashion_line
                )}
                onClick={() => {
                  closeModal(false);
                  scroll(false);
                }}
                className="button1"
              >
                {/* <button
                onClick={() => {
                  closeModal(false);
                  scroll(false);
                }}
                className="button1"
              > */}
                Edit
                {/* </button> */}
              </a>
              <a
                href=""
                onClick={() => {
                  closeModal(false);
                  scroll(false);
                  deleteAlert(card.towel_id);
                }}
                className="button2"
              >
                {/* <button
                onClick={() => {
                  closeModal(false);
                  scroll(false);
                }}
                className="button2"
              > */}
                Delete
                {/* </button> */}
              </a>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
export default TowelPopUp;
