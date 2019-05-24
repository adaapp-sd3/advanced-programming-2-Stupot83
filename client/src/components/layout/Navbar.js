import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link to="/" className="col s5 brand-logo center black white-text">
              <strong>
                <span role="img" aria-label="Tractor">
                  🚜
                </span>{" "}
                FARM MANAGER{" "}
                <span role="img" aria-label="Tractor">
                  🚜
                </span>
              </strong>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
