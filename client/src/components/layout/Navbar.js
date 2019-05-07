import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "avenir"
              }}
              className="col s5 brand-logo center black white-text"
            >
              <strong>🚜 FARM MANAGER 🚜</strong>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;