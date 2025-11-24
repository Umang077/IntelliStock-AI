// import { Component } from "react";
// import "./DestinationStyles.css";
// const DestinationData = (props) => {
//   return (
//     <div className={props.className}>
//       <div className="des-text">
//         <h2>{props.heading}</h2>
//         <p>{props.text}</p>
//       </div>
//       <div className="image">
//         <img src={props.img1} alt="img" />
//         <img src={props.img2} alt="img" />
//       </div>
//     </div>
//   );
// };
// export default DestinationData;
import "./DestinationStyles.css";
import RecentProductCarousel from "./RecentProductCarousel";

const DestinationData = (props) => {
  return (
    <div className={props.className}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>

      {/* <img src={props.img1} alt="img" />
        <img src={props.img2} alt="img" /> */}
      {/* <div
          className="img1"
          style={{ marginRight: "4%" }}
          // style={{
          //   width: "49%",
          //   height: "350px",
          //   objectFit: " cover",
          //   borderRadius: " 6px",
          //   boxShadow: " -1px 1px 62px -18px rgba(0, 0, 0, 0.19)",
          // }}
        >
          <RecentProductCarousel />
        </div>
        <div
          className="img2"

          // style={{
          //   width: "49%",
          //   height: "350px",
          //   objectFit: " cover",
          //   borderRadius: " 6px",
          //   boxShadow: " -1px 1px 62px -18px rgba(0, 0, 0, 0.19)",
          // }}
        >
          <RecentProductCarousel />
        </div> */}
      <RecentProductCarousel />
    </div>
  );
};
export default DestinationData;
