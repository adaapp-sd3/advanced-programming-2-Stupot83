import Animal from "../abstract/Animal";
import Farm from "../Farm";

class Chicken extends Animal {
  name: string = "Chicken";
  genus: string = "Chickens";
  imgUrl: string = "/img/twtr/1f414.png";
  eats: string = "corn";
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }

  checkChickenHealth() {
    if (this.health <= 2 && this.health > 0) {
      alert("Your chickens are hungry, tired and overworked please refrain until they have been fed else they could die");
    }
    return this.health;
  }

  yieldEggs() {
    let amountOfEggsToYield = 5 - this.hunger;
    this.farm.eggs.total += Math.abs(amountOfEggsToYield);
    this.hunger += 1;
    if (this.health > 0) {
      this.health -= 1;
    }
    if ((this.health <= 0) && (this.farm.usedChicken.total !== 0)) {
      this.farm.chicken.total += 2;
      this.farm.usedChicken.total -= 1;
      this.health = 0;
    }
  }

  yieldChicken() {
    if(this.farm.usedChicken.total !== 0) {
    this.farm.chicken.total += 2;
    this.farm.usedChicken.total -= 1;
    this.health = 0;
  }
}

  eatCorn() {
    if (this.hunger >= 5) {
      if ((this.farm.corn.total) > 0 && (this.health !== 10)) {
        this.farm.corn.total--;
        this.hunger = this.hunger - 1;
        this.health = this.health + 1;
      } else if ((this.farm.straw.total === 0) && (this.health !== 0) && (this.health !== 10)) {
          this.hunger = this.hunger + 0.01
          this.health = this.health - 0.01
        }
    }
      if (this.hunger < 5) {
        if ((this.farm.corn.total) > 0 && (this.health !== 10)) {
          this.farm.corn.total -= 0.1;
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
    return "Bwark";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatCorn());
    this.stopForFarmer();
  }

  placeChicken(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}

export default Chicken;
