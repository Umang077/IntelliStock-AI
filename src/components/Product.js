// import "./ProductStyles.css";
// import ProductData from "./ProductData";
// function Product() {
//   return (
//     <div className="product" style={{ marginTop: "195px" }}>
//       <h1>Recent Products</h1>
//       <p>Induldge in luxury, experience freshness with our latest towels.</p>
//       <div className="tripcard">
//         <ProductData
//           image="https://www.ikea.co.id/dairyfarm/id/images/504/1150469_PE884587_S4.jpg"
//           heading="Jacquard piece Dyed Bath Towel"
//           text="Jacquard Towels are made from colored yarns for weaving the pattern into a towel. It often made with dual colors, but at times more colors can be woven. These towels typically have a pattern in reverse on the back of the towel. They are quite stylish, deep piled with subtle tonal jacquard weave and this range will add a touch of luxury to your bathroom."
//         />
//         <ProductData
//           image="https://m.media-amazon.com/images/I/41TEqzRgg3L._SX300_SY300_QL70_FMwebp_.jpg"
//           heading="400 GSM Dobby Piece Dyed Towel"
//           text="High GSM cotton towels are usually better quality. In general, a cotton bath towel that weighs 400 GSM and above is considered to be good quality. The fabric in these soft towels is woven more densely, and thus is softer and more absorbent than a lower GSM fabric (for example, that found in a standard kitchen towel)."
//         />
//         <ProductData
//           image="https://m.media-amazon.com/images/I/4171PKPUEqL._SX300_SY300_QL70_FMwebp_.jpg"
//           heading="300 GSM Dobby Yarn Dyed Towel"
//           text="The weight of a towel is measured by the GSM (Grams per Square Metre). Low GSM (300-400) towels are light and thin whilst high GSM (450-600) towels are thicker and heavier. A towel that weighs less than 400 GSM is likely to be thin and typically suitable for a gym bag or trips to the beach."
//         />
//       </div>
//     </div>
//   );
// }
// export default Product;
import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import React, { useState, useEffect } from "react";
import "./HomeProductStyles.css";
import TowelPopUp from "../components/columns/subcolumns/TowelPopUp";

function Product() {
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
              value.is_deleted === 0 && value.homepage_new_addition === "yes"
          )
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const Card = (value) => (
    // <div className="card">
    //   <h1>{value.towel_name}</h1>
    //   <p>{value.attributes}</p>
    //   <button>Read more</button>
    // </div>

    <div className="t-card" style={{ width: "90%", height: "auto" }}>
      {/* height: 500px;  */}
      <div className="t-image">
        <a
          href="#towelPopup"
          onClick={() => {
            setOpenModal(true);
            setTowelId(value.towel_id);
            setScrollable(true);
            scrollFunction(true);
          }}
        >
          <img src={value.image_url} alt="image" />
        </a>
      </div>
      <h4 style={{ wordWrap: "break-word" }}>{value.towel_name}</h4>
      <p style={{ wordWrap: "break-word", color: "#fff" }}>
        {value.attributes}
      </p>
    </div>
  );

  return (
    <div className="product">
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
      <div className="box" style={{ marginTop: "128px" }}>
        <h1 style={{ fontSize: "3rem" }}>New Additions</h1>
        <p style={{ color: "black", fontSize: "1.2rem" }}>
          Experience luxury redefined with our exquisite towels - indulge in
          ultimate softness and absorbency
        </p>
      </div>
      <ReactCaroussel
        slidesToShow={3}
        slidesToScroll={3}
        infinite={true}
        autoplay={true}
        speed={5} // 2s
        display={{
          dots: true,
          arrows: true,
        }}
      >
        {value.map((item, i) => (
          <div className="tripcard" key={item.towel_id}>
            <Card {...item} />
          </div>
        ))}
      </ReactCaroussel>
      {/* 
      <h3 className="mt-5">React Carousel one element</h3>
      <ReactCaroussel
        infinite={true}
        autoplay={true}
        speed={2} // 2s
        display={{
          dots: true,
          arrows: false
        }}
      >
        <Card />
        <Card />
        <Card />
      </ReactCaroussel> */}
      <div className="explore-link_for_new_addition">
        <a className="a-explore-link_for_new_addition" href="/newaddition">
          Explore More . . .
        </a>
      </div>
    </div>
  );
}

export default Product;
