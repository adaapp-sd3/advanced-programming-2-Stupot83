import Animal from "../abstract/Animal";
import Farm from "../Farm";

class Ostrich extends Animal {
  name: string = "Ostrich";
  genus: string = "Ostriches";
  imgUrl: string = "/img/twtr/1f426.png";
  eats: string = "seeds";
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }


  yieldOstrichEggs() {
    let amountOfEggsToYield = 5 - this.hunger;
    this.farm.ostrichEggs.total += Math.abs(amountOfEggsToYield);
    this.hunger += 1;
  }

  yieldOstrich() {
    this.farm.ostrich.total += 100;
    this.farm.usedOstrich.total -=1;
    this.health = 0;
  }

  eatSeeds() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.seeds.total > 0) {
        this.farm.seeds.total--;
        this.hunger = this.hunger - 1;
      } else {
        if (this.hunger < 5) {
          this.hunger = this.hunger + 1;
        }
      }
    }
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl);
    console.log(this.p5Img);
  }

  makeSound() {
    return "Boom";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatSeeds());
    this.stopForFarmer();
  }

  placeOstrich(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}

export default Ostrich;
