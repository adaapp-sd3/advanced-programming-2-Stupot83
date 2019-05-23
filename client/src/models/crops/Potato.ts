import Crop from "../abstract/Crop";
import Farm from "../Farm";

class Potato extends Crop {
  name: string = "Potato";
  genus: string = "Potatoes";
  imgUrl: string = "/img/twtr/potato.png";
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

  yieldPotato() {
    this.farm.potato.total += this.farm.potatoes.total;
    this.farm.potatoes.total--;
    this.health = 0;
  }

  plantPotato(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}
export default Potato;
