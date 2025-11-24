// import { Component } from "react";
import "./NavbarStyles.css";
import React, { useState } from "react";
import trident from "./trident/tripic.png";

import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
// class Navbar extends Component {}
function Navbar() {
  // state = { clicked: false };
  const [clicked, setClicked] = useState(false);
  // handleClick = () => {
  //   // this.setState({ clicked: !this.state.clicked });
  //   setClicked(!clicked);
  // };
  // render(){
  return (
    <nav className="NavbarItems">
      {/* <img
          src="./Users/trident/Desktop/Anshu/React/Towel_Project/src/assets/icons/Artboard1.png"
          alt="Logo"
        /> */}
      <Link to={"/home"} style={{ textDecoration: "none" }}>
        <img className="navbar-logo" src={trident} style={{ height: "50px" }} />
      </Link>
      <div
        className="menu-icons"
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {/* <form className="form-search" action="">
            <input
              className="search"
              type="search"
              placeholder="Search"
              required
            />
            <a href="" style={{ textDecoration: "none" }}>
              <i class="fa fa-search"></i>
            </a>
          </form> */}
        <SearchBar />
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <a href="/" onClick={() => sessionStorage.clear()}>
          <button>Log Out</button>
        </a>
      </ul>
    </nav>
  );
}
// }
export default Navbar;
