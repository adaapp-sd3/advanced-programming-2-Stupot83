import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import FarmManager from "../FarmManager";
import p5 from "p5";
import makeFarm from "../../p5Setup";
import Farm from "../../models/Farm";
import Farmer from "../../models/Farmer";
import Market from "../../models/Market";
import './Dashboard.css';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  state = {
    farmer: new Farmer(),
    farm: new Farm(),
    market: new Market()
  }

  // allow instances to to tell us when they change
  handleUpdateState = newThing => {
    this.setState(newThing)
  }

  //
  componentDidMount() {
    
    let sketch = makeFarm(
      this.state.farm,
      this.state.farmer,
      this.state.market,
      this.handleUpdateState
    )
    this.setState({
      myP5: new p5(sketch, "sketch")
    });
  }

render() {
    const { user } = this.props.auth;
return (
  <div className="Dashboard">
  <div className="navbar-fixed" style={{ height: "10vh" }}>
  <nav className="z-depth-0">
  <div className="nav-wrapper blue-grey darken-3" style={{ height: "10vh" }}>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "0.7rem",
                marginLeft: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3 left"
            >
              Logout
            </button>
            </div>
            </nav>
      </div>
  <header className="Dashboard-header">
    <h2>
    <img src="/img/farmer.png" className="Dashboard-logo" alt="logo" />{" "}
      Dashboard
      {" "}<img src="/img/farmer.png" className="Dashboard-logo" alt="logo" />
    </h2>
  </header>
  <FarmManager farmer={this.state.farmer} farm={this.state.farm} market={this.state.market} />
  <div id="sketch"></div>
</div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
