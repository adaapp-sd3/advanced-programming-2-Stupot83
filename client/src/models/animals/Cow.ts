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

  checkCowHealth() {
    if (this.health <= 2 && this.health > 0) {
      alert("Your cows are hungry, tired and overworked please refrain until they have been fed else they could die");
    }
    return this.health;
  }

  maxHealth() {
    if(this.health >= 10) {
      this.health = 10
    }
  }

  yieldMilk() {
    let amountOfMilkToYield = 5 - this.hunger;
    this.farm.milk.total += Math.abs(amountOfMilkToYield);
    this.hunger += 1;
    if (this.health > 0) {
      this.health -= 1;
    }
    if ((this.health <= 0) && (this.farm.usedCow.total !== 0)) {
      this.farm.beef.total += 750;
      this.farm.usedCow.total -= 1;
      this.health = 0;
    }
  }

  yieldBeef() {
    if(this.farm.usedCow.total !== 0) {
    this.farm.beef.total += 750;
    this.farm.usedCow.total -= 1;
    this.health = 0;
  }
}

  eatStraw() {
    if (this.hunger >= 5) {
      if ((this.farm.straw.total) > 0 && (this.health !== 10)) {
        this.farm.straw.total--;
        this.hunger = this.hunger - 1;
        this.health = this.health + 1;
      } else if ((this.farm.straw.total === 0) && (this.health !== 0) && (this.health !== 10)) {
          this.hunger = this.hunger + 0.01
          this.health = this.health - 0.01
        }
    }
      if (this.hunger < 5) {
        if ((this.farm.straw.total) > 0 && (this.health !== 10)) {
          this.farm.straw.total -= 0.1;
          this.health = this.health + 0.1;
          this.hunger = this.hunger = 0;
        } else if ((this.farm.straw.total === 0) && (this.health !== 0) && (this.health !== 10) ) {
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
    return "Moooo";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatStraw());
    this.stopForFarmer();
    this.maxHealth();
  }

  placeCow(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}

export default Cow;
