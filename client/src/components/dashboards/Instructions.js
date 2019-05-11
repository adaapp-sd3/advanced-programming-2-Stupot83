import React, { Component } from "react";
import { Button, Modal, Tabs, Tab } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Instructions.css";

class Instructions extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { user } = this.props.auth;

    return (
      <>
        <div className="container">
          <div className="row" style={{ marginTop: "3rem" }}>
            <div
              className="col s8 offset-s3 cyan darken-4 white-text z-depth-5 Instructions"
              style={{ height: "80vh" }}
            >
              <header className="Instructions-header">
                <h2>
                  <img
                    src="/img/farmer.png"
                    className="Instructions-logo"
                    alt="logo"
                  />{" "}
                  Farm Manager Instructions{" "}
                  <img
                    src="/img/farmer.png"
                    className="Instructions-logo"
                    alt="logo"
                  />
                </h2>
                <h4>
                  Learn how to play here <b>{user.name.split(" ")[0]}</b> ...
                </h4>
              </header>
              <div className="row" style={{ marginTop: "3rem" }}>
                <img
                  src="/img/man.png"
                  style={{ marginLeft: "10rem" }}
                  alt="logo"
                />
                <Button
                  variant="primary"
                  onClick={this.handleShow}
                  style={{ margin: "3rem", marginTop: "4rem" }}
                >
                  Load Instructions
                </Button>
                <Modal
                  backdrop="static"
                  show={this.state.show}
                  aria-labelledby="instructions-modal"
                >
                  <Modal.Header>
                    <Modal.Title id="instructions-modal">
                      Farm Manager Instructions
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Tabs
                      defaultActiveKey="Tractor"
                      transition={false}
                      id="instructions-tabs"
                    >
                      <Tab eventKey="Tractor" title="Tractor" />
                      <Tab eventKey="Fields" title="Fields" />
                      <Tab eventKey="Animals" title="Animals" />
                      <Tab eventKey="Crops" title="Crops" />
                      <Tab eventKey="Tech" title="Tech" />
                      <Tab eventKey="Market" title="Market" />
                      <Tab eventKey="Weather" title="Weather" />
                    </Tabs>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div className="row" style={{ marginTop: "1rem" }}>
                <img
                  src="/img/woman.png"
                  style={{
                    marginLeft: "10rem",
                    height: "160px",
                    width: "160px",
                  }}
                  alt="logo"
                />
                <a href="/dashboard">
                  <Button
                    variant="primary"
                    style={{ margin: "3rem", marginTop: "4rem" }}
                  >
                    Back to Game Menu
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
Instructions.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Instructions);
