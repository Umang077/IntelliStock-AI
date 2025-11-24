import Footer from "../components/Footer";
// import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import DataBaseForm from "../components/DataBaseForm";
function DataBase() {
  return (
    <>
      <Navbar />
      {/* <Hero
        cName="hero-mid"
        heroImg="https://www.at-home.co.in/cdn/shop/products/HBT12MUSTMTI01617-Image01.jpg?v=1640318999"
        title="DataBase"
        btnClass="hide"
      /> */}
      <DataBaseForm />
      <Footer />
    </>
  );
}
export default DataBase;
