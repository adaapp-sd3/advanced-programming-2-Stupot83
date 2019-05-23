import Crop from "../abstract/Crop";
import Farm from "../Farm";

class Pumpkin extends Crop {
  name: string = "Pumpkin";
  genus: string = "Pumpkins";
  imgUrl: string = "/img/twtr/pumpkin.png";
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

  yieldPumpkin() {
    this.farm.pumpkin.total += this.farm.pumpkins.total;
    this.farm.pumpkins.total --;
    this.health = 0;
  }

  plantPumpkin(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}
export default Pumpkin;
