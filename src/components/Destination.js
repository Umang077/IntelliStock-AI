// import Carousel from "./Carousel";
import DestinationData from "./DestinationData";
import FashionDestinationData from "./FashionDestinationData";

import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Our Patents</h1>
      <p style={{ fontSize: "1.2rem" }}>
        Textile products blend comfort and style with exquisite craftsmanship
      </p>
      <DestinationData
        className="first-des"
        heading="Dobby Piece Dyed Bath Towel"
        text="Piece Dyed Dobby Towels are luxurious towels designed for providing
            excellent absorbency of water with silkier finish. These are 100%
            cotton towels and are available in various colors & types. We use
            the finest quality yarn and cotton, which provide ultimate softness
            along with best water absorbency to towels."
        // img1="https://5.imimg.com/data5/DN/YA/MY-12379472/bath-towel-set.jpg"
        // img2="https://rukminim2.flixcart.com/image/850/1000/l3khsi80/bath-towel/p/h/g/100-cotton-bath-towels-3-30-large-size-towel-for-men-women-youth-original-imagenpwymcefkte.jpeg?q=20&crop=false"
      />
      <h1 style={{ marginTop: "50px" }}>Our Fashion</h1>
      <p style={{ fontSize: "1.2rem" }}>
        Textile products blend comfort and style with exquisite craftsmanship
      </p>
      <FashionDestinationData
        className="first-des-reverse"
        heading="Dobby Piece Yarn Dyed Bath Towel "
        text="Towels that are produced with dyed yarns in different colours are classified as yarn-dyed jacquard towels. Custom yarn dyed jacquard woven towels with your logo all over the towel are common and efficient corporate promotional products.
        "
        // img1="https://m.media-amazon.com/images/I/9187BYlpLPL._AC_UF894,1000_QL80_.jpg"
        // img2="https://5.imimg.com/data5/TR/QJ/UP/SELLER-13341156/hotel-colorfull-towels-500x500.jpg"
      />
    </div>
  );
};
export default Destination;
