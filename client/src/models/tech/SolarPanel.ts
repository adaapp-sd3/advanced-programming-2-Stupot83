import Tech from "../abstract/Tech";
import Farm from "../Farm";

class SolarPanel extends Tech {
  name: string = "SolarPanel";
  genus: string = "SolarPanels";
  imgUrl: string = "img/twtr/solarpanel.png";
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }

  checkWear() {
    if (this.health <= 0) {
      this.farm.solarPanels.objects.pop();
      this.farm.solarPanels.total -= 1;
    }
  }

  yieldSolarPower() {
    let amountOfSolarPowerToYield = 5 - this.hunger;
    this.farm.solarPower.total += Math.abs(amountOfSolarPowerToYield);
    this.hunger += 1;
  }

  yieldSolarPanel() {
    this.farm.solarPanel.total = this.farm.solarPanels.total;
    this.health = 0;
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl);
    console.log(this.p5Img);
  }

  public draw(): any {
    this.constrainItem();
    this.farmerExamine();
    this.checkWear();
  }
}

export default SolarPanel;
