import "./DescriptionStyles.css";
import DescriptionLayout from "./DescriptionLayout";

function DescriptionB(props) {
  return (
    <div className="product" style={{ marginTop: "0px" }}>
      {/* <h1>{props.heading}</h1> */}
      <div className="tripcard2" style={{ marginTop: "0px" }}>
        <DescriptionLayout
          image="https://m.media-amazon.com/images/I/71SPADcLGKL._AC_UF894,1000_QL80_.jpg"
          heading="Section 1"
          text=" They are quite stylish, deep piled with subtle tonal jacquard weave and this range will add a touch of luxury to your bathroom."
          link=""
          color="#009688"
          //   path="/racksa"
        />
        <DescriptionLayout
          image="https://img.ltwebstatic.com/images3_spmp/2023/10/20/df/16977823397d56d02098c3e6d40da1f855544b25ac_thumbnail_720x.jpg"
          heading="Section 2"
          text=" These towels typically have a pattern in reverse on the back of the towel. They are quite stylish."
          link=""
          color="#ff3e7f"
          //   path="/racksb"
        />
        <DescriptionLayout
          image="https://m.media-amazon.com/images/I/71kK2makCbL._AC_UF1000,1000_QL80_.jpg"
          heading="Section 3"
          text="They are quite stylish, deep piled with subtle tonal jacquard weave and this range will add a touch of luxury to your bathroom."
          link=""
          color="#03a9f4"
          //   path="/racksc"
        />
      </div>
    </div>
  );
}
export default DescriptionB;
