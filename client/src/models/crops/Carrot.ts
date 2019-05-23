import Crop from "../abstract/Crop";
import Farm from "../Farm";

class Carrot extends Crop {
  name: string = "Carrot";
  genus: string = "Carrots";
  imgUrl: string = "/img/twtr/carrot.png";
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

  yieldCarrot() {
    this.farm.carrot.total += this.farm.carrots.total;
    this.farm.carrots.total --;
    this.health = 0;
  }

  plantCarrot(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}
export default Carrot;
