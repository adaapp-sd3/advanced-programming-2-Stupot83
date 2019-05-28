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

  checkOstrichHealth() {
    if (this.health <= 2 && this.health > 0) {
      alert("Your ostriches are hungry, tired and overworked please refrain until they have been fed else they could die");
    }
    return this.health;
  }

  yieldOstrichEggs() {
    let amountOfOstrichEggsToYield = 5 - this.hunger;
    this.farm.ostrichEggs.total += Math.abs(amountOfOstrichEggsToYield);
    this.hunger += 1;
    if (this.health > 0) {
      this.health -= 1;
    }
    if ((this.health <= 0) && (this.farm.usedOstrich.total !== 0)) {
      this.farm.ostrich.total += 100;
      this.farm.usedOstrich.total -= 1;
      this.health = 0;
    }
  }

  yieldOstrich() {
    if(this.farm.usedOstrich.total !== 0) {
    this.farm.ostrich.total += 100;
    this.farm.usedOstrich.total -= 1;
    this.health = 0;
  }
}

  eatSeeds() {
    if (this.hunger >= 5) {
      if ((this.farm.seeds.total) > 0 && (this.health !== 10)) {
        this.farm.seeds.total--;
        this.hunger = this.hunger - 1;
        this.health = this.health + 1;
      } else if ((this.farm.straw.total === 0) && (this.health !== 0) && (this.health !== 10)) {
          this.hunger = this.hunger + 0.01
          this.health = this.health - 0.01
        }
    }
      if (this.hunger < 5) {
        if ((this.farm.seeds.total) > 0 && (this.health !== 10)) {
          this.farm.seeds.total -= 0.1;
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
