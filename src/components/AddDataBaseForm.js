// import { handle } from "express/lib/application";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import QRCodeGenerator from "./QrCodeGenerator";
import "./DataBaseFormStyles.css";
function DataBaseForm(props) {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const url = "http://localhost:3005/api/towels";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       // setData(data.filter((data) => data.wall_id === props.wall_id));
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);
  // const postPutEvent = () => {
  //   const data_value = {
  //     section_name: inputValue,
  //     wall_id: props.wall_id,
  //   };
  //   const url = "http://localhost:3005/api/towels/add";
  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify(data_value),
  //   })
  //     .then((response) => {
  //       console.log("response", response);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };
  const params = useParams();
  var myKeyValues = window.location.search;
  var urlParams = new URLSearchParams(myKeyValues);
  var params_id = urlParams.get("id");
  var params_section_name = urlParams.get("section_name");
  console.log("Database", params_id);
  const [formValue, setFormValue] = useState({
    towel_name: "",
    towel_type: "",
    towel_color: "",
    section_id: `${params_id}`,
    section_name: `${params_section_name}`,
    image_url: "",
    retailer: "",
    brand: "",
    country_of_origin: "",
    competitor: "",
    size: "",
    gsm: "",
    price: "",
    color_number: "",
    speciality: "",
    pile_count: "",
    pile_length: "",
    pick: "",
    reed: "",
    attributes: "",
    popular_product: "false",
    new_addition: "false",
    our_patent: "false",
    fashion_line: "false",
    // isChecked_1: "false",
    // isChecked_2: "false",
    // is_Checked_3: "false",
    homepage_popular_product: "No",
    homepage_new_addition: "No",
    homepage_our_patent: "No",
    homepage_fashion_line: "No",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allInputvalue = {
      towel_name: formValue.towel_name,
      towel_type: formValue.towel_type,
      towel_color: formValue.towel_color,
      section_id: formValue.section_id,
      section_name: formValue.section_name,
      image_url: formValue.image_url,
      retailer: formValue.retailer,
      brand: formValue.brand,
      country_of_origin: formValue.country_of_origin,
      competitor: formValue.competitor,
      size: formValue.size,
      gsm: formValue.gsm,
      price: formValue.price,
      color_number: formValue.color_number,
      speciality: formValue.speciality,
      pile_count: formValue.pile_count,
      pile_length: formValue.pile_length,
      pick: formValue.pick,
      reed: formValue.reed,
      attributes: formValue.attributes,
      // popular_product: formValue.popular_product,
      // new_addition: formValue.new_addition,
      // our_patent: formValue.our_patent,
      // fashion_line: formValue.fashion_line,
      popular_product: formValue.popular_product,
      new_addition: formValue.new_addition,
      our_patent: formValue.our_patent,
      fashion_line: formValue.fashion_line,
      homepage_new_addition: formValue.homepage_new_addition,
      homepage_popular_product: formValue.homepage_popular_product,
      homepage_our_patent: formValue.homepage_our_patent,
      homepage_fashion_line: formValue.homepage_fashion_line,
    };
    let res = fetch("http://localhost:3005/api/towels/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(allInputvalue),
    })
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err.message);
      });

    // console.log(allInputvalue);
  };

  // const [value, setData] = useState([]);

  // useEffect(() => {
  //   const url = "http://localhost:3005/api/towels";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((value) => {
  //       // console.log(value);
  //       // console.log(value.section_id);
  //       console.log(
  //         "This is value",
  //         value.filter((value) => value.towel_id == params_id)
  //       );
  //       setData(value.filter((value) => value.towel_id == params_id));
  //       // setData(value);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);
  // const handleUpdateSubmit = (e) => {
  //   e.preventDefault();
  //   const allInputvalue = {
  //     towel_name: formValue.towel_name,
  //     towel_type: formValue.towel_type,
  //     towel_color: formValue.towel_color,
  //     section_id: formValue.section_id,
  //     image_url: formValue.image_url,
  //     retailer: formValue.retailer,
  //     brand: formValue.brand,
  //     country_of_origin: formValue.country_of_origin,
  //     competitor: formValue.competitor,
  //     size: formValue.size,
  //     gsm: formValue.gsm,
  //     price: formValue.price,
  //     color_number: formValue.color_number,
  //     speciality: formValue.speciality,
  //     pile_count: formValue.pile_count,
  //     pile_length: formValue.pile_length,
  //     pick: formValue.pick,
  //     reed: formValue.reed,
  //     section_name: formValue.section_name,
  //     attributes: formValue.attributes,
  //   };
  //   let res = fetch(`http://localhost:3005/api/towels/update/${params_id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify(allInputvalue),
  //   })
  //     .then((response) => {
  //       console.log("response", response);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });

  //   // console.log(allInputvalue);
  // };

  // const [searchString, setSearchString] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked_1, setIsChecked_1] = useState(false);
  const [isChecked_2, setIsChecked_2] = useState(false);
  const [isChecked_3, setIsChecked_3] = useState(false);

  const checkHandler = (e) => {
    setIsChecked(!isChecked);
    // formValue.new_addition = !isChecked;
    // console.log("This is the newAddition_formValue", formValue.new_addition);
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const checkHandler_1 = (e) => {
    setIsChecked_1(!isChecked_1);
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const checkHandler_2 = (e) => {
    setIsChecked_2(!isChecked_2);
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const checkHandler_3 = (e) => {
    setIsChecked_3(!isChecked_3);
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  // const handleChange = (e) => {
  //   setFormValue({
  //     ...formValue,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const [isChecked, setIsChecked] = useState();
  // function checkHandler(e) {
  //   const { value, checked } = e.target;
  //   if (checked) {
  //     setFormValue((pre) => [...pre, value]);
  //   } else {
  //     setFormValue((pre) => {
  //       return [...pre.filter((data) => data !== value)];
  //     });
  //   }
  // }
  // console.log(formValue.new_addition);

  console.log("This is the new_addition", formValue.new_addition);
  console.log("This is the popular_product", formValue.popular_product);
  console.log("This is the patent", formValue.our_patent);
  console.log("This is the fashion", formValue.fashion_line);
  const getImageUrl = (card_Id, section_Name) => {
    return `/description?id=${card_Id}&section_name=${section_Name}`;
  };
  console.log(formValue.towel_name);

  return (
    <>
      <div className="from-container" style={{ marginTop: "128px" }}>
        <h1>Add The Towel Sample Details</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            name="towel_name"
            placeholder="Towel Name"
            value={formValue.towel_name}
            onChange={handleInput}
          />
          <input
            name="towel_type"
            placeholder="Towel Type"
            value={formValue.towel_type}
            onChange={handleInput}
          />
          <input
            name="towel_color"
            placeholder="Towel Color"
            value={formValue.towel_color}
            onChange={handleInput}
          />
          <input
            name="section_id"
            placeholder="Section Id"
            value={formValue.section_id}
            onChange={handleInput}
            disabled
          />
          <input
            name="section_name"
            placeholder="Section Name "
            value={formValue.section_name}
            onChange={handleInput}
            disabled
          />
          <input
            name="image_url"
            placeholder="Image URL"
            value={formValue.image_url}
            onChange={handleInput}
          />
          <input
            name="retailer"
            placeholder="Retailer"
            value={formValue.retailer}
            onChange={handleInput}
          />
          <input
            name="brand"
            placeholder="Brand"
            value={formValue.brand}
            onChange={handleInput}
          />
          <input
            name="country_of_origin"
            placeholder="Country Of Origin"
            value={formValue.country_of_origin}
            onChange={handleInput}
          />
          <input
            name="competitor"
            placeholder="Competitor"
            value={formValue.competitor}
            onChange={handleInput}
          />
          <input
            name="size"
            placeholder="Size"
            value={formValue.size}
            onChange={handleInput}
          />
          <input
            name="gsm"
            placeholder="GSM"
            value={formValue.gsm}
            onChange={handleInput}
          />
          <input
            name="price"
            placeholder="Price"
            value={formValue.price}
            onChange={handleInput}
          />
          <input
            name="color_number"
            placeholder="Color Number"
            value={formValue.color_number}
            onChange={handleInput}
          />
          <input
            name="speciality"
            placeholder="Speciality"
            value={formValue.speciality}
            onChange={handleInput}
          />
          <input
            name="pile_count"
            placeholder="Pile Count"
            value={formValue.pile_count}
            onChange={handleInput}
          />
          <input
            name="pile_length"
            placeholder="Pile Length"
            value={formValue.pile_length}
            onChange={handleInput}
          />
          <input
            name="pick"
            placeholder="PICK"
            value={formValue.pick}
            onChange={handleInput}
          />
          <input
            name="reed"
            placeholder="REED"
            value={formValue.reed}
            onChange={handleInput}
          />

          <textarea
            name="attributes"
            placeholder="Attributes"
            value={formValue.attributes}
            onChange={handleInput}
            rows="4"
          ></textarea>
          <div className="tick-box">
            <div className="box-1">
              <label htmlFor="new_addition">
                <input
                  name="new_addition"
                  type="checkbox"
                  className="label1"
                  checked={isChecked}
                  onChange={checkHandler}
                  value={!isChecked}
                />
                New Addition Line Up
              </label>
              <label htmlFor="homepage_new_addition" className="label-value1">
                Show On Home Page?
              </label>
              <select
                name="homepage_new_addition"
                className="select-value"
                onChange={handleChange}
                value={formValue.homepage_new_addition}
              >
                <option value="No">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div className="box-1">
              <label htmlFor="popular_product">
                <input
                  name="popular_product"
                  type="checkbox"
                  className="label2"
                  checked={isChecked_1}
                  onChange={checkHandler_1}
                  // onChange={handleChange}
                  value={!isChecked_1}
                />
                Popular Products Line Up
              </label>
              <label htmlFor="homepage_popular_product" className="label-value">
                Show On Home Page?
              </label>
              <select
                name="homepage_popular_product"
                className="select-value"
                onChange={handleChange}
                value={formValue.homepage_popular_product}
              >
                <option value="No">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div className="box-1">
              <label htmlFor="our_patent">
                <input
                  name="our_patent"
                  type="checkbox"
                  className="label3"
                  checked={isChecked_2}
                  onChange={checkHandler_2}
                  value={!isChecked_2}
                  // onChange={handleChange}
                  // value="true"
                />
                Our Patents Line Up
              </label>
              <label htmlFor="homepage_our_patent" className="label-value2">
                Show On Home Page?
              </label>
              <select
                name="homepage_our_patent"
                className="select-value"
                onChange={handleChange}
                value={formValue.homepage_our_patent}
              >
                <option value="No">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div className="box-1">
              <label htmlFor="fashion_line">
                <input
                  name="fashion_line"
                  type="checkbox"
                  className="label4"
                  checked={isChecked_3}
                  onChange={checkHandler_3}
                  value={!isChecked_3}
                  // onChange={handleChange}
                  // value="true"
                />
                Our Fashion Line Up
              </label>
              <label htmlFor="homepage_fashion_line" className="label-value2">
                Show On Home Page?
              </label>
              <select
                name="homepage_fashion_line"
                className="select-value"
                onChange={handleChange}
                value={formValue.homepage_fashion_line}
              >
                <option value="No">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            {/* <label>
              <input type="checkbox" className="label2" />
              Our Patents Line Up
            </label>
            <label>
              <input type="checkbox" className="label3" />
              Recent Products Line Up
            </label>
          </div>
          <div className="tick-box">
            <label>
              <input type="checkbox" className="label1" />
              New Addition Line Up
            </label>
            <label>
              <input type="checkbox" className="label2" />
              Our Patents Line Up
            </label>
            <label>
              <input type="checkbox" className="label3" />
              Recent Products Line Up
            </label>
            <label htmlFor="activity">Activity</label> */}
            {/* <select
              name="activity"
              // onChange={handleChange}
              // value={formState.activity}
            >
              <option value="loading">Loading</option>
              <option value="done">Done</option>
              <option value="incomplete">Incomplete</option>
            </select> */}
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <QRCodeGenerator
              towel_id={formValue.towel_id}
              towel_name={formValue.towel_name}
            />
            <button>Save Data!</button>
          </div>
        </form>
      </div>
      {/* <Rack heading="Racks for Section 1" /> */}
    </>
  );
}
export default DataBaseForm;
