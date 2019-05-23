import Crop from "../abstract/Crop";
import Farm from "../Farm";

class Lettuce extends Crop {
  name: string = "Lettuce";
  genus: string = "Lettuces";
  imgUrl: string = "/img/twtr/lettuce.png";
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

  yieldLettuce() {
    this.farm.lettuce.total += this.farm.lettuces.total;
    this.farm.lettuces.total --;
    this.health = 0;
  }

  plantLettuce(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}
export default Lettuce;
