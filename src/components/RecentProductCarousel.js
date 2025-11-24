// import React, { useState, useEffect } from "react";
// import "./RecentProductCarousel.css";

// export default RecentProductCarousel = () => {
//   const [value, setData] = useState([]);
//   useEffect(() => {
//     const url = "http://localhost:3005/api/towels";
//     fetch(url)
//       .then((response) => response.json())
//       .then((value) => {
//         console.log("This is value", value);
//         setData(value);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);
//   const [activeSlide, setactiveSlide] = useState(0);

//   useEffect(() => {
//     setTimeout(
//       () =>
//         setactiveSlide((prevIndex) =>
//           prevIndex === value.length - 1 ? 0 : prevIndex + 1
//         ),
//       10000
//     );

//     return () => {};
//   }, [activeSlide]);

//   const getStyles = (index) => {
//     if (activeSlide === index)
//       return {
//         opacity: 1,
//         transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
//         zIndex: 10,
//       };
//     else if (activeSlide - 1 === index)
//       return {
//         opacity: 1,
//         transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
//         zIndex: 9,
//       };
//     else if (activeSlide + 1 === index)
//       return {
//         opacity: 1,
//         transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
//         zIndex: 9,
//       };
//     else if (activeSlide - 2 === index)
//       return {
//         opacity: 1,
//         transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
//         zIndex: 8,
//       };
//     else if (activeSlide + 2 === index)
//       return {
//         opacity: 1,
//         transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
//         zIndex: 8,
//       };
//     else if (index < activeSlide - 2)
//       return {
//         opacity: 0,
//         transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
//         zIndex: 7,
//       };
//     else if (index > activeSlide + 2)
//       return {
//         opacity: 0,
//         transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
//         zIndex: 7,
//       };
//   };
//   const getImageUrl = (card_Id, section_Name) => {
//     return `/description?id=${card_Id}&section_name=${section_Name}`;
//   };

//   return (
//     <>
//       {/* <div className="container"> */}

//       <div className="slideC1">
//         {value.map((item, i) => (
//           <React.Fragment key={item.towel_id}>
//             <a
//               href={getImageUrl(item.section_id, item.section_name)}
//               className="link1"
//             >
//               <div
//                 className="slide1"
//                 style={{
//                   // background: "#F54748",
//                   // boxShadow: `0 5px 20px ${"#F54748"}30`,
//                   background: `url(${item.image_url})`,
//                   backgroundSize: "cover",
//                   ...getStyles(i),
//                 }}
//               >
//                 <SliderContent {...item} />
//               </div>
//             </a>
//             <div
//               className="reflection1"
//               //   style={{
//               //     background: `linear-gradient(to bottom, ${"#1b81cf"}40, transparent)`,
//               //     ...getStyles(i),
//               //   }}
//             />
//           </React.Fragment>
//         ))}
//       </div>
//       {/* </div> */}
//     </>
//   );
// };

// const SliderContent = (value) => {
//   return (
//     <div className="sliderContent1">
//       {value.towel_name}
//       <h2>{value.towel_id}</h2>
//       <p>{value.retailer}</p>
//     </div>
//   );
// };
import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import "./RecentProductCarousel.css";
import React, { useState, useEffect } from "react";
import TowelPopUp from "../components/columns/subcolumns/TowelPopUp";

const Card = (value) => (
  <div className="sliderContent1">
    <h2>{value.towel_name}</h2>
    <p>{value.retailer}</p>
  </div>
);

export default function RecentProductCarousel() {
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
              value.is_deleted === 0 && value.homepage_our_patent === "yes"
          )
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
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

      <div className="slideC1">
        <ReactCaroussel
          slidesToShow={2}
          infinite={true}
          autoplay={true}
          speed={5}
        >
          {value.map((item, i) => (
            <a
              href="#towelPopup"
              onClick={() => {
                setOpenModal(true);
                setTowelId(item.towel_id);
                setScrollable(true);
                scrollFunction(true);
              }}
              style={{ textDecoration: "none" }}
              key={item.towel_id}
            >
              <div
                style={{
                  // background: "#F54748",
                  // boxShadow: `0 5px 20px ${"#F54748"}30`,
                  background: `url(${item.image_url})`,
                  backgroundSize: "cover",
                  textDecoration: "none",
                  borderRadius: "20px",
                }}
                key={item.towel_id}
              >
                <Card {...item} />
              </div>
            </a>
          ))}
        </ReactCaroussel>
        <div className="explore-link_for_new_addition">
          <a
            style={{ width: "50px", height: "15px", fontSize: "10px" }}
            className="a-explore-link_for_new_addition"
            href="/ourpatent"
          >
            Explore More . . .
          </a>
        </div>
      </div>
    </>
  );
}
