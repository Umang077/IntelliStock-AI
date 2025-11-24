import { Component } from "react";
import "./ColumnNavbarStyles.css";
import { ColumnMenuItems } from "./ColumnMenuItems";
import { Link } from "react-router-dom";
import trident from "../trident/tripic.png";
class ColumnNavbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems1">
        <Link to={"/home"} style={{ textDecoration: "none" }}>
          <img
            className="navbar-logo"
            src={trident}
            style={{ height: "50px" }}
          />
        </Link>

        <div className="menu-icons1" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu1 active1" : "nav-menu1"}>
          {ColumnMenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <a href="/layout">
            <button className="btn">Back</button>
          </a>
        </ul>
      </nav>
    );
  }
}
export default ColumnNavbar;
