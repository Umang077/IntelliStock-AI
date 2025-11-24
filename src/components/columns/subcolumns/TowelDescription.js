import Footer from "../../Footer";
import Hero from "../../Hero";
import ColumnNavbar from "../ColumnNavbar";
import IndividualTowelDescription from "./IndividualTowelDescription";
// import Test1 from "./Test1";

import { useParams } from "react-router-dom";

function TowelDescription() {
  // console.log("Keys & Value", window.location.search);
  const params = useParams();
  var myKeyValues = window.location.search;
  var urlParams = new URLSearchParams(myKeyValues);
  var params_id = urlParams.get("id");
  var params_towel_name = urlParams.get("towel_name");
  console.log("TowelDecription_id", params_id);

  return (
    <>
      <ColumnNavbar />
      <Hero
        cName="hero-mid"
        heroImg="https://m.media-amazon.com/images/I/61bexvVc+xL.jpg"
        title="Description Layout"
        btnClass="hide"
      />
      <IndividualTowelDescription
        heading={params_towel_name}
        towel_id={params_id}
        towel_name={params_towel_name}
        // section_name={params_towel_name}
      />
      {/* <DescriptionB /> */}
      <Footer />
    </>
  );
}
export default TowelDescription;
