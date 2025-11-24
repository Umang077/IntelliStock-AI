import "./ColumnStyles.css";
import ColumnLayout from "./ColumnLayout";

function Column(props) {
  return (
    <div className="product">
      <h1>{props.heading}</h1>
      <div className="tripcard1">
        <ColumnLayout
          image="https://m.media-amazon.com/images/I/71SPADcLGKL._AC_UF894,1000_QL80_.jpg"
          section_name="Section A"
          wall_id={props.wall_id}
          // text=""
          // path="/racksa"
          // path={props.section_id}
        />
        {/* <ColumnLayout
          image="https://img.ltwebstatic.com/images3_spmp/2023/10/20/df/16977823397d56d02098c3e6d40da1f855544b25ac_thumbnail_720x.jpg"
          section_name="Section B"
          wall_id={props.wall_id}
          // text=""
          path="/racksb"
        />
        <ColumnLayout
          image="https://m.media-amazon.com/images/I/71kK2makCbL._AC_UF1000,1000_QL80_.jpg"
          section_name="Section C"
          wall_id={props.wall_id}
          // text=""
          path="/racksc"
        /> */}
      </div>
    </div>
  );
}
export default Column;
