import Animal from "../abstract/Animal";
import Farm from "../Farm";

class Cow extends Animal {
  name: string = "Cow";
  genus: string = "Cows";
  imgUrl: string = "img/twtr/1f404.png";
  eats: string = "straw";
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }

  yieldMilk() {
    let amountOfMilkToYield = 5;
    this.farm.milk.total += amountOfMilkToYield;
    this.hunger += 1;
  }

  yieldBeef() {
    this.farm.beef.total += 750;
    this.farm.usedCow.total -= 1;
    this.health = 0;
  }

  eatStraw() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.straw.total > 0) {
        this.farm.straw.total--;
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
    return "Moooo";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatStraw());
    this.stopForFarmer();
  }

  placeCow(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}

export default Cow;
