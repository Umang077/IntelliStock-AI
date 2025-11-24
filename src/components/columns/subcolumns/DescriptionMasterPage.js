import Footer from "../../Footer";
import Hero from "../../Hero";
import ColumnNavbar from "../ColumnNavbar";
import Description from "./Description";
// import Test1 from "./Test1";
import DescriptionB from "./DescriptionB";
import { useParams } from "react-router-dom";

function DescriptionMasterPage() {
  // console.log("Keys & Value", window.location.search);
  const params = useParams();
  var myKeyValues = window.location.search;
  var urlParams = new URLSearchParams(myKeyValues);
  var params_id = urlParams.get("id");
  var params_section_name = urlParams.get("section_name");
  console.log("DescriptionMasterPage", params_id);

  return (
    <>
      <ColumnNavbar />
      <Hero
        cName="hero-mid"
        heroImg="https://m.media-amazon.com/images/I/61bexvVc+xL.jpg"
        title="Description Layout"
        btnClass="hide"
      />
      <Description
        heading={params_section_name}
        section_id={params_id}
        section_name={params_section_name}
      />
      {/* <DescriptionB /> */}
      <Footer />
    </>
  );
}
export default DescriptionMasterPage;
