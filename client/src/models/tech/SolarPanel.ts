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

  yieldSolarPower() {
    let amountOfSolarPowerToYield = 5 - this.health;
    this.farm.solarPower.total += Math.abs(amountOfSolarPowerToYield);
    this.health -= 1;
  }

  yieldSolarPanel() {
    this.farm.solarPanels.total +=1;
    this.farm.solarPanel.total -=1;
    this.health = 0;
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl);
    console.log(this.p5Img);
  }

  public draw(): any {
    this.constrainItem();
    this.farmerExamine();
  }

  placeSolarPanel(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}

export default SolarPanel;
