import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FashionLineService from "../components/FashionLineService";

function FashionLineData() {
  return (
    <>
      <Navbar />
      <h1 style={{ fontSize: "3rem", marginTop: "9rem" }}>Fahsion Line</h1>
      <p style={{ color: "black", fontSize: "1.2rem", margin: "3rem" }}>
        Introducing our latest innovation in comfort and Luxury: Trident Towels.
        Crafted with meticuluos attention to detail,offering unparalleled
        softness and absorbency, providing you with a pampering experience after
        every use.
      </p>
      <FashionLineService />
      {/* <ProductService /> */}
      <Footer />
    </>
  );
}
export default FashionLineData;
