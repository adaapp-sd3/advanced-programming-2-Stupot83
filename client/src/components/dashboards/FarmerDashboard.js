import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./FarmerDashboard.css";

class FarmerDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedindex: 0,
    };

    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected(index) {
    this.setState({
      selectedindex: index,
    });
  }

  render() {
    return (
      <div className="FarmerDashboard">
        <Tabs
          onSelect={this.handleSelected}
          selectedindex={this.state.selectedindex}
          defaultActiveKey="animals"
          transition={false}
          id="farmer-dashboard"
        >
          <Tab eventKey="animals" title="Animals">
            <dl>
              {this.props.farmer.myFarm && (
                <>
                  <dt>Budget</dt>
                  <dd className="Budget">£{this.props.farmer.budget.toFixed(0)}</dd>
                  <dt>Cows</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.cows.total.toFixed(0)} units
                  </dd>
                  <dt>Sheep</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.sheep.total.toFixed(0)} units
                  </dd>
                  <dt>Chickens</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.chickens.total.toFixed(0)} units
                  </dd>
                  <dt>Pigs</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.pigs.total.toFixed(0)} units
                  </dd>
                  <dt>Crocodiles</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.crocodiles.total.toFixed(0)} units
                  </dd>
                  <dt>Ostriches</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.ostriches.total.toFixed(0)} units
                  </dd>
                  <dt>Salmons</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.salmons.total.toFixed(0)} units
                  </dd>
                  <dt>Ducks</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.ducks.total.toFixed(0)} units
                  </dd>
                  <dt>Geese</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.geese.total.toFixed(0)} units
                  </dd>
                  <dt>Llamas</dt>
                  <dd className="Animals">
                    {this.props.farmer.myFarm.llamas.total.toFixed(0)} units
                  </dd>
                </>
              )}

              {this.props.farmer.myFarm && (
                <>
                  <dt>UsedCow</dt>
                  <dd className="UsedAnimal">
                    {this.props.farmer.myFarm.usedCow.total.toFixed(0)} units
                  </dd>
                  <dt>UsedSheep</dt>
                  <dd className="UsedAnimal">
                    {this.props.farmer.myFarm.usedSheep.total.toFixed(0)} units
                  </dd>
                  <dt>UsedChicken</dt>
                  <dd className="UsedAnimal">
                    {this.props.farmer.myFarm.usedChicken.total.toFixed(0)} units
                  </dd>
                  <dt>UsedPig</dt>
                  <dd className="UsedAnimal">
                    {this.props.farmer.myFarm.usedPig.total.toFixed(0)} units
                  </dd>
                  <dt>UsedCrocodile</dt>
                  <dd className="UsedAnimal">
                    {this.props.farmer.myFarm.usedCrocodile.total.toFixed(0)} units
                  </dd>
                  <dt>UsedOstrich</dt>
                  <dd className="UsedAnimal">
                    {this.props.farmer.myFarm.usedOstrich.total.toFixed(0)} units
                  </dd>
                  <dt>UsedSalmon</dt>
                  <dd className="UsedAnimal">
                    {this.props.farmer.myFarm.usedSalmon.total.toFixed(0)} units
                  </dd>
                  <dt>UsedDuck</dt>
                  <dd className="UsedAnimal">
                    {this.props.farmer.myFarm.usedDuck.total.toFixed(0)} units
                  </dd>
                  <dt>UsedGoose</dt>
                  <dd className="UsedAnimal">
                    {this.props.farmer.myFarm.usedGoose.total.toFixed(0)} units
                  </dd>
                  <dt>UsedLlama</dt>
                  <dd className="UsedAnimal">
                    {this.props.farmer.myFarm.usedLlama.total.toFixed(0)} units
                  </dd>
                </>
              )}

              {this.props.farmer.myFarm && (
                <>
                  <dt>Straw</dt>
                  <dd className="Feed">
                    {this.props.farmer.myFarm.straw.total.toFixed(0)} bales
                  </dd>
                  <dt>Corn</dt>
                  <dd className="Feed">
                    {this.props.farmer.myFarm.corn.total.toFixed(0)} bags
                  </dd>
                  <dt>Seeds</dt>
                  <dd className="Feed">
                    {this.props.farmer.myFarm.seeds.total.toFixed(0)} pkts
                  </dd>
                  <dt>Fish</dt>
                  <dd className="Feed">
                    {this.props.farmer.myFarm.fish.total.toFixed(0)} kg
                  </dd>
                  <dt>FishFood</dt>
                  <dd className="Feed">
                    {this.props.farmer.myFarm.fishFood.total.toFixed(0)} bags
                  </dd>
                </>
              )}
            </dl>
          </Tab>

          <Tab eventKey="produce" title="Produce">
            <dl>
              {this.props.farmer.myFarm && (
                <>
                  <dt>Budget</dt>
                  <dd className="Budget">£{this.props.farmer.budget.toFixed(0)}</dd>
                  <dt>Beef</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.beef.total.toFixed(0)} kg
                  </dd>
                  <dt>Lamb</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.lamb.total.toFixed(0)} kg
                  </dd>
                  <dt>Chicken</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.chicken.total.toFixed(0)} kg
                  </dd>
                  <dt>Pork</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.pork.total.toFixed(0)} kg
                  </dd>
                  <dt>Crocodile</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.crocodile.total.toFixed(0)} kg
                  </dd>
                  <dt>Ostrich</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.ostrich.total.toFixed(0)} kg
                  </dd>
                  <dt>Salmon</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.salmon.total.toFixed(0)} kg
                  </dd>
                  <dt>Duck</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.duck.total.toFixed(0)} kg
                  </dd>
                  <dt>Goose</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.goose.total.toFixed(0)} kg
                  </dd>
                  <dt>Llama</dt>
                  <dd className="Meat">
                    {this.props.farmer.myFarm.llama.total.toFixed(0)} kg
                  </dd>
                </>
              )}

              {this.props.farmer.myFarm && (
                <>
                  <dt>Milk</dt>
                  <dd className="Dairy">
                    {this.props.farmer.myFarm.milk.total.toFixed(0)} pints
                  </dd>
                  <dt>Eggs</dt>
                  <dd className="Dairy">
                    {this.props.farmer.myFarm.eggs.total.toFixed(0)} boxes
                  </dd>
                  <dt>CrocEggs</dt>
                  <dd className="Dairy">
                    {this.props.farmer.myFarm.crocEggs.total.toFixed(0)} boxes
                  </dd>
                  <dt>OstrichEggs</dt>
                  <dd className="Dairy">
                    {this.props.farmer.myFarm.ostrichEggs.total.toFixed(0)} boxes
                  </dd>
                  <dt>DuckEggs</dt>
                  <dd className="Dairy">
                    {this.props.farmer.myFarm.duckEggs.total.toFixed(0)} boxes
                  </dd>
                  <dt>GooseEggs</dt>
                  <dd className="Dairy">
                    {this.props.farmer.myFarm.gooseEggs.total.toFixed(0)} boxes
                  </dd>
                  <dt>Wool</dt>
                  <dd className="Misc">
                    {this.props.farmer.myFarm.wool.total.toFixed(0)} bales
                  </dd>
                  <dt>LlamaWool</dt>
                  <dd className="Misc">
                    {this.props.farmer.myFarm.llamaWool.total.toFixed(0)} bales
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
                  <dd className="Budget">£{this.props.farmer.budget.toFixed(0)}</dd>
                  <dt>CabSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.cabbageSeeds.total.toFixed(0)} pkts
                  </dd>
                  <dt>CarSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.carrotSeeds.total.toFixed(0)} pkts
                  </dd>
                  <dt>KaleSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.kaleSeeds.total.toFixed(0)} pkts
                  </dd>
                  <dt>LetSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.lettuceSeeds.total.toFixed(0)} pkts
                  </dd>
                  <dt>PeaSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.peaSeeds.total.toFixed(0)} pkts
                  </dd>
                  <dt>PotSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.potatoSeeds.total.toFixed(0)} pkts
                  </dd>
                  <dt>PumSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.pumpkinSeeds.total.toFixed(0)} pkts
                  </dd>
                  <dt>RapeSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.rapeseedSeeds.total.toFixed(0)} pkts
                  </dd>
                  <dt>SugSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.sugarbeetSeeds.total.toFixed(0)} pkts
                  </dd>
                  <dt>WhtSeeds</dt>
                  <dd className="Seeds">
                    {this.props.farmer.myFarm.wheatSeeds.total.toFixed(0)} pkts
                  </dd>
                </>
              )}

              {this.props.farmer.myFarm && (
                <>
                  <dt>Cabbages</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.cabbages.total.toFixed(0)} units
                  </dd>
                  <dt>Carrots</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.carrots.total.toFixed(0)} units
                  </dd>
                  <dt>Kales</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.kales.total.toFixed(0)} units
                  </dd>
                  <dt>Lettuces</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.lettuces.total.toFixed(0)} units
                  </dd>
                  <dt>Peas</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.peas.total.toFixed(0)} units
                  </dd>
                  <dt>Potatoes</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.potatoes.total.toFixed(0)} units
                  </dd>
                  <dt>Pumpkins</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.pumpkins.total.toFixed(0)} units
                  </dd>
                  <dt>Rapeseeds</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.rapeseeds.total.toFixed(0)} units
                  </dd>
                  <dt>Sugarbeets</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.sugarbeets.total.toFixed(0)} units
                  </dd>
                  <dt>Wheats</dt>
                  <dd className="Plants">
                    {this.props.farmer.myFarm.wheats.total.toFixed(0)} units
                  </dd>
                </>
              )}

              {this.props.farmer.myFarm && (
                <>
                  <dt>Cabbage</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.cabbage.total.toFixed(0)} kg
                  </dd>
                  <dt>Carrot</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.carrot.total.toFixed(0)} kg
                  </dd>
                  <dt>Kale</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.kale.total.toFixed(0)} kg
                  </dd>
                  <dt>Lettuce</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.lettuce.total.toFixed(0)} kg
                  </dd>
                  <dt>Pea</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.pea.total.toFixed(0)} kg
                  </dd>
                  <dt>Potato</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.potato.total.toFixed(0)} kg
                  </dd>
                  <dt>Pumpkin</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.pumpkin.total.toFixed(0)} kg
                  </dd>
                  <dt>Rapeseed</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.rapeseed.total.toFixed(0)} kg
                  </dd>
                  <dt>Sugarbeet</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.sugarbeet.total.toFixed(0)} kg
                  </dd>
                  <dt>Wheat</dt>
                  <dd className="Crop">
                    {this.props.farmer.myFarm.wheat.total.toFixed(0)} kg
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
                  <dd className="Budget">£{this.props.farmer.budget.toFixed(0)}</dd>
                  <dt>New Gen</dt>
                  <dd className="Tech">
                    {this.props.farmer.myFarm.gasGenerators.total.toFixed(0)} units
                  </dd>
                  <dt>New Pan</dt>
                  <dd className="Tech">
                    {this.props.farmer.myFarm.solarPanels.total.toFixed(0)} units
                  </dd>
                  <dt>UsedGen</dt>
                  <dd className="Tech">
                    {this.props.farmer.myFarm.gasGenerator.total.toFixed(0)} units
                  </dd>
                  <dt>UsedPan</dt>
                  <dd className="Tech">
                    {this.props.farmer.myFarm.solarPanel.total.toFixed(0)} units
                  </dd>
                  <dt>greenGas</dt>
                  <dd className="Energy">
                    {this.props.farmer.myFarm.greenGas.total.toFixed(0)} ltrs
                  </dd>
                  <dt>solarPower</dt>
                  <dd className="Energy">
                    {this.props.farmer.myFarm.solarPower.total.toFixed(0)} kwatt
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
