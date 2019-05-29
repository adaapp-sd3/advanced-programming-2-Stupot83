import Crop from "../abstract/Crop";
import Farm from "../Farm";

class Rapeseed extends Crop {
  name: string = "Rapeseed";
  genus: string = "Rapeseeds";
  imgUrl: string = "/img/twtr/rapeseed.png";
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

  yieldRapeseed() {
    this.farm.rapeseed.total += this.farm.rapeseeds.total;
    this.farm.rapeseeds.total --;
    this.health = 0;
  }

  plantRapeseed(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}
export default Rapeseed;
