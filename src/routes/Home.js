import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://nestasia.in/cdn/shop/products/DSC02950_48c61b45-fdb8-4674-8cc0-a8e319615dc4.jpg?v=1653733664"
        title="Being different Is Normal!"
        text="Choose Your Favourite Samples."
        buttonText="Trident Samples"
        url="/newaddition"
        btnClass="show"
      />
      <Carousel />
      <Destination />
      <Product />
      <Footer />
    </>
  );
}
export default Home;
