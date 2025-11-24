import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OurPatentService from "../components/OurPatentService";

function OurPatentData() {
  return (
    <>
      <Navbar />
      <h1 style={{ fontSize: "3rem", marginTop: "9rem" }}>Our Patents</h1>
      <p style={{ color: "black", fontSize: "1.2rem", margin: "3rem" }}>
        Introducing our latest innovation in comfort and Luxury: Trident Towels.
        Crafted with meticuluos attention to detail,offering unparalleled
        softness and absorbency, providing you with a pampering experience after
        every use.
      </p>
      <OurPatentService />
      {/* <ProductService /> */}
      <Footer />
    </>
  );
}
export default OurPatentData;
