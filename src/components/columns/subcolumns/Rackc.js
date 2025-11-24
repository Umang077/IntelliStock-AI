import Footer from "../../Footer";
import Hero from "../../Hero";
import ColumnNavbar from "../ColumnNavbar";
import Description from "./Description";
// import Test1 from "./Test1";
import DescriptionB from "./DescriptionB";

function Rackc() {
  return (
    <>
      <ColumnNavbar />
      <Hero
        cName="hero-mid"
        heroImg="https://m.media-amazon.com/images/I/61bexvVc+xL.jpg"
        title="Description Layout"
        btnClass="hide"
      />
      <Description heading="Description for Section C" />
      {/* <DescriptionB /> */}
      <Footer />
    </>
  );
}
export default Rackc;
