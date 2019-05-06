import React, { Component } from "react";
import './Landing.css';
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Farm Manager:</b> the goal is to get people thinking practically about the effects of climate change, and to serve as a contemporary, digital re-imagining of the inner-city school trip to the country to meet the cows.{" "}
            </h4>
            <br />
            <a href="/register"
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
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
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect white hoverable black-text"
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