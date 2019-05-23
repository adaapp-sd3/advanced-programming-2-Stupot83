import Animal from "../abstract/Animal";
import Farm from "../Farm";

class Crocodile extends Animal {
  name: string = "Crocodile";
  genus: string = "Crocodiles";
  imgUrl: string = "/img/twtr/1f40a.png";
  eats: string = "fish";
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }

  healthStatus() {
    if (this.health <= 0) {
      this.farm.crocodiles.objects.pop(0);
      this.farm.crocodiles.total -= 1;
    }
  }

  yieldCrocEggs() {
    let amountOfEggsToYield = 5 - this.hunger;
    this.farm.crocEggs.total += Math.abs(amountOfEggsToYield);
    this.hunger += 1;
  }

  yieldCrocodile() {
    this.farm.crocodile.total += 750;
    this.farm.usedCrocodile.total -=1;
    this.health = 0;
  }

  eatFish() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.fish.total > 0) {
        this.farm.fish.total--;
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
    return "Rarrr";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatFish());
    this.stopForFarmer();
    this.healthStatus();
  }

  placeCrocodile(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}

export default Crocodile;
