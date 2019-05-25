import Crop from "../abstract/Crop";
import Farm from "../Farm";

class Cabbage extends Crop {
  name: string = "Cabbage";
  genus: string = "Cabbages";
  imgUrl: string = "/img/twtr/cabbage.png";
  birthDate: Date = new Date();
  age: number = 0;
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl);
  }

  public plantAge() {
    return Math.floor((this.age += 0.04));
  }

  public draw(): any {
    this.constrainItem();
    this.farmerExamine();
  }

  yieldCabbage() {
    this.farm.cabbage.total += this.farm.cabbages.total;
    this.farm.cabbages.total --;
    this.health = 0;
  }

  plantCabbage(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}
export default Cabbage;
