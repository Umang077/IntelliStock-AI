import Footer from "../components/Footer";
// import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AddDataBaseForm from "../components/AddDataBaseForm";
function AddDataBase() {
  return (
    <>
      <Navbar />
      {/* <Hero
        cName="hero-mid"
        heroImg="https://www.at-home.co.in/cdn/shop/products/HBT12MUSTMTI01617-Image01.jpg?v=1640318999"
        title="DataBase"
        btnClass="hide"
      /> */}
      <AddDataBaseForm />
      <Footer />
    </>
  );
}
export default AddDataBase;
