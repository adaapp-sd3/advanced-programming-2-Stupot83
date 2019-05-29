import Crop from "../abstract/Crop";
import Farm from "../Farm";

class Pea extends Crop {
  name: string = "Pea";
  genus: string = "Peas";
  imgUrl: string = "/img/twtr/pea.png";
  birthDate: Date = new Date();
  age: number = 0;
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }

  maxAge() {
    if(this.age >= 43) {
      this.age = 43
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

  yieldPea() {
    this.farm.pea.total += this.farm.peas.total;
    this.farm.peas.total --;
    this.health = 0;
  }

  plantPea(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}
export default Pea;
