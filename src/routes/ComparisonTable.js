import React from "react";
import "./ComparisonTableStyles.css";
const ComparisonTable = ({ towels, onDeleteRow }) => {
  return (
    <div className="table-wrapper">
      <h1 style={{ margin: "5%" }}>Comparison Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Towel Name</th>
            <th>Towel Type</th>
            <th>Towel Color</th>
            <th>Retailer</th>
            <th>Brand</th>
            <th>Country Of Origin</th>
            <th>Competitor</th>
            <th>Size</th>
            <th>GSM</th>
            <th>Price</th>
            <th>Color Number</th>
            <th>Speciality</th>
            <th>Pile Count</th>
            <th>Pile Length</th>
            <th>Pick</th>
            <th>Reed</th>
            <th>Attributes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {towels.map((towel, index) => (
            <tr key={towel.id}>
              <td>{towel.towel_name}</td>
              <td>{towel.towel_type}</td>
              <td>{towel.towel_color}</td>
              <td>{towel.retailer}</td>
              <td>{towel.brand}</td>
              <td>{towel.country_of_origin}</td>
              <td>{towel.competitor}</td>
              <td>{towel.size}</td>
              <td>{towel.gsm}</td>
              <td>${towel.price}</td>
              <td>{towel.color_number}</td>
              <td>{towel.speciality}</td>
              <td>{towel.pile_count}</td>
              <td>{towel.pile_length}</td>
              <td>{towel.pick}</td>
              <td>{towel.reed}</td>
              <td className="expand">{towel.attributes}</td>
              <td className="fit">
                <span className="actions">
                  <button
                    className="delete_btn"
                    style={{ fontSize: "1.2em", color: "Tomato" }}
                    onClick={() => onDeleteRow(index)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
