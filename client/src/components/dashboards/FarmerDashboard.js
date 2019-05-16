import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./FarmerDashboard.css";

class FarmerDashboard extends Component {
  hideUI = () => {
    this.props.farmer.showUI = !this.props.farmer.showUI;
  };

  render() {
    return (
      <div className="FarmerDashboard">
      <Button onClick={this.hideUI}>Hide Inventory</Button>
        <dl>
          <dt>Budget</dt>
          <dd>{this.props.farmer.budget}</dd>

          {this.props.farmer.myFarm && (
            <>
              <dt>Cows</dt>
              <dd>{this.props.farmer.myFarm.cows.total} units</dd>
              <dt>Sheep</dt>
              <dd>{this.props.farmer.myFarm.sheep.total} units</dd>
              <dt>Chickens</dt>
              <dd>{this.props.farmer.myFarm.chickens.total} units</dd>
              <dt>Pigs</dt>
              <dd>{this.props.farmer.myFarm.pigs.total} units</dd>
              <dt>Crocodiles</dt>
              <dd>{this.props.farmer.myFarm.crocodiles.total} units</dd>
              <dt>Ostriches</dt>
              <dd>{this.props.farmer.myFarm.ostriches.total} units</dd>
              <dt>Salmons</dt>
              <dd>{this.props.farmer.myFarm.salmons.total} units</dd>
              <dt>Ducks</dt>
              <dd>{this.props.farmer.myFarm.ducks.total} units</dd>
              <dt>Geese</dt>
              <dd>{this.props.farmer.myFarm.geese.total} units</dd>
              <dt>Llamas</dt>
              <dd>{this.props.farmer.myFarm.llamas.total} units</dd>
            </>
          )}

          {this.props.farmer.myFarm && (
            <>
              <dt>CartSeeds</dt>
              <dd>{this.props.farmer.myFarm.carrotSeeds.total} units</dd>
              <dt>PumpSeeds</dt>
              <dd>{this.props.farmer.myFarm.pumpkinSeeds.total} units</dd>
              <dt>WheatSeeds</dt>
              <dd>{this.props.farmer.myFarm.wheatSeeds.total} units</dd>
            </>
          )}

          {this.props.farmer.myFarm && (
            <>
              <dt>Carrots</dt>
              <dd>{this.props.farmer.myFarm.carrots.total} units</dd>
              <dt>Pumpkins</dt>
              <dd>{this.props.farmer.myFarm.pumpkins.total} units</dd>
              <dt>Wheats</dt>
              <dd>{this.props.farmer.myFarm.wheats.total} units</dd>
            </>
          )}

          {this.props.farmer.myFarm && (
            <>
              <dt>Beef</dt>
              <dd>{this.props.farmer.myFarm.beef.total} kg</dd>
              <dt>Lamb</dt>
              <dd>{this.props.farmer.myFarm.lamb.total} kg</dd>
              <dt>Chicken</dt>
              <dd>{this.props.farmer.myFarm.chicken.total} kg</dd>
              <dt>Pork</dt>
              <dd>{this.props.farmer.myFarm.pork.total} kg</dd>
              <dt>Crocodile</dt>
              <dd>{this.props.farmer.myFarm.crocodile.total} kg</dd>
              <dt>Ostrich</dt>
              <dd>{this.props.farmer.myFarm.ostrich.total} kg</dd>
              <dt>Salmon</dt>
              <dd>{this.props.farmer.myFarm.salmon.total} kg</dd>
              <dt>Duck</dt>
              <dd>{this.props.farmer.myFarm.duck.total} kg</dd>
              <dt>Goose</dt>
              <dd>{this.props.farmer.myFarm.goose.total} kg</dd>
              <dt>Llama</dt>
              <dd>{this.props.farmer.myFarm.llama.total} kg</dd>
            </>
          )}

          {this.props.farmer.myFarm && (
            <>
              <dt>Milk</dt>
              <dd>{this.props.farmer.myFarm.milk.total} pints</dd>
              <dt>Eggs</dt>
              <dd>{this.props.farmer.myFarm.eggs.total} boxes</dd>
              <dt>CrocEggs</dt>
              <dd>{this.props.farmer.myFarm.crocEggs.total} boxes</dd>
              <dt>OstrichEggs</dt>
              <dd>{this.props.farmer.myFarm.ostrichEggs.total} boxes</dd>
              <dt>DuckEggs</dt>
              <dd>{this.props.farmer.myFarm.duckEggs.total} boxes</dd>
              <dt>GooseEggs</dt>
              <dd>{this.props.farmer.myFarm.gooseEggs.total} boxes</dd>
            </>
          )}

          {this.props.farmer.myFarm && (
            <>
              <dt>Carrot</dt>
              <dd>{this.props.farmer.myFarm.carrot.total} bales</dd>
              <dt>Pumpkin</dt>
              <dd>{this.props.farmer.myFarm.pumpkin.total} bales</dd>
              <dt>Wheat</dt>
              <dd>{this.props.farmer.myFarm.wheat.total} units</dd>
            </>
          )}

          {this.props.farmer.myFarm && (
            <>
              <dt>Wool</dt>
              <dd>{this.props.farmer.myFarm.wool.total} bales</dd>
              <dt>LlamaWool</dt>
              <dd>{this.props.farmer.myFarm.llamaWool.total} bales</dd>
              <dt>greenGas</dt>
              <dd>{this.props.farmer.myFarm.greenGas.total} units</dd>
              <dt>solarPower</dt>
              <dd>{this.props.farmer.myFarm.solarPower.total} units</dd>
            </>
          )}

          {this.props.farmer.myFarm && (
            <>
              <dt>Straw</dt>
              <dd>{this.props.farmer.myFarm.straw.total} bales</dd>
              <dt>Corn</dt>
              <dd>{this.props.farmer.myFarm.corn.total} bags</dd>
              <dt>Fish</dt>
              <dd>{this.props.farmer.myFarm.fish.total} bags</dd>
              <dt>FishFood</dt>
              <dd>{this.props.farmer.myFarm.fishFood.total} bags</dd>
              <dt>Seeds</dt>
              <dd>{this.props.farmer.myFarm.seeds.total} bunches</dd>
            </>
          )}

          {this.props.farmer.myFarm && (
            <>
              <dt>Generators</dt>
              <dd>{this.props.farmer.myFarm.gasGenerators.total} units</dd>
              <dt>SolarPanels</dt>
              <dd>{this.props.farmer.myFarm.solarPanels.total} units</dd>
              <dt>OldGen</dt>
              <dd>{this.props.farmer.myFarm.gasGenerator.total} units</dd>
              <dt>OldPan</dt>
              <dd>{this.props.farmer.myFarm.solarPanel.total} units</dd>
            </>
          )}
        </dl>
      </div>
    );
  }
}

export default FarmerDashboard;
