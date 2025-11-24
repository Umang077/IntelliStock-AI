import React, { useState, useEffect } from "react";
import TowelPopUp from "../components/columns/subcolumns/TowelPopUp";

import "./CarouselStyles.css";
function Carousel() {
  const [value, setData] = useState([]);
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
              value.is_deleted === 0 && value.homepage_popular_product === "yes"
          )
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const [activeSlide, setactiveSlide] = useState(2);

  useEffect(() => {
    setTimeout(
      () =>
        setactiveSlide((prevIndex) =>
          prevIndex === value.length - 1 ? 0 : prevIndex + 1
        ),
      3000
    );

    return () => {};
  }, [activeSlide]);

  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-500px) translateZ(-400px) rotateY(0deg)",
        zIndex: 9,
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(500px) translateZ(-400px) rotateY(-0deg)",
        zIndex: 9,
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-1100px) translateZ(-750px) rotateY(0deg)",
        zIndex: 8,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(1100px) translateZ(-750px) rotateY(-0deg)",
        zIndex: 8,
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-1100px) translateZ(-500px) rotateY(0deg)",
        zIndex: 7,
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(1100px) translateZ(-500px) rotateY(-0deg)",
        zIndex: 7,
      };
  };
  const getImageUrl = (card_Id, sName) => {
    return `/description?id=${card_Id}&section_name=${sName}`;
  };

  return (
    <>
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
      <div className="box" style={{ marginTop: "32px" }}>
        <h1 style={{ fontSize: "3rem" }}>Popular Products</h1>
        <p>
          Experience luxury redefined with our exquisite towels - indulge in
          ultimate softness and absorbency
        </p>
      </div>
      <div className="slideC">
        {value.map((item, i) => (
          <React.Fragment key={item.towel_id}>
            <a
              // href={getImageUrl(item.section_id, item.section_name)}
              href="#towelPopup"
              onClick={() => {
                setOpenModal(true);
                setTowelId(item.towel_id);
                setScrollable(true);
                scrollFunction(true);
              }}
              className="slide"
              style={{
                // background: "#F54748",
                // boxShadow: `0 5px 20px ${"#F54748"}30`,
                background: `url(${item.image_url})`,
                backgroundSize: "cover",
                textDecoration: "none",
                ...getStyles(i),
              }}
            >
              <SliderContent {...item} />
              {/* <div
                className="slide"
                style={{
                  // background: "#F54748",
                  // boxShadow: `0 5px 20px ${"#F54748"}30`,
                  background: `url(${item.image_url})`,
                  backgroundSize: "cover",
                  ...getStyles(i),
                }}
              >
                <SliderContent {...item} />
              </div> */}
            </a>
            <div
              className="reflection"
              style={{
                background: `linear-gradient(to bottom, ${"#1b81cf"}40, transparent)`,
                // background: `url(${item.image_url})`,
                // backgroundSize: "cover",

                ...getStyles(i),
              }}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="explore-link">
        <a className="a-explore-link" href="/popularproducts">
          Explore More . . .
        </a>
      </div>
    </>
  );
}

const SliderContent = (value) => {
  return (
    <div className="sliderContent">
      <h1>{value.towel_name}</h1>
      <h2>{value.towel_id}</h2>
      <p>{value.towel_type}</p>
    </div>
  );
};
export default Carousel;
