import "./DescriptionStyles.css";
import IndividualTowelLayout from "./IndividualTowelLayout";

function IndividualTowelDescription(props) {
  console.log("Description", props.towel_name);

  //   const getImageUrl = (card_Id, sName) => {
  //     return `/databaseadd?id=${card_Id}&section_name=${sName}`;
  //   };
  const employee_id = sessionStorage.getItem("employeeId");
  return (
    <div className="product">
      <h1>Description for Towel {props.heading}</h1>
      <div className="tripcard2">
        <IndividualTowelLayout
          // image="https://m.media-amazon.com/images/I/71SPADcLGKL._AC_UF894,1000_QL80_.jpg"
          // text="They are quite stylish, deep piled with subtle tonal jacquard weave and this range will add a touch of luxury to your bathroom."
          // link=""
          color="#009688"
          towel_id={props.towel_id}
          towel_name={props.towel_name}
          // section_name={props.setion_name}
          //   path="/racksa"
          // path="/description"
        />
        {/* <DescriptionLayout
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
        /> */}
      </div>
      {/* {employee_id === "44235" ? (
        <a
          href={getImageUrl(props.section_id, props.heading)}
          className="add-link"
        >
          Add towel
        </a>
      ) : null} */}
    </div>
  );
}
export default IndividualTowelDescription;
