import React, { Component } from "react";
import Sound from "react-sound";
import Song from "../../music/Big-Green-Tractor.mp3";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./Dashboard.css";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div className="container">
        <div className="row" style={{ marginTop: "3rem" }}>
          <div
            className="col s8 cyan darken-4 white-text z-depth-5 Dashboard"
            style={{ height: "80vh" }}
          >
            <Sound
              url={Song}
              playStatus={Sound.status.PLAYING}
              position={148000}
              loop={true}
              onLoading={this.handleSongLoading}
              onPlaying={this.handleSongPlaying}
              onFinishedPlaying={this.handleSongFinishedPlaying}
            />
            <header className="Dashboard-header">
              <h2>
                <img
                  src="/img/farmer.png"
                  className="Dashboard-logo"
                  alt="logo"
                />{" "}
                Game Menu{" "}
                <img
                  src="/img/farmer.png"
                  className="Dashboard-logo"
                  alt="logo"
                />
              </h2>
              <h4>
                Welcome to Farm Manager <b>{user.name.split(" ")[0]}</b>
              </h4>
            </header>
            <div className="row" style={{ marginTop: "1rem" }}>
              <a
                style={{
                  width: "200px",
                  height: "100px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "0.7rem",
                  marginLeft: "4rem",
                  paddingTop: "1.5rem",
                }}
                href="/game"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3 left"
              >
                New Game
              </a>
              <a
                style={{
                  width: "200px",
                  height: "100px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "0.7rem",
                  marginLeft: "1rem",
                  paddingTop: "1.5rem",
                }}
                href="/dashboard"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3 left"
              >
                Load Game
              </a>
              <a
                style={{
                  width: "200px",
                  height: "100px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "0.7rem",
                  marginLeft: "1rem",
                  paddingTop: "1.5rem",
                }}
                href="/instructions"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3 left"
              >
                How to Play
              </a>
              <button
                style={{
                  width: "200px",
                  height: "100px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "0.7rem",
                  marginLeft: "1rem",
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3 left"
              >
                Logout
              </button>
            </div>
            <div className="row" style={{ marginTop: "3rem" }}>
              <img
                src="/img/man.png"
                className="Dashboard-img"
                style={{ marginLeft: "8rem" }}
                alt="logo"
              />
              <img
                src="/img/farm.png"
                className="Dashboard-img"
                style={{ marginLeft: "2rem" }}
                alt="logo"
              />
              <img
                src="/img/woman.png"
                className="Dashboard-img"
                style={{ marginLeft: "2rem" }}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
