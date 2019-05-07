import React, { Component } from "react";
import './Landing.css';
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align cyan darken-4 white-text z-depth-5">
            <h4>
              <b>Menu</b>
            </h4>
            <br />
            <a href="/register"
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginBottom: "2rem"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
            </a>
            <a href="login"
              style={{
                marginLeft: "2rem",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginBottom: "2rem"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;