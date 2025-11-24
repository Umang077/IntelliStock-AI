import Footer from "../Footer";
import Hero from "../Hero";
import ColumnNavbar from "./ColumnNavbar";
import Column from "./Column";

import Wall from "../wall/Wall";
import WallB from "../wall/WallB";

function ColumnD() {
  return (
    <>
      <ColumnNavbar />
      <Hero
        cName="hero-mid"
        heroImg="https://m.media-amazon.com/images/I/61bexvVc+xL.jpg"
        title="Section Layout"
        btnClass="hide"
      />
      {/* <Wall />
      <WallB /> */}
      <Column heading="Sections for Wall D" wall_id={4} />
      <Footer />
    </>
  );
}
export default ColumnD;
