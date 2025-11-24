import WallLayout from "./WallLayout";
function WallB() {
  return (
    <div className="product">
      <div className="tripcard">
        <WallLayout
          image="https://i.pinimg.com/736x/2e/b5/7c/2eb57c6a5a2fb8f984c24353508a3369.jpg"
          heading="Wall D"
          text="Contains Towel Samples of Ikea, Homecentre, The Warehouse Group, Walmart, DW Group."
          path="/columnsD"
        />
        <WallLayout
          image="https://m.media-amazon.com/images/I/71xD9M5vT6L._AC_UF894,1000_QL80_.jpg"
          heading="Wall E1"
          text="Contains Towel Samples of Ikea, Homecentre, The Warehouse Group, Walmart, DW Group."
          path="/columnsE1"
        />
        <WallLayout
          image="https://m.media-amazon.com/images/I/51IXOBixVUL._AC_.jpg"
          heading="Wall E2"
          text="Contains Towel Samples of Ikea, Homecentre, The Warehouse Group, Walmart, DW Group."
          path="/columnsE2"
        />
      </div>
    </div>
  );
}
export default WallB;
