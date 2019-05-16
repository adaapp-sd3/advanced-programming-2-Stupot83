import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import FarmManager from "../FarmManager";
import p5 from "p5";
import makeFarm from "../../p5Setup";
import Farm from "../../models/Farm";
import Farmer from "../../models/Farmer";
import Market from "../../models/Market";
import WeatherDashboard from "./WeatherDashboard";
import "./Game.css";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      farmer: new Farmer(),
      farm: new Farm(),
      market: new Market(),
    };
    this.saveFarm = this.saveFarm.bind(this);
  }

  saveFarm() {
    const { user } = this.props.auth;

    console.log(this.state);
    const farm = {
      userId: user.id,
      chickens: this.state.farm.chickens,
    };

    console.log({ farm });

    axios
      .post("/api/farms/farm", farm)
      .then(res => console.log("it works"))
      .catch(err => console.log(err));
  }

  handleUpdateState = newThing => {
    this.setState(newThing);
  };

  componentDidMount() {
    let sketch = makeFarm(
      this.state.farm,
      this.state.farmer,
      this.state.market,
      this.handleUpdateState
    );
    this.setState({
      myP5: new p5(sketch, "sketch"),
    });
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div className="Game cyan darken-4">
        <div className="navbar-fixed" style={{ height: "10vh" }}>
          <nav className="z-depth-0">
            <div className="nav-wrapper" style={{ height: "10vh" }}>
              <a
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "0.7rem",
                  marginLeft: "2rem",
                  backgroundColor: "#37474f",
                }}
                href="/dashboard"
                className="btn btn-large waves-effect waves-light hoverable left"
              >
                Menu
              </a>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "0.7rem",
                  marginLeft: "3rem",
                  marginRight: "1rem",
                  backgroundColor: "#37474f",
                }}
                className="btn btn-large waves-effect waves-light hoverable left"
                onClick={this.saveFarm}
              >
                Save
              </button>
              <WeatherDashboard weather={this.props.weather} />
            </div>
          </nav>
        </div>
        <header className="Game-header">
          <h2>
            <img src="/img/farmer.png" className="Game-logo" alt="logo" />{" "}
            <b>{user.name.split(" ")[0]}'s Farm</b>{" "}
            <img src="/img/farmer.png" className="Game-logo" alt="logo" />
          </h2>
        </header>
        <FarmManager
          farmer={this.state.farmer}
          weather={this.state.weather}
          farm={this.state.farm}
          market={this.state.market}
        />
        <div id="sketch" />
      </div>
    );
  }
}
Game.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Game);
