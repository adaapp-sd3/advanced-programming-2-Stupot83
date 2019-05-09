import React, { Component } from 'react';
import './FarmerDashboard.css'

class FarmerDashboard extends Component {

  hideUI = () => {
    this.props.farmer.showUI = false
  }

  render() {
    return (
      <div className="FarmerDashboard">
        <dl>
          <dt>Current budget</dt><dd>{this.props.farmer.budget}</dd>

          {this.props.farmer.myFarm && (<>
            <dt>Total cows</dt><dd>{this.props.farmer.myFarm.cows.total} units</dd>
            <dt>Total beef</dt><dd>{this.props.farmer.myFarm.beef.total} kg</dd>
            <dt>Total milk</dt><dd>{this.props.farmer.myFarm.milk.total} pints</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Total sheep</dt><dd>{this.props.farmer.myFarm.sheep.total} units</dd>
            <dt>Total lamb</dt><dd>{this.props.farmer.myFarm.lamb.total} kg</dd>
            <dt>Total wool</dt><dd>{this.props.farmer.myFarm.wool.total} bales</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Total chickens</dt><dd>{this.props.farmer.myFarm.chickens.total} units</dd>
            <dt>Total chicken</dt><dd>{this.props.farmer.myFarm.chicken.total} kg</dd>
            <dt>Total eggs</dt><dd>{this.props.farmer.myFarm.eggs.total} boxes</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Total pigs</dt><dd>{this.props.farmer.myFarm.pigs.total} units</dd>
            <dt>Total pork</dt><dd>{this.props.farmer.myFarm.pork.total} kg</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Total crocodiles</dt><dd>{this.props.farmer.myFarm.crocodiles.total} units</dd>
            <dt>Total crocodile</dt><dd>{this.props.farmer.myFarm.crocodile.total} kg</dd>
            <dt>Total crocEggs</dt><dd>{this.props.farmer.myFarm.crocEggs.total} boxes</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Total ostriches</dt><dd>{this.props.farmer.myFarm.ostriches.total} units</dd>
            <dt>Total ostrich</dt><dd>{this.props.farmer.myFarm.ostrich.total} kg</dd>
            <dt>Total ostrichEggs</dt><dd>{this.props.farmer.myFarm.ostrichEggs.total} boxes</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Total salmons</dt><dd>{this.props.farmer.myFarm.salmons.total} units</dd>
            <dt>Total salmon</dt><dd>{this.props.farmer.myFarm.salmon.total} kg</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Total ducks</dt><dd>{this.props.farmer.myFarm.ducks.total} units</dd>
            <dt>Total duck</dt><dd>{this.props.farmer.myFarm.duck.total} kg</dd>
            <dt>Total duckEggs</dt><dd>{this.props.farmer.myFarm.duckEggs.total} boxes</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Total geese</dt><dd>{this.props.farmer.myFarm.geese.total} units</dd>
            <dt>Total goose</dt><dd>{this.props.farmer.myFarm.goose.total} kg</dd>
            <dt>Total gooseEggs</dt><dd>{this.props.farmer.myFarm.gooseEggs.total} boxes</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Total llamas</dt><dd>{this.props.farmer.myFarm.llamas.total} units</dd>
            <dt>Total llama</dt><dd>{this.props.farmer.myFarm.llama.total} kg</dd>
            <dt>Total llamaWool</dt><dd>{this.props.farmer.myFarm.llamaWool.total} bales</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Total straw</dt><dd>{this.props.farmer.myFarm.straw.total} bales</dd>
            <dt>Total corn</dt><dd>{this.props.farmer.myFarm.corn.total} bags</dd>
            <dt>Total fish</dt><dd>{this.props.farmer.myFarm.fish.total} bags</dd>
            <dt>Total fishFood</dt><dd>{this.props.farmer.myFarm.fishFood.total} bags</dd>
            <dt>Total seeds</dt><dd>{this.props.farmer.myFarm.seeds.total} bunches</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Total greenGas</dt><dd>{this.props.farmer.myFarm.greenGas.total} units</dd>
            <dt>Total solarPanels</dt><dd>{this.props.farmer.myFarm.solarPanels.total} kg</dd>
          </>
          )}
        </dl>
        <button onClick={this.hideUI}>Hide UI</button>
      </div>
    )
  }
}

export default FarmerDashboard;