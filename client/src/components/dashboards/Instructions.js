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
                      <Tab eventKey="Farmer" title="Farmer">
                        <div className="Instruction-Panel">
                          <ol className="Instruction-List">
                            <li>
                              To drive the tractor, click on the game screen,
                              and then use the 'w' key for up, 'a' key for left,
                              's' key for down, and 'd' key for right
                            </li>
                            <li>
                              On the left hand side of the game screen, the
                              farmer is able to click on the tabs and view the
                              budget along with the inventory of items on the
                              farm
                            </li>
                            <li>
                              From this menu you are able to see what you have
                              to place in fields or what produce you are able to
                              sell
                            </li>
                            <li>
                              These values will change dependent on whether you
                              are buying or selling produce or items, and if
                              animals perish through starvation/illness
                            </li>
                            <li>
                              When driving over a field, the farmer will be
                              displayed with the current type of the field and
                              the contents
                            </li>
                            <li>
                              If there are animals in the field, the farmer is
                              able to see their average health and average
                              hunger, and will receive prompts to feed them when
                              needed
                            </li>
                            <li>
                              In an animal field, the farmer is able to take
                              produce such as milk or eggs from the animals, and
                              can also send the animals to slaughter
                            </li>
                            <li>
                              In a crop field, the farmer will be made aware
                              when the crops are mature enough to harvest, and
                              can collect them when ready
                            </li>
                            <li>
                              In a tech field, the farmer is able to see the
                              health of the gas generator or solar panel, and
                              can collect green gas or solar power, or recycle
                              the units once worn out
                            </li>
                            <li>
                              When viewing the inventory, once you have clicked
                              on it, you can cycle between the tabs to look at
                              the parts using the arrow keys, even when viewing
                              the market modal, allowing the farmer to see
                              things update in real-time
                            </li>
                          </ol>
                        </div>
                      </Tab>
                      <Tab eventKey="Fields" title="Fields">
                        <div className="Instruction-Panel">
                          <ol className="Instruction-List">
                            <li>
                              Fields come in a number of types: "Fallow" to
                              start with, then can be set to "Grazing",
                              "Arable", "LakeLand", "FishFarm", or "Tech"
                            </li>
                            <li>
                              The type of field can only be set when it is
                              empty, and is done so when a type of animal, plant
                              or tech is placed in that field
                            </li>
                            <li>
                              For example, if you place a cow in an empty field,
                              the field will be set to "Grazing" for "Cows"
                            </li>
                            <li>
                              The exception is the petting zoo type, which can
                              only be set once a type is already in place, at a
                              cost of £10000. For example, a "Grazing" field for
                              "Cows", can become a "Petting Zoo" for "Cows"
                            </li>
                            <li>
                              A petting zoo can also be changed back to the
                              previous field type, again at a cost of £10000
                            </li>
                            <li>
                              The colours of the fields will change dependent on
                              the type of field chosen and the type of animal,
                              plant or tech placed inside
                            </li>
                          </ol>
                        </div>
                      </Tab>
                      <Tab eventKey="Animals" title="Animals">
                        <div className="Instruction-Panel">
                          <ol className="Instruction-List">
                            <li>
                              There are ten different types of animal you can
                              farm in the game
                            </li>
                            <li>
                              These are cows, sheep, chickens, pigs, crocodiles,
                              ostriches, salmons, ducks, geese and llamas
                            </li>
                            <li>
                              Cows, sheep and llamas eat straw, so you will need
                              to keep straw in supply if you are farming these
                              animals
                            </li>
                            <li>
                              Chickens, ducks, geese and pigs eat corn, so you
                              will need to keep corn in supply if you are
                              farming these animals
                            </li>
                            <li>
                              Ostriches eat seeds, and salmon eat fishFood, and
                              crocodiles eat fish, so again you will need to
                              keep these in supply if farming these animals
                            </li>
                            <li>
                              The game is designed to protect the welfare of the
                              animals whilst in your care, so will prompt you
                              when they need to be fed and rested from milking
                              etc
                            </li>
                            <li>
                              You can only place animals in an empty field or a
                              field already with that type of animal and class
                              of field - e.g. "Grazing" for "Cows", as the field
                              dashboard will show
                            </li>
                            <li>
                              You cannot place animals in an area not suitable
                              for them, and you cannot place them if you don't
                              have them in stock or there isn't enough space
                            </li>
                            <li>
                              To place cows in a field, hold down the 't' key.
                              To place sheep in a field, hold down the 'y' key
                            </li>
                            <li>
                              To place chickens in a field, hold down the 'u'
                              key. To place pigs in a field, hold down the 'i'
                              key
                            </li>
                            <li>
                              To place crocodiles in a lakeland, hold down the
                              'o' key. To place ostrich in a field, hold down
                              the 'p' key
                            </li>
                            <li>
                              To place salmons in a fishfarm, hold down the 'g'
                              key. To place ducks in a lakeland, hold down the
                              'h' key
                            </li>
                            <li>
                              To place geese in a lakeland, hold down the 'j'
                              key. To place llamas in a field, hold down the 'k'
                              key
                            </li>
                            <li>
                              Cows, sheep, chickens, llamas, ostriches and pigs
                              can only live in a "Grazing" area
                            </li>
                            <li>Salmon can only live in a "FishFarm" area</li>
                            <li>
                              Ducks, crocodiles and geese can only live in a
                              "LakeLand" area
                            </li>
                          </ol>
                        </div>
                      </Tab>
                      <Tab eventKey="Crops" title="Crops">
                        <div className="Instruction-Panel">
                          <ol className="Instruction-List">
                            <li>
                              There are also ten different types of crop you can
                              farm in the game
                            </li>
                            <li>
                              These are cabbages, carrots, kales, lettuces,
                              peas, potatoes, pumpkins, rapeseeds, sugarbeets
                              and wheats
                            </li>
                            <li>
                              They can only exist in areas designated for
                              "Arable"
                            </li>
                            <li>
                              Crops can only be placed in an empty field or one
                              designated as "Arable"
                            </li>
                            <li>
                              To farm crops, you must first buy the
                              corresponding seeds to plant in the field
                            </li>
                            <li>
                              To place cabbages in a field, hold down the '1'
                              key. To place carrots in a field, hold down the
                              '2' key
                            </li>
                            <li>
                              To place kales in a field, hold down the '3' key.
                              To place lettuces in a field, hold down the '4'
                              key
                            </li>
                            <li>
                              To place peas in a field, hold down the '5' key.
                              To place potatoes in a field, hold down the '6'
                              key
                            </li>
                            <li>
                              To place pumpkins in a field, hold down the '7'
                              key. To place field in a lakeland, hold down the
                              '8' key
                            </li>
                            <li>
                              To place geese in a field, hold down the '9' key.
                              To place llamas in a field, hold down the '0' key
                            </li>
                            <li>
                              Plants can only be harvested if the farmer spends
                              enough time in the field for them to mature
                            </li>
                          </ol>
                        </div>
                      </Tab>
                      <Tab eventKey="Tech" title="Tech">
                        <div className="Instruction-Panel">
                          <ol className="Instruction-List">
                            <li>
                              There are two types of tech setups you can choose
                              for your farm
                            </li>
                            <li>These are gas generators and solar panels</li>
                            <li>
                              They can only exists in areas designated for
                              "Tech" and must be in stock first
                            </li>
                            <li>
                              To place a gas generator in a field, hold down the
                              'b' key
                            </li>
                            <li>
                              To place a solar panel in a field, hold down the
                              'n' key
                            </li>
                            <li>
                              Gas generators can be used to generate green gas,
                              which can be sold at the market. They will wear
                              out, and can be sold once so at a second hand rate
                            </li>
                            <li>
                              Solar Panels can be used to generate solar power,
                              which can also be sold at the market. They will
                              also wear out, and can be sold once so at a second
                              hand rate
                            </li>
                            <li>
                              Green gas and solar panel are more eco-friendly
                              options and return a tidy profit
                            </li>
                          </ol>
                        </div>
                      </Tab>
                      <Tab eventKey="Market" title="Market">
                        <div className="Instruction-Panel">
                          <ol className="Instruction-List">
                            <li>
                              The market allows the farmer to buy animals, feed,
                              crop seeds and tech such as solar panels
                            </li>
                            <li>
                              The market also allows the farmer to sell produce
                              such as crops, milk, wool etc or green produce
                              such as green gas
                            </li>
                            <li>
                              As you buy or sell, you are able to view the
                              changes to the budget and items in the inventory
                              on the left. You can cycle through this inventory
                              at the same time as using the market modal with
                              the arrow keys
                            </li>
                            <li>
                              {" "}
                              The farmer is also available to view the Crypto
                              Currency Exchange, which uses an API to update to
                              live prices and show the increases and decreases
                            </li>
                            <li>
                              In future editions of the game, the farmer would
                              be able to buy, sell and trade using crypto
                              currency
                            </li>
                          </ol>
                        </div>
                      </Tab>
                      <Tab eventKey="Weather" title="Weather">
                        <div className="Instruction-Panel">
                          <ol className="Instruction-List">
                            <li>
                              The weather API provides real weather information
                              for the City of London
                            </li>
                            <li>
                              In future editions of the game, the weather api
                              will allow you to set the city you are in and
                              display the weather for that area based on your
                              location
                            </li>
                            <li>
                              Also in the future, the game will display animated
                              weather on the farm based on the real weather at
                              that time
                            </li>
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
