import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./DataBaseFormStyles.css";
function DataBaseForm() {
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
  var params_towel_name = urlParams.get("towel_name");
  var params_towel_type = urlParams.get("towel_type");
  var params_towel_color = urlParams.get("towel_color");
  var params_section_id = urlParams.get("section_id");
  var params_section_name = urlParams.get("section_name");
  var params_image_url = urlParams.get("image_url");
  var params_retailer = urlParams.get("retailer");
  var params_brand = urlParams.get("brand");
  var params_country_of_origin = urlParams.get("country_of_origin");
  var params_competitor = urlParams.get("competitor");
  var params_size = urlParams.get("size");
  var params_gsm = urlParams.get("gsm");
  var params_price = urlParams.get("price");
  var params_color_number = urlParams.get("color_number");
  var params_speciality = urlParams.get("speciality");
  var params_pile_count = urlParams.get("pile_count");
  var params_pile_length = urlParams.get("pile_length");
  var params_pick = urlParams.get("pick");
  var params_reed = urlParams.get("reed");
  var params_attributes = urlParams.get("attributes");
  var params_popular_product = urlParams.get("popular_product");
  var params_new_addition = urlParams.get("new_addition");
  var params_our_patent = urlParams.get("our_patent");
  var params_fashion_line = urlParams.get("fashion_line");
  var params_homepage_popular_product = urlParams.get(
    "homepage_popular_product"
  );
  var params_homepage_new_addition = urlParams.get("homepage_new_addition");
  var params_homepage_our_patent = urlParams.get("homepage_our_patent");
  var params_homepage_fashion_line = urlParams.get("homepage_fashion_line");

  console.log("Database", params_towel_name);
  const [value, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3005/api/towels";
    fetch(url)
      .then((response) => response.json())
      .then((value) => {
        // console.log(value);
        // console.log(value.section_id);
        console.log(
          "This is value",
          value.filter((value) => value.towel_id == params_id)
        );
        setData(value.filter((value) => value.towel_id == params_id));
        // setData(value);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const [formValue, setFormValue] = useState({
    towel_name: `${params_towel_name}`,
    towel_type: `${params_towel_type}`,
    towel_color: `${params_towel_color}`,
    section_id: `${params_section_id}`,
    section_name: `${params_section_name}`,
    image_url: `${params_image_url}`,
    retailer: `${params_retailer}`,
    brand: `${params_brand}`,
    country_of_origin: `${params_country_of_origin}`,
    competitor: `${params_competitor}`,
    size: `${params_size}`,
    gsm: `${params_gsm}`,
    price: `${params_price}`,
    color_number: `${params_color_number}`,
    speciality: `${params_speciality}`,
    pile_count: `${params_pile_count}`,
    pile_length: `${params_pile_length}`,
    pick: `${params_pick}`,
    reed: `${params_reed}`,
    attributes: `${params_attributes}`,
    popular_product: `${params_popular_product}`,
    new_addition: `${params_new_addition}`,
    our_patent: `${params_our_patent}`,
    fashion_line: `${params_fashion_line}`,
    // popular_product: formValue.popular_product,
    // new_addition: formValue.new_addition,
    // our_patent: formValue.our_patent,
    // fashion_line: formValue.fashion_line,
    homepage_popular_product: `${params_homepage_popular_product}`,
    homepage_new_addition: `${params_homepage_new_addition}`,
    homepage_our_patent: `${params_homepage_our_patent}`,
    homepage_fashion_line: `${params_homepage_fashion_line}`,
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
  // const params = useParams();
  // var myKeyValues = window.location.search;
  // var urlParams = new URLSearchParams(myKeyValues);
  // var params_id = urlParams.get("id");
  // console.log("Database", params_id);

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
  const handleUpdateSubmit = (e) => {
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
      popular_product: formValue.popular_product,
      new_addition: formValue.new_addition,
      our_patent: formValue.our_patent,
      fashion_line: formValue.fashion_line,
      homepage_new_addition: formValue.homepage_new_addition,
      homepage_popular_product: formValue.homepage_popular_product,
      homepage_our_patent: formValue.homepage_our_patent,
      homepage_fashion_line: formValue.homepage_fashion_line,
    };
    let res = fetch(`http://localhost:3005/api/towels/update/${params_id}`, {
      method: "PUT",
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
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked_1, setIsChecked_1] = useState(false);
  const [isChecked_2, setIsChecked_2] = useState(false);
  const [isChecked_3, setIsChecked_3] = useState(false);

  // const [searchString, setSearchString] = useState();
  console.log("This is the new_addition", formValue.new_addition);
  console.log("This is the popular_product", formValue.popular_product);
  console.log("This is the patent", formValue.our_patent);
  console.log("This is the fashion", formValue.fashion_line);
  console.log("This is the new_addition_isChecked", isChecked);
  console.log("This is the popular_product_isChecked_1", isChecked_1);
  console.log("This is the patent_isChecked_2", isChecked_2);
  console.log("This is the fashion_isChecked_3", isChecked_3);

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
  return (
    <>
      <div className="from-container" style={{ marginTop: "128px" }}>
        <h1>Update The Towel Sample Details</h1>
        {value.map((card) => (
          <form action="" onSubmit={handleUpdateSubmit} key={card.towel_id}>
            {/* <label htmlFor="">Towel Name:</label> */}
            {/* <input
                name={card.towel_name}
                placeholder="Towel Name"
                value={card.towel_name}
                onChange={(e) => setSearchString(e.target.value)}
              /> */}
            <div className="inputwrapper" data-required="Towel Name">
              <input
                name="towel_name"
                placeholder="Towel Name"
                value={formValue.towel_name}
                onChange={handleInput}
                className="inputDataText"
              />
            </div>
            <div className="inputwrapper" data-required="Towel Type">
              <input
                name="towel_type"
                placeholder="Towel Type"
                value={formValue.towel_type}
                onChange={handleInput}
                className="inputDataText"
              />
            </div>
            <div className="inputwrapper" data-required="Towel Color">
              <input
                name="towel_color"
                placeholder="Towel Color"
                value={formValue.towel_color}
                onChange={handleInput}
                className="inputDataText"
              />
            </div>
            <div className="inputwrapper" data-required="Section ID">
              <input
                name="section_id"
                placeholder="Section Id"
                value={formValue.section_id}
                onChange={handleInput}
                className="inputDataText"
                disabled
              />
            </div>
            <div className="inputwrapper" data-required="Section Name">
              <input
                name="section_name"
                placeholder="Section Name"
                value={formValue.section_name}
                onChange={handleInput}
                className="inputDataText"
                disabled
              />
            </div>
            <div className="inputwrapper" data-required="Old Image Link">
              <input
                name="image_url"
                placeholder="Image URL"
                value={formValue.image_url}
                onChange={handleInput}
                className="inputDataText"
              />
            </div>
            <div className="inputwrapper" data-required="Retailer">
              <input
                name="retailer"
                placeholder="Retailer"
                value={formValue.retailer}
                onChange={handleInput}
                className="inputDataText"
              />
            </div>
            <div className="inputwrapper" data-required="Brand">
              <input
                name="brand"
                placeholder="Brand"
                value={formValue.brand}
                onChange={handleInput}
                className="inputDataText"
              />
            </div>
            <div className="inputwrapper" data-required="Country Of Origin">
              <input
                name="country_of_origin"
                placeholder="Country Of Origin"
                value={formValue.country_of_origin}
                onChange={handleInput}
                className="inputDataText"
              />
            </div>
            <div className="inputwrapper" data-required="Competitor">
              <input
                name="competitor"
                placeholder="Competitor"
                value={formValue.competitor}
                onChange={handleInput}
                className="inputDataText"
              />
            </div>
            <div className="inputwrapper" data-required="Size">
              <input
                name="size"
                placeholder="Size"
                value={formValue.size}
                onChange={handleInput}
                className="inputDataText"
              />
            </div>
            <div className="inputwrapper" data-required="GSM">
              <input
                name="gsm"
                placeholder="GSM"
                value={formValue.gsm}
                onChange={handleInput}
                className="inputDataText"
              />
            </div>
            <div className="inputwrapper" data-required="Price">
              <input
                name="price"
                placeholder="Price"
                value={formValue.price}
                onChange={handleInput}
                className="inputDataText"
              />
            </div>
            <div className="inputwrapper" data-required="Color Number">
              <input
                name="color_number"
                placeholder="Color Number"
                value={formValue.color_number}
                onChange={handleInput}
                className="inputDataText"
              />
            </div>
            <div className="inputwrapper" data-required="Speciality">
              <input
                name="speciality"
                placeholder="Speciality"
                value={formValue.speciality}
                onChange={handleInput}
                className="inputDataText"
              />
            </div>
            <div className="inputwrapper" data-required="Pile Count">
              <input
                name="pile_count"
                placeholder="Pile Count"
                value={formValue.pile_count}
                onChange={handleInput}
                className="inputDataText"
              />
            </div>
            <div className="inputwrapper" data-required="Pile Length">
              <input
                name="pile_length"
                placeholder="Pile Length"
                value={formValue.pile_length}
                onChange={handleInput}
                className="inputDataText"
              />
            </div>
            <div className="inputwrapper" data-required="PICK">
              <input
                name="pick"
                placeholder="PICK"
                value={formValue.pick}
                onChange={handleInput}
                className="inputDataText"
              />
            </div>
            <div className="inputwrapper" data-required="REED">
              <input
                name="reed"
                placeholder="REED"
                value={formValue.reed}
                onChange={handleInput}
                className="inputDataText"
              />
            </div>

            <div className="inputwrapper" data-required="Attributes">
              <textarea
                name="attributes"
                placeholder="Attributes"
                value={formValue.attributes}
                onChange={handleInput}
                className="inputDataText"
                rows="4"
              ></textarea>
            </div>
            <div className="tick-box">
              <div className="box-1">
                <label htmlFor="new_addition">
                  <input
                    name="new_addition"
                    type="checkbox"
                    className="label1"
                    checked={isChecked}
                    onChange={checkHandler}
                    // onChange={handleChange}
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
                <label
                  htmlFor="homepage_popular_product"
                  className="label-value"
                >
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
                    // onChange={handleChange}
                    value={!isChecked_2}
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
                    // onChange={handleChange}
                    value={!isChecked_3}
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
            </div>
            <button>Update Data!</button>
          </form>
        ))}
      </div>
      {/* <Rack heading="Racks for Section 1" /> */}
    </>
  );
}
export default DataBaseForm;
