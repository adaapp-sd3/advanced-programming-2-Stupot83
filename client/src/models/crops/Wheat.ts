import Crop from "../abstract/Crop";
import Farm from "../Farm";

class Wheat extends Crop {
  name: string = "Wheat";
  genus: string = "Wheats";
  imgUrl: string = "/img/twtr/wheat.png";
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

  public cropAge() {
    return Math.floor((this.age += 0.05));
  }

  public draw(): any {
    this.constrainItem();
    this.farmerExamine();
  }

  yieldWheat() {
    this.farm.wheat.total += this.farm.wheats.total;
    this.farm.wheats.total --;
    this.health = 0;
  }

  plantWheat(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}
export default Wheat;
