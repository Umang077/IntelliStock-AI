import Footer from "../Footer";
import Hero from "../Hero";
import ColumnNavbar from "./ColumnNavbar";
import Column from "./Column";
import Test1 from "./Test1";

function ColumnA() {
  return (
    <>
      <ColumnNavbar />
      <Hero
        cName="hero-mid"
        heroImg="https://m.media-amazon.com/images/I/61bexvVc+xL.jpg"
        title="Section Layout"
        btnClass="hide"
      />
      <Column heading="Sections for Wall A" wall_id={1} />
      <Footer />
    </>
  );
}
export default ColumnA;
