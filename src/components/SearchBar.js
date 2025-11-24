// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import "./SearchBar.css";
function SearchBar() {
  const [fiilterData, setFilterData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [value, setData] = useState([]);
  useEffect(() => {
    const url = "http://localhost:3005/api/towels";
    fetch(url)
      .then((response) => response.json())
      .then((value) => {
        console.log("This is value", value);
        // setData(value);
        setData(value.filter((value) => value.is_deleted === 0));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;

    setWordEntered(searchWord);
    const newFilter = value.filter((value) => {
      return value.towel_name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };
  const clearInput = () => {
    setFilterData([]);
    setWordEntered("");
  };
  const getImageUrl = (card_Id, towel_Name) => {
    return `/individualtoweldetail?towel_name=${towel_Name}`;
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          className="input-search"
          type="text"
          placeholder="Search Your Towel..."
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {wordEntered.length === 0 ? (
            <i className="fa fa-search"></i>
          ) : (
            <i
              className="fa fa-times"
              onClick={() => {
                clearInput();
              }}
            ></i>
          )}
        </div>
      </div>
      {fiilterData.length !== 0 && (
        <div className="dataResult">
          {fiilterData.slice(0, 15).map((value, key) => {
            return (
              <a
                className="dataItem"
                href={getImageUrl(value.towel_id, value.towel_name)}
                key={value.towel_id}
              >
                <p>{value.towel_name} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
    // <input
    //   className="searchBar"
    //   type="text"
    //   value={fiilterData}
    //   onChange={(e) => setFilterData(e.target.value)}
    //   placeholder="Search"
    // />
  );
}
export default SearchBar;
