import React, { Component } from "react";
import { Button, Modal, Tabs, Tab } from 'react-bootstrap';
import './MarketDashboard.css';

class MarketDashboard extends Component {

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

  buyAnimal = animal => {

    switch (animal) {

      case "cow":
        if (this.props.market.currentFarmer.budget > this.props.market.pricePerCow) {
          this.props.market.currentFarmer.myFarm.cows.total += 1;
          const unit = 1;
          // this.props.market.currentFarmer.myFarm.makeCow();
          this.props.market.currentFarmer.budget -= unit * this.props.market.pricePerCow;
        }
        break;

      case "sheep":
        if (this.props.market.currentFarmer.budget > this.props.market.pricePerSheep) {
          this.props.market.currentFarmer.myFarm.sheep.total += 1;
          const unit = 1;
          // this.props.market.currentFarmer.myFarm.makeSheep();
          this.props.market.currentFarmer.budget -= unit * this.props.market.pricePerSheep;
        }
        break;

      case "chicken":
        if (this.props.market.currentFarmer.budget > this.props.market.pricePerChicken) {
          this.props.market.currentFarmer.myFarm.chickens.total += 1
          const unit = 1
          // this.props.market.currentFarmer.myFarm.makeChicken()
          this.props.market.currentFarmer.budget -= unit * this.props.market.pricePerChicken
        }
        break;

      case "pig":
        if (this.props.market.currentFarmer.budget > this.props.market.pricePerPig) {
          this.props.market.currentFarmer.myFarm.pigs.total += 1
          const unit = 1
          // this.props.market.currentFarmer.myFarm.makeChicken()
          this.props.market.currentFarmer.budget -= unit * this.props.market.pricePerPig
        }
        break;

      case "crocodile":
        if (this.props.market.currentFarmer.budget > this.props.market.pricePerCrocodile) {
          this.props.market.currentFarmer.myFarm.crocodiles.total += 1
          const unit = 1
          // this.props.market.currentFarmer.myFarm.makeCrocodile()
          this.props.market.currentFarmer.budget -= unit * this.props.market.pricePerCrocodile
        }
        break;

      case "ostrich":
        if (this.props.market.currentFarmer.budget > this.props.market.pricePerOstrich) {
          this.props.market.currentFarmer.myFarm.ostriches.total += 1
          const unit = 1
          // this.props.market.currentFarmer.myFarm.makeOstrich()
          this.props.market.currentFarmer.budget -= unit * this.props.market.pricePerOstrich
        }
        break;

      case "salmon":
        if (this.props.market.currentFarmer.budget > this.props.market.pricePerSalmon) {
          this.props.market.currentFarmer.myFarm.salmons.total += 1
          const unit = 1
          // this.props.market.currentFarmer.myFarm.makeSalmon()
          this.props.market.currentFarmer.budget -= unit * this.props.market.pricePerSalmon
        }
        break;

      case "duck":
        if (this.props.market.currentFarmer.budget > this.props.market.pricePerDuck) {
          this.props.market.currentFarmer.myFarm.ducks.total += 1
          const unit = 1
          // this.props.market.currentFarmer.myFarm.makeDuck()
          this.props.market.currentFarmer.budget -= unit * this.props.market.pricePerDuck
        }
        break;

      case "goose":
        if (this.props.market.currentFarmer.budget > this.props.market.pricePerGoose) {
          this.props.market.currentFarmer.myFarm.geese.total += 1
          const unit = 1
          // this.props.market.currentFarmer.myFarm.makeGoose()
          this.props.market.currentFarmer.budget -= unit * this.props.market.pricePerGoose
        }
        break;

      case "llama":
        if (this.props.market.currentFarmer.budget > this.props.market.pricePerLlama) {
          this.props.market.currentFarmer.myFarm.llamas.total += 1
          const unit = 1
          // this.props.market.currentFarmer.myFarm.makeLlama()
          this.props.market.currentFarmer.budget -= unit * this.props.market.pricePerLlama
        }
        break;

      default:
    }
  }

  buyFeed = feed => {

    switch (feed) {

      case "straw":
        if (this.props.market.currentFarmer.budget > this.props.market.strawPrice) {
          this.props.market.currentFarmer.myFarm.straw.total = Math.floor(this.props.market.currentFarmer.budget / this.props.market.strawPrice)
          let unit = 100
          this.props.market.currentFarmer.budget -= unit * this.props.market.strawPrice
        }
        break;

      case "corn":
        if (this.props.market.currentFarmer.budget > this.props.market.cornPrice) {
          this.props.market.currentFarmer.myFarm.corn.total = Math.floor(this.props.market.currentFarmer.budget / this.props.market.cornPrice)
          let unit = 100
          this.props.market.currentFarmer.budget -= unit * this.props.market.cornPrice
        }
        break;

      case "fish":
        if (this.props.market.currentFarmer.budget > this.props.market.fishPrice) {
          this.props.market.currentFarmer.myFarm.fish.total = Math.floor(this.props.market.currentFarmer.budget / this.props.market.fishPrice)
          let unit = 100
          this.props.market.currentFarmer.budget -= unit * this.props.market.fishPrice
        }
        break;

      case "fishFood":
        if (this.props.market.currentFarmer.budget > this.props.market.fishFoodPrice) {
          this.props.market.currentFarmer.myFarm.fishFood.total = Math.floor(this.props.market.currentFarmer.budget / this.props.market.fishFoodPrice)
          let unit = 100
          this.props.market.currentFarmer.budget -= unit * this.props.market.fishFoodPrice
        }
        break;

      case "seeds":
        if (this.props.market.currentFarmer.budget > this.props.market.grassSeedPrice) {
          this.props.market.currentFarmer.myFarm.seeds.total = Math.floor(this.props.market.currentFarmer.budget / this.props.market.grassSeedPrice)
          let unit = 100
          this.props.market.currentFarmer.budget -= unit * this.props.market.grassSeedPrice
        }
        break;

      default:
    }
  }

  buyTech = tech => {

    switch (tech) {

      case "greenGas":
        if (this.props.market.currentFarmer.budget > this.props.market.greenGasPrice) {
          this.props.market.currentFarmer.myFarm.greenGas.total = Math.floor(this.props.market.currentFarmer.budget / this.props.market.greenGasPrice)
          let amount = Math.floor(this.props.market.currentFarmer.budget / this.props.market.greenGasPrice)
          this.props.market.currentFarmer.budget -= amount * this.props.market.greenGasPrice
        }
        break;

      case "solarPanels":
        if (this.props.market.currentFarmer.budget > this.props.market.solarPanelPrice) {
          this.props.market.currentFarmer.myFarm.solarPanels.total += 1
          let unit = 1
          this.props.market.currentFarmer.budget -= unit * this.props.market.solarPanelPrice
        }
        break;

      default:
    }
  }

  sellMeat = meat => {

    switch (meat) {

      case "beef":
        this.props.market.currentFarmer.budget += this.props.market.beefPrice * this.props.market.currentFarmer.myFarm.beef.total
        this.props.market.currentFarmer.myFarm.beef.total = 0
        break;

      case "lamb":
        this.props.market.currentFarmer.budget += this.props.market.lambPrice * this.props.market.currentFarmer.myFarm.lamb.total
        this.props.market.currentFarmer.myFarm.lamb.total = 0
        break;

      case "chicken":
        this.props.market.currentFarmer.budget += this.props.market.chickenPrice * this.props.market.currentFarmer.myFarm.chicken.total
        this.props.market.currentFarmer.myFarm.chicken.total = 0
        break;

      case "pork":
        this.props.market.currentFarmer.budget += this.props.market.porkPrice * this.props.market.currentFarmer.myFarm.pork.total
        this.props.market.currentFarmer.myFarm.pork.total = 0
        break;

      case "crocodile":
        this.props.market.currentFarmer.budget += this.props.market.crocodilePrice * this.props.market.currentFarmer.myFarm.crocodile.total
        this.props.market.currentFarmer.myFarm.crocodile.total = 0
        break;

      case "ostrich":
        this.props.market.currentFarmer.budget += this.props.market.ostrichPrice * this.props.market.currentFarmer.myFarm.ostrich.total
        this.props.market.currentFarmer.myFarm.ostrich.total = 0
        break;

      case "salmon":
        this.props.market.currentFarmer.budget += this.props.market.salmonPrice * this.props.market.currentFarmer.myFarm.salmon.total
        this.props.market.currentFarmer.myFarm.salmon.total = 0
        break;

      case "duck":
        this.props.market.currentFarmer.budget += this.props.market.duckPrice * this.props.market.currentFarmer.myFarm.duck.total
        this.props.market.currentFarmer.myFarm.duck.total = 0
        break;

      case "goose":
        this.props.market.currentFarmer.budget += this.props.market.goosePrice * this.props.market.currentFarmer.myFarm.goose.total
        this.props.market.currentFarmer.myFarm.goose.total = 0
        break;

      case "llama":
        this.props.market.currentFarmer.budget += this.props.market.llamaPrice * this.props.market.currentFarmer.myFarm.llama.total
        this.props.market.currentFarmer.myFarm.llama.total = 0
        break;

      default:
    }
  }

  sellDairy = dairy => {

    switch (dairy) {

      case "milk":
        this.props.market.currentFarmer.budget += this.props.market.milkPrice * this.props.market.currentFarmer.myFarm.milk.total
        this.props.market.currentFarmer.myFarm.milk.total = 0
        break;

      case "eggs":
        this.props.market.currentFarmer.budget += this.props.market.eggsPrice * this.props.market.currentFarmer.myFarm.eggs.total
        this.props.market.currentFarmer.myFarm.eggs.total = 0
        break;

      case "crocEggs":
        this.props.market.currentFarmer.budget += this.props.market.crocEggsPrice * this.props.market.currentFarmer.myFarm.crocEggs.total
        this.props.market.currentFarmer.myFarm.crocEggs.total = 0
        break;

      case "ostrichEggs":
        this.props.market.currentFarmer.budget += this.props.market.ostrichEggsPrice * this.props.market.currentFarmer.myFarm.ostrichEggs.total
        this.props.market.currentFarmer.myFarm.ostrichEggs.total = 0
        break;

      case "duckEggs":
        this.props.market.currentFarmer.budget += this.props.market.duckEggsPrice * this.props.market.currentFarmer.myFarm.duckEggs.total
        this.props.market.currentFarmer.myFarm.duckEggs.total = 0
        break;

      case "gooseEggs":
        this.props.market.currentFarmer.budget += this.props.market.gooseEggsPrice * this.props.market.currentFarmer.myFarm.gooseEggs.total
        this.props.market.currentFarmer.myFarm.gooseEggs.total = 0
        break;

      default:
    }
  }

  sellMisc = misc => {

    switch (misc) {

      case "wool":
        this.props.market.currentFarmer.budget += this.props.market.woolPrice * this.props.market.currentFarmer.myFarm.wool.total
        this.props.market.currentFarmer.myFarm.wool.total = 0
        break;

      case "llamaWool":
        this.props.market.currentFarmer.budget += this.props.market.llamaWoolPrice * this.props.market.currentFarmer.myFarm.llamaWool.total
        this.props.market.currentFarmer.myFarm.llamaWool.total = 0
        break;

      case "greenGas":
        this.props.market.currentFarmer.budget += this.props.market.greenGasResalePrice * this.props.market.currentFarmer.myFarm.greenGas.total
        this.props.market.currentFarmer.myFarm.greenGas.total = 0
        break;

      case "solarPanels":
        this.props.market.currentFarmer.budget += this.props.market.solarPanelResalePrice * this.props.market.currentFarmer.myFarm.solarPanels.total
        this.props.market.currentFarmer.myFarm.solarPanels.total = 0
        break;

      default:
    }
  }

  render() {

    return (
      <>
        <Button variant="primary" onClick={this.handleShow} style={{ marginTop: "0.2rem"}}>
          Visit the Farmers Market
      </Button>

        <Modal 
          backdrop="static"
          show={this.state.show}
          aria-labelledby="market-modal">
          <Modal.Header>
            <Modal.Title id="market-modal">Welcome to the Farmers Market</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="MarketDashboard">

              <Tabs defaultActiveKey="buy animals" transition={false} id="buy-sell-tabs">
                <Tab eventKey="buy animals" title="Buy Animals">
                  <dl className="market-list">
                    <div className="Animal">
                      <dt>Cow</dt>
                      <dd>
                        <button onClick={() => this.buyAnimal("cow")}>
                          Buy cow for {this.props.market.pricePerCow}
                        </button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dt>Sheep</dt>
                      <dd>
                        <button onClick={() => this.buyAnimal("sheep")}>
                          Buy sheep for {this.props.market.pricePerSheep}
                        </button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dt>Chicken</dt>
                      <dd>
                        <button onClick={() => this.buyAnimal("chicken")}>
                          Buy chicken for {this.props.market.pricePerChicken}
                        </button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dt>Pig</dt>
                      <dd>
                        <button onClick={() => this.buyAnimal("pig")}>
                          Buy pig for {this.props.market.pricePerPig}
                        </button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dt>Crocodile</dt>
                      <dd>
                        <button onClick={() => this.buyAnimal("crocodile")}>
                          Buy crocodile for {this.props.market.pricePerCrocodile}
                        </button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dt>Ostrich</dt>
                      <dd>
                        <button onClick={() => this.buyAnimal("ostrich")}>
                          Buy ostrich for {this.props.market.pricePerOstrich}
                        </button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dt>Salmon</dt>
                      <dd>
                        <button onClick={() => this.buyAnimal("salmon")}>
                          Buy salmon for {this.props.market.pricePerSalmon}
                        </button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dt>Duck</dt>
                      <dd>
                        <button onClick={() => this.buyAnimal("duck")}>
                          Buy duck for {this.props.market.pricePerDuck}
                        </button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dt>Goose</dt>
                      <dd>
                        <button onClick={() => this.buyAnimal("goose")}>
                          Buy goose for {this.props.market.pricePerGoose}
                        </button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dt>Llama</dt>
                      <dd>
                        <button onClick={() => this.buyAnimal("llama")}>
                          Buy llama for {this.props.market.pricePerLlama}
                        </button>
                      </dd>
                    </div>
                  </dl>
                </Tab>

                <Tab eventKey="buy feed" title="Buy Feed">
                  <dl className="market-list">
                    <div className="Feed">
                      <dt>Straw</dt>
                      <dd>
                        <button onClick={() => this.buyFeed("straw")}>
                          Buy straw for {this.props.market.strawPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Feed">
                      <dt>Corn</dt>
                      <dd>
                        <button onClick={() => this.buyFeed("corn")}>
                          Buy corn for {this.props.market.cornPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Feed">
                      <dt>Fish</dt>
                      <dd>
                        <button onClick={() => this.buyFeed("fish")}>
                          Buy fish for {this.props.market.fishPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Feed">
                      <dt>Fish Food</dt>
                      <dd>
                        <button onClick={() => this.buyFeed("fishFood")}>
                          Buy fish food for {this.props.market.fishFoodPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Feed">
                      <dt>Seeds</dt>
                      <dd>
                        <button onClick={() => this.buyFeed("seeds")}>
                          Buy seeds for {this.props.market.grassSeedPrice}
                        </button>
                      </dd>
                    </div>
                  </dl>
                </Tab>

                <Tab eventKey="buy tech" title="Buy Tech">
                  <dl className="market-list">
                    <div className="Tech">
                      <dt>Green Gas</dt>
                      <dd>
                        <button onClick={() => this.buyTech("greenGas")}>
                          Buy greenGas for {this.props.market.greenGasPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Tech">
                      <dt>Solar Panels</dt>
                      <dd>
                        <button onClick={() => this.buyTech("solarPanels")}>
                          Buy solar panels for {this.props.market.solarPanelPrice}
                        </button>
                      </dd>
                    </div>
                  </dl>
                </Tab>

                <Tab eventKey="sell meat" title="Sell Meat">
                  <dl className="market-list">
                    <div className="Meat">
                      <dt>Beef</dt>
                      <dd>
                        <button onClick={() => this.sellMeat("beef")}>
                          Sell beef for {this.props.market.beefPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dt>Lamb</dt>
                      <dd>
                        <button onClick={() => this.sellMeat("lamb")}>
                          Sell lamb for {this.props.market.lambPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dt>Chicken</dt>
                      <dd>
                        <button onClick={() => this.sellMeat("chicken")}>
                          Sell chicken for {this.props.market.chickenPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dt>Pork</dt>
                      <dd>
                        <button onClick={() => this.sellMeat("pork")}>
                          Sell pork for {this.props.market.porkPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dt>Crocodile</dt>
                      <dd>
                        <button onClick={() => this.sellMeat("crocodile")}>
                          Sell crocodile for {this.props.market.crocodilePrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dt>Ostrich</dt>
                      <dd>
                        <button onClick={() => this.sellMeat("ostrich")}>
                          Sell ostrich for {this.props.market.ostrichPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dt>Salmon</dt>
                      <dd>
                        <button onClick={() => this.sellMeat("salmon")}>
                          Sell salmon for {this.props.market.salmonPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dt>Duck</dt>
                      <dd>
                        <button onClick={() => this.sellMeat("duck")}>
                          Sell duck for {this.props.market.duckPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dt>Goose</dt>
                      <dd>
                        <button onClick={() => this.sellMeat("goose")}>
                          Sell goose for {this.props.market.salmonPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dt>Llama</dt>
                      <dd>
                        <button onClick={() => this.sellMeat("llama")}>
                          Sell llama for {this.props.market.llamaPrice}
                        </button>
                      </dd>
                    </div>
                  </dl>
                </Tab>

                <Tab eventKey="sell dairy" title="Sell Dairy">
                  <dl className="market-list">
                    <div className="Dairy">
                      <dt>Milk</dt>
                      <dd>
                        <button onClick={() => this.sellDairy("milk")}>
                          Sell milk for {this.props.market.milkPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Dairy">
                      <dt>Eggs</dt>
                      <dd>
                        <button onClick={() => this.sellDairy("eggs")}>
                          Sell eggs for {this.props.market.eggsPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Dairy">
                      <dt>Crocodile Eggs</dt>
                      <dd>
                        <button onClick={() => this.sellDairy("crocEggs")}>
                          Sell crocodile for {this.props.market.crocEggsPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Dairy">
                      <dt>Ostrich Eggs</dt>
                      <dd>
                        <button onClick={() => this.sellDairy("ostrichEggs")}>
                          Sell ostrich eggs for {this.props.market.ostrichEggsPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Dairy">
                      <dt>Duck Eggs</dt>
                      <dd>
                        <button onClick={() => this.sellDairy("duckEggs")}>
                          Sell duck eggs for {this.props.market.duckEggsPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Dairy">
                      <dt>Goose Eggs</dt>
                      <dd>
                        <button onClick={() => this.sellDairy("gooseEggs")}>
                          Sell goose eggs for {this.props.market.gooseEggsPrice}
                        </button>
                      </dd>
                    </div>
                  </dl>
                </Tab>

                <Tab eventKey="sell misc" title="Sell Misc">
                  <dl className="market-list">
                    <div className="Misc">
                      <dt>Wool</dt>
                      <dd>
                        <button onClick={() => this.sellMisc("wool")}>
                          Sell wool for {this.props.market.woolPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Misc">
                      <dt>Llama Wool</dt>
                      <dd>
                        <button onClick={() => this.sellMisc("llamaWool")}>
                          Sell llama wool for {this.props.market.llamaWoolPrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Misc">
                      <dt>Green Gas</dt>
                      <dd>
                        <button onClick={() => this.sellMisc("greenGas")}>
                          Sell green gas for {this.props.market.greenGasResalePrice}
                        </button>
                      </dd>
                    </div>
                    <div className="Misc">
                      <dt>Solar Panels</dt>
                      <dd>
                        <button onClick={() => this.sellMisc("solarPanels")}>
                          Sell solar panels for {this.props.market.solarPanelResalePrice}
                        </button>
                      </dd>
                    </div>
                  </dl>
                </Tab>
              </Tabs>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default MarketDashboard
