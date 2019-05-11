import React, { Component } from "react";
import './Landing.css';
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }} className="container">
        <div className="row" style={{ marginTop: "4rem" }}>
          <div className="col s12 center-align cyan darken-4 white-text z-depth-5 Landing">
            <h4>
              <b>🚜 Welcome to Farm Manager 🚜</b>
            </h4>
            <br />
            <div className="row">
              <img src="/img/cow.png" style={{ height: "10rem", marginLeft: "2rem" }} alt="logo" />
              <img src="/img/man.png" style={{ height: "10rem", marginLeft: "1rem" }} alt="logo" />
              <img src="/img/farm.png" style={{ height: "10rem", marginLeft: "1rem" }} alt="logo" />
              <img src="/img/woman.png" style={{ height: "10rem", marginLeft: "1rem" }} alt="logo" />
              <img src="/img/sheep.png" style={{ height: "10rem", marginLeft: "1rem" }} alt="logo" />
            </div>
            <div className="row Landing-synopsis" style={{ margin: "2rem" }}>
              <h4 style={{ marginBottom: "2rem"}}>Take on the role of a farmer in the game <b>Farm Manager!</b> ... Grow crops, 
                raise livestock and buy and sell goods at the farmers market in an ever-changing economy
                and climate that is sure to test your decision making skills to the core ... </h4>
            </div>
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