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

  checkCrocodileHealth() {
    if (this.health <= 2 && this.health > 0) {
      alert("Your crocodiles are hungry, tired and overworked please refrain until they have been fed else they could die");
    }
    return this.health;
  }

  yieldCrocEggs() {
    let amountOfCrocEggsToYield = 5 - this.hunger;
    this.farm.crocEggs.total += Math.abs(amountOfCrocEggsToYield);
    this.hunger += 1;
    if (this.health > 0) {
      this.health -= 1;
    }
    if ((this.health <= 0) && (this.farm.usedCrocodile.total !== 0)) {
      this.farm.crocodile.total += 750;
      this.farm.usedCrocodile.total -= 1;
      this.health = 0;
    }
  }

  yieldCrocodile() {
    if(this.farm.usedCrocodile.total !== 0) {
    this.farm.crocodile.total += 750;
    this.farm.usedCrocodile.total -= 1;
    this.health = 0;
  }
}

  eatFish() {
    if (this.hunger >= 5) {
      if ((this.farm.fish.total) > 0 && (this.health !== 10)) {
        this.farm.fish.total--;
        this.hunger = this.hunger - 1;
        this.health = this.health + 1;
      } else if ((this.farm.straw.total === 0) && (this.health !== 0) && (this.health !== 10)) {
          this.hunger = this.hunger + 0.01
          this.health = this.health - 0.01
        }
    }
      if (this.hunger < 5) {
        if ((this.farm.fish.total) > 0 && (this.health !== 10)) {
          this.farm.fish.total -= 0.1;
          this.health = this.health + 0.1;
          this.hunger = this.hunger = 0;
        } else if ((this.farm.straw.total === 0) && (this.health !== 0) && (this.health !== 10)) {
            this.hunger = this.hunger + 0.01;
            this.health = this.health - 0.01;
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
  }

  placeCrocodile(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}

export default Crocodile;
