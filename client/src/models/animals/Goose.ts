import Animal from "../abstract/Animal";
import Farm from "../Farm";

class Goose extends Animal {
  name: string = "Goose";
  genus: string = "Geese";
  imgUrl: string = "/img/twtr/1f9a2.png";
  eats: string = "corn";
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }

  checkHealth() {
    if (this.hunger >= 5) {
      this.health -= 1;
    }
    if (this.health <= 0) {
      this.farm.geese.objects.pop(0);
      this.farm.geese.total -= 1;
    }
  }

  yieldGooseEggs() {
    let amountOfEggsToYield = 5 - this.hunger;
    this.farm.gooseEggs.total += Math.abs(amountOfEggsToYield);
    this.hunger += 1;
  }

  yieldGoose() {
    this.farm.goose.total += 750;
    this.farm.usedGoose.total -=1;
    this.health = 0;
  }

  eatCorn() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.corn.total > 0) {
        this.farm.corn.total--;
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
    return "Bwark";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatCorn());
    this.stopForFarmer();
    this.checkHealth();
  }

  placeGoose(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}

export default Goose;
