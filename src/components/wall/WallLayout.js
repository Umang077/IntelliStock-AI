import "../ProductStyles.css";
function WallLayout(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <a href={props.path}>
          <img src={props.image} alt="image" />
        </a>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
export default WallLayout;
