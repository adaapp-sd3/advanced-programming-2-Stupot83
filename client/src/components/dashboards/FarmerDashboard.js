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
            <dt>Total chickens</dt><dd>{this.props.farmer.myFarm.chickens.total}</dd>
            <dt>Total cows</dt><dd>{this.props.farmer.myFarm.cows.total}</dd>
            <dt>Total sheep</dt><dd>{this.props.farmer.myFarm.sheeps.total}</dd>
            <dt>Total straw</dt><dd>{this.props.farmer.myFarm.straw.total} bales</dd>
            <dt>Total corn</dt><dd>{this.props.farmer.myFarm.corn.total} bags</dd>
            <dt>Total eggs</dt><dd>{this.props.farmer.myFarm.eggs.total} boxes</dd>
            <dt>Total milk</dt><dd>{this.props.farmer.myFarm.milk.total} pints</dd>
            <dt>Total wool</dt><dd>{this.props.farmer.myFarm.wool.total} bales</dd>
            <dt>Total seeds</dt><dd>{this.props.farmer.myFarm.seeds.total} bunches</dd>
            </>
          )}
        </dl>
        <button onClick={this.hideUI}>Hide UI</button>
      </div>
    )
  }
}

export default FarmerDashboard;