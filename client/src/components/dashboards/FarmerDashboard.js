import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./FarmerDashboard.css";

class FarmerDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };

    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected(index, last) {
    this.setState({
      selectedIndex: index,
    });
  }

  render() {
    return (
      <div className="FarmerDashboard">
        <Tabs
          onSelect={this.handleSelected}
          selectedIndex={this.state.selectedIndex}
          defaultActiveKey="animals"
          transition={false}
          id="farmer-dashboard"
        >
          <Tab eventKey="animals" title="Animals">
            <dl>
              {this.props.farmer.myFarm && (
                <>
                  <dt>Budget</dt>
                  <dd className="Budget">£{this.props.farmer.budget}</dd>
                  <dt>Cows</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.cows.total} units
                  </dd>
                  <dt>Sheep</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.sheep.total} units
                  </dd>
                  <dt>Chickens</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.chickens.total} units
                  </dd>
                  <dt>Pigs</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.pigs.total} units
                  </dd>
                  <dt>Crocodiles</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.crocodiles.total} units
                  </dd>
                  <dt>Ostriches</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.ostriches.total} units
                  </dd>
                  <dt>Salmons</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.salmons.total} units
                  </dd>
                  <dt>Ducks</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.ducks.total} units
                  </dd>
                  <dt>Geese</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.geese.total} units
                  </dd>
                  <dt>Llamas</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.llamas.total} units
                  </dd>
                </>
              )}

              {this.props.farmer.myFarm && (
                <>
                  <dt>Beef</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.beef.total} kg
                  </dd>
                  <dt>Lamb</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.lamb.total} kg
                  </dd>
                  <dt>Chicken</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.chicken.total} kg
                  </dd>
                  <dt>Pork</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.pork.total} kg
                  </dd>
                  <dt>Crocodile</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.crocodile.total} kg
                  </dd>
                  <dt>Ostrich</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.ostrich.total} kg
                  </dd>
                  <dt>Salmon</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.salmon.total} kg
                  </dd>
                  <dt>Duck</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.duck.total} kg
                  </dd>
                  <dt>Goose</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.goose.total} kg
                  </dd>
                  <dt>Llama</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.llama.total} kg
                  </dd>
                </>
              )}

              {this.props.farmer.myFarm && (
                <>
                  <dt>Milk</dt>
                  <dd className="Dairy">
                    {this.props.farmer.myFarm.milk.total} pints
                  </dd>
                  <dt>Eggs</dt>
                  <dd className="Dairy">
                    {this.props.farmer.myFarm.eggs.total} boxes
                  </dd>
                  <dt>CrocEggs</dt>
                  <dd className="Dairy">
                    {this.props.farmer.myFarm.crocEggs.total} boxes
                  </dd>
                  <dt>OstrichEggs</dt>
                  <dd className="Dairy">
                    {this.props.farmer.myFarm.ostrichEggs.total} boxes
                  </dd>
                  <dt>DuckEggs</dt>
                  <dd className="Dairy">
                    {this.props.farmer.myFarm.duckEggs.total} boxes
                  </dd>
                  <dt>GooseEggs</dt>
                  <dd className="Dairy">
                    {this.props.farmer.myFarm.gooseEggs.total} boxes
                  </dd>
                  <dt>Wool</dt>
                  <dd className="Misc">
                    {this.props.farmer.myFarm.wool.total} bales
                  </dd>
                  <dt>LlamaWool</dt>
                  <dd className="Misc">
                    {this.props.farmer.myFarm.llamaWool.total} bales
                  </dd>
                </>
              )}

              {this.props.farmer.myFarm && (
                <>
                  <dt>Straw</dt>
                  <dd className="Feed">
                    {this.props.farmer.myFarm.straw.total} bales
                  </dd>
                  <dt>Corn</dt>
                  <dd className="Feed">
                    {this.props.farmer.myFarm.corn.total} bags
                  </dd>
                  <dt>Seeds</dt>
                  <dd className="Feed">
                    {this.props.farmer.myFarm.seeds.total} pkts
                  </dd>
                  <dt>Fish</dt>
                  <dd className="Feed">
                    {this.props.farmer.myFarm.fish.total} kg
                  </dd>
                  <dt>FishFood</dt>
                  <dd className="Feed">
                    {this.props.farmer.myFarm.fishFood.total} bags
                  </dd>
                </>
              )}
            </dl>
          </Tab>

          <Tab eventKey="crops" title="Crops">
            <dl>
              {this.props.farmer.myFarm && (
                <>
                  <dt>Budget</dt>
                  <dd className="Budget">£{this.props.farmer.budget}</dd>
                  <dt>CabSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.cabbageSeeds.total} pkts
                  </dd>
                  <dt>CarSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.carrotSeeds.total} pkts
                  </dd>
                  <dt>KaleSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.kaleSeeds.total} pkts
                  </dd>
                  <dt>LetSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.lettuceSeeds.total} pkts
                  </dd>
                  <dt>PeaSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.peaSeeds.total} pkts
                  </dd>
                  <dt>PotSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.potatoSeeds.total} pkts
                  </dd>
                  <dt>PumSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.pumpkinSeeds.total} pkts
                  </dd>
                  <dt>RapeSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.rapeseedSeeds.total} pkts
                  </dd>
                  <dt>SugSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.sugarbeetSeeds.total} pkts
                  </dd>
                  <dt>WhtSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.wheatSeeds.total} pkts
                  </dd>
                </>
              )}

              {this.props.farmer.myFarm && (
                <>
                  <dt>Cabbages</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.cabbages.total} units
                  </dd>
                  <dt>Carrots</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.carrots.total} units
                  </dd>
                  <dt>Kales</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.kales.total} units
                  </dd>
                  <dt>Lettuces</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.lettuces.total} units
                  </dd>
                  <dt>Peas</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.peas.total} units
                  </dd>
                  <dt>Potatoes</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.potatoes.total} units
                  </dd>
                  <dt>Pumpkins</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.pumpkins.total} units
                  </dd>
                  <dt>Rapeseeds</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.rapeseeds.total} units
                  </dd>
                  <dt>Sugarbeets</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.sugarbeets.total} units
                  </dd>
                  <dt>Wheats</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.wheats.total} units
                  </dd>
                </>
              )}

              {this.props.farmer.myFarm && (
                <>
                  <dt>Cabbage</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.cabbage.total} kg
                  </dd>
                  <dt>Carrot</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.carrot.total} kg
                  </dd>
                  <dt>Kale</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.kale.total} kg
                  </dd>
                  <dt>Lettuce</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.lettuce.total} kg
                  </dd>
                  <dt>Pea</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.pea.total} kg
                  </dd>
                  <dt>Potato</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.potato.total} kg
                  </dd>
                  <dt>Pumpkin</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.pumpkin.total} kg
                  </dd>
                  <dt>Rapeseed</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.rapeseed.total} kg
                  </dd>
                  <dt>Sugarbeet</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.sugarbeet.total} kg
                  </dd>
                  <dt>Wheat</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.wheat.total} kg
                  </dd>
                </>
              )}
            </dl>
          </Tab>

          <Tab eventKey="tech" title="Tech">
            <dl>
              {this.props.farmer.myFarm && (
                <>
                  <dt>Budget</dt>
                  <dd className="Budget">£{this.props.farmer.budget}</dd>
                  <dt>New Gen</dt>
                  <dd className="Tech">
                    {this.props.farmer.myFarm.gasGenerators.total} units
                  </dd>
                  <dt>New Pan</dt>
                  <dd className="Tech">
                    {this.props.farmer.myFarm.solarPanels.total} units
                  </dd>
                  <dt>UsedGen</dt>
                  <dd className="Tech">
                    {this.props.farmer.myFarm.gasGenerator.total} units
                  </dd>
                  <dt>UsedPan</dt>
                  <dd className="Tech">
                    {this.props.farmer.myFarm.solarPanel.total} units
                  </dd>
                  <dt>greenGas</dt>
                  <dd className="Energy">
                    {this.props.farmer.myFarm.greenGas.total} ltrs
                  </dd>
                  <dt>solarPower</dt>
                  <dd className="Energy">
                    {this.props.farmer.myFarm.solarPower.total} kwatt
                  </dd>
                </>
              )}
            </dl>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default FarmerDashboard;
