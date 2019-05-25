import Crop from "../abstract/Crop";
import Farm from "../Farm";

class Sugarbeet extends Crop {
  name: string = "Sugarbeet";
  genus: string = "Sugarbeets";
  imgUrl: string = "/img/twtr/sugarbeet.png";
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

  yieldSugarbeet() {
    this.farm.sugarbeet.total += this.farm.sugarbeets.total;
    this.farm.sugarbeets.total --;
    this.health = 0;
  }

  plantSugarbeet(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}
export default Sugarbeet;
