import "./ProductStyles.css";

import ProductData from "./ProductData";
function ProductService() {
  return (
    <div className="product" style={{ margin: "12rem 6rem" }}>
      <h1 style={{ fontSize: "3rem" }}>New Additions</h1>
      <p style={{ color: "black", fontSize: "1.2rem", margin: "1rem" }}>
        Introducing our latest innovation in comfort and Luxury: Trident Towels.
        Crafted with meticuluos attention to detail,offering unparalleled
        softness and absorbency, providing you with a pampering experience after
        every use.
      </p>

      <div className="product_service">
        {/* <Product /> */}
        <ProductData
          image="https://m.media-amazon.com/images/I/41TEqzRgg3L._SX300_SY300_QL70_FMwebp_.jpg"
          heading="400 GSM Dobby Piece Dyed Towel"
          text="High GSM cotton towels are usually better quality. In general, a cotton bath towel that weighs 400 GSM and above is considered to be good quality. The fabric in these soft towels is woven more densely, and thus is softer and more absorbent than a lower GSM fabric (for example, that found in a standard kitchen towel)."
        />
      </div>
    </div>
  );
}
export default ProductService;
