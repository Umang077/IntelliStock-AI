import React, { useState, useEffect } from "react";
import axios from "axios";
import TowelCard from "./TowelCard";
import ComparisonTable from "./ComparisonTable";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "./ComparisonStyles.css";

const ComparisonPage = () => {
  const [towels, setTowels] = useState([]);
  const [selectedTowels, setSelectedTowels] = useState([]);
  const [showTable, setShowTable] = useState(false);

  /*useEffect(() => {
    axios
      .get("http://localhost:3005/api/towels")
      .then((response) => setTowels(response.data))
      .catch((error) => console.error("Error fetching towels:", error));
  }, []); */
  useEffect(() => {
    axios
      .get("http://localhost:3005/api/towels")
      .then((response) => {
        const filteredTowels = response.data.filter(
          (towel) => towel.is_deleted === 0
        );
        setTowels(filteredTowels);
      })
      .catch((error) => console.error("Error fetching towels:", error));
  }, []);

  const handleTowelSelect = (towel) => {
    // setSelectedTowels([...selectedTowels, towel]);
    if (!selectedTowels.includes(towel)) {
      setSelectedTowels([...selectedTowels, towel]);
    } else {
      alert("Already Present In the Table!");
    }
    console.log("selectedTowels", selectedTowels);
    console.log("towel", towel);
    setShowTable(true);
  };

  const handleDeleteRow = (towelId) => {
    setSelectedTowels(selectedTowels.filter((_, index) => index !== towelId));
    /*console.log("selectedTowels", selectedTowels.length);*/
    if (selectedTowels.length === 1) {
      setShowTable(false);
    }
  };

  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://asset1.cxnmarksandspencer.com/is/image/mands/Luxury-Egyptian-Cotton-Towel/PL_05_T36_1917E_XD_X_EC_4?$PDP_IMAGEGRID$&wid=1024&qlt=80"
        title="Comparison Page"
        btnClass="hide"
      />
      <h1 style={{ margin: "20px" }}>Towel Comparison</h1>
      <div className="towel-list-container">
        <div className="towel-list">
          {towels.map((towel) => (
            <div key={towel.id}>
              <TowelCard
                towel={towel}
                onSelect={() => handleTowelSelect(towel)}
              />
            </div>
          ))}
        </div>
      </div>
      {showTable && (
        <ComparisonTable
          towels={selectedTowels}
          onDeleteRow={handleDeleteRow}
        />
      )}
      <Footer />
    </>
  );
};

export default ComparisonPage;
