import Footer from "../Footer";
import Hero from "../Hero";
import ColumnNavbar from "./ColumnNavbar";
import Column from "./Column";

import Wall from "../wall/Wall";
import WallB from "../wall/WallB";

function ColumnE2() {
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
      <Column heading="Sections for Wall E2" wall_id={6} />
      <Footer />
    </>
  );
}
export default ColumnE2;
