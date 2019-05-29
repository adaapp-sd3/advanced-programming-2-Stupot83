import Crop from "../abstract/Crop";
import Farm from "../Farm";

class Kale extends Crop {
  name: string = "Kale";
  genus: string = "Kales";
  imgUrl: string = "/img/twtr/kale.png";
  birthDate: Date = new Date();
  age: number = 0;
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }

  maxAge() {
    if(this.age >= 61) {
      this.age = 61
    }
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
    this.maxAge();
  }

  yieldKale() {
    this.farm.kale.total += this.farm.kales.total;
    this.farm.kale.total --;
    this.health = 0;
  }

  plantKale(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}
export default Kale;
