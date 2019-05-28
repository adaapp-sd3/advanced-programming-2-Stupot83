import React, { Component } from "react";
import { Button, Modal, Tabs, Tab } from "react-bootstrap";
import { Player, ControlBar } from "video-react";
import Video from "../../video/farmer-style.mp4";
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
                      <span role="img" aria-label="Tractor">
                        🚜
                      </span>{" "}
                      Farm Manager Instructions{" "}
                      <span role="img" aria-label="Tractor">
                        🚜
                      </span>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Tabs
                      defaultActiveKey="Tractor"
                      transition={false}
                      id="instructions-tabs"
                    >
                      <Tab eventKey="Tractor" title="Tractor">
                      <div className="Instruction-Panel">
                      <ol className="Instruction-List">
                      <li>To drive the tractor, click on the game screen, and then use the 'w' key for up, 'a' key for left, 's' key for down, and 'd' key for right</li>
                      </ol>
                      </div>
                      </Tab>
                      <Tab eventKey="Fields" title="Fields">
                      <div className="Instruction-Panel">
                      <ol className="Instruction-List">
                      <li>Fields come in a number of types: "Fallow" to start with, then can be set to "Grazing", "Arable", "LakeLand", "FishFarm", or "Tech"</li>
                      <li>The type of field can only be set when it is empty, and is done so when a type of animal, plant or tech is placed in that field</li>
                      <li>For example, if you place a cow in an empty field, the field will be set to "Grazing" for "Cows"</li>
                      <li>The exception is the petting zoo type, which can only be set once a type is already in place, at a cost of £10000. For example, a "Grazing" field for "Cows", can become a "Petting Zoo" for "Cows"</li>
                      <li>A petting zoo can also be changed back to the previous field type, again at a cost of £10000</li>
                      <li>The colours of the fields will change dependent on the type of field chosen and the type of animal, plant or tech placed inside</li>
                    </ol>
                      </div>
                      </Tab>
                      <Tab eventKey="Animals" title="Animals">
                      <div className="Instruction-Panel">
                      <ol className="Instruction-List">
                      <li>There are ten different types of animal you can farm in the game</li>
                      <li>These are cows, sheep, chickens, pigs, crocodiles, ostriches, salmons, ducks, geese and llamas</li>
                      </ol>
                      </div>
                      </Tab>
                      <Tab eventKey="Crops" title="Crops">
                      <div className="Instruction-Panel">
                      <ol className="Instruction-List"></ol>
                      <li>There are also ten different types of crop you can farm in the game</li>
                      <li>These are cabbages, carrots, kales, lettuces, peas, potatoes, pumpkins, rapeseeds, sugarbeets and wheats</li>
                      <li>They can only exist in areas designated for "Arable"</li>
                      </div>
                      </Tab>
                      <Tab eventKey="Tech" title="Tech">
                      <div className="Instruction-Panel">
                      <ol className="Instruction-List"></ol>
                      <li>There are two types of tech setups you can choose for your farm</li>
                      <li>These are gas generators and solar panels</li>
                      <li>They can only exists in areas designated for "Tech"</li>
                      <li>Gas generators can be used to generate green gas, which can be sold at the market. They will wear out, and can be sold once so at a second hand rate</li>
                      <li>Solar Panels can be used to generate solar power, which can also be sold at the market. They will also wear out, and can be sold once so at a second hand rate</li>
                      <li>Green gas and solar panel are more eco-friendly options and return a tidy profit</li>
                      </div>
                      </Tab>
                      <Tab eventKey="Market" title="Market">
                      <div className="Instruction-Panel">
                      <ol className="Instruction-List"></ol>
                      </div>
                      </Tab>
                      <Tab eventKey="Weather" title="Weather">
                      <div className="Instruction-Panel">
                      <ol className="Instruction-List">
                      <li>The weather API provides real weather information for the City of London</li>
                      </ol>
                      </div>
                      </Tab>
                      <Tab eventKey="Fun" title="Fun">
                        <div style={{ height: "100px", width: "100px" }}>
                          <Player playsInline autoPlay src={Video}>
                            <ControlBar disableDefaultControls={true} />
                          </Player>
                        </div>
                      </Tab>
                    </Tabs>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={this.handleClose}
                      style={{
                        marginTop: "2rem",
                        backgroundColor: "#37474f",
                      }}
                    >
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
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Instructions);
