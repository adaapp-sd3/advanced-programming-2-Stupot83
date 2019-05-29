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

  checkGooseHealth() {
    if (this.health <= 2 && this.health > 0) {
      alert("Your geese are hungry, tired and overworked please refrain until they have been fed else they could die");
    }
    return this.health;
  }

  maxHealth() {
    if(this.health >= 10) {
      this.health = 10
    }
  }

  yieldGooseEggs() {
    let amountOfGooseEggsToYield = 5 - this.hunger;
    this.farm.gooseEggs.total += Math.abs(amountOfGooseEggsToYield);
    this.hunger += 1;
    if (this.health > 0) {
      this.health -= 1;
    }
    if ((this.health <= 0) && (this.farm.usedGoose.total !== 0)) {
      this.farm.goose.total += 2;
      this.farm.usedGoose.total -= 1;
      this.health = 0;
    }
  }

  yieldGoose() {
    if(this.farm.usedGoose.total !== 0) {
    this.farm.goose.total += 2;
    this.farm.usedGoose.total -= 1;
    this.health = 0;
  }
}

  eatCorn() {
    if (this.hunger >= 5) {
      if ((this.farm.corn.total) > 0 && (this.health !== 10)) {
        this.farm.corn.total--;
        this.hunger = this.hunger - 1;
        this.health = this.health + 1;
      } else if ((this.farm.corn.total === 0) && (this.health !== 0) && (this.health !== 10)) {
          this.hunger = this.hunger + 0.01
          this.health = this.health - 0.01
        }
    }
      if (this.hunger < 5) {
        if ((this.farm.corn.total) > 0 && (this.health !== 10)) {
          this.farm.corn.total -= 0.1;
          this.health = this.health + 0.1;
          this.hunger = this.hunger = 0;
        } else if ((this.farm.corn.total === 0) && (this.health !== 0) && (this.health !== 10)) {
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
    return "Honk";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatCorn());
    this.stopForFarmer();
    this.maxHealth();
  }

  placeGoose(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}

export default Goose;
