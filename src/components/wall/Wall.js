import "../ProductStyles.css";
import WallLayout from "./WallLayout";

function Wall() {
  return (
    <div className="product">
      <h1>Wall Layout</h1>
      <p>Induldge in luxury, experience freshness with our latest towels.</p>
      <div className="tripcard">
        <WallLayout
          image="https://m.media-amazon.com/images/I/71SPADcLGKL._AC_UF894,1000_QL80_.jpg"
          heading="Wall A"
          text="Contains Towel Samples of Ikea, Homecentre, The Warehouse Group, Walmart, DW Group."
          path="/columnsA"
        />
        <WallLayout
          image="https://img.ltwebstatic.com/images3_spmp/2023/10/20/df/16977823397d56d02098c3e6d40da1f855544b25ac_thumbnail_720x.jpg"
          heading="Wall B"
          text="Contains Towel Samples of Ikea, Homecentre, The Warehouse Group, Walmart, DW Group."
          path="/columnsB"
        />
        <WallLayout
          image="https://i.pinimg.com/originals/90/8c/1c/908c1c25561d69453b8f8254a82c4426.jpg"
          heading="Wall C"
          text="Contains Towel Samples of Ikea, Homecentre, The Warehouse Group, Walmart, DW Group."
          path="/columnsC"
        />
      </div>
    </div>
  );
}
export default Wall;
