import Animal from "../abstract/Animal";
import Farm from "../Farm";

class Sheep extends Animal {
  name: string = "Sheep";
  genus: string = "sheep";
  imgUrl: string = "img/twtr/1f411.png";
  eats: string = "straw";
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }

  checkSheepHealth() {
    if (this.health <= 2 && this.health > 0) {
      alert("Your sheep are hungry, tired and overworked please refrain until they have been fed else they could die");
    }
    return this.health;
  }

  yieldWool() {
    let amountOfWoolToYield = 5 - this.hunger;
    this.farm.wool.total += Math.abs(amountOfWoolToYield);
    this.hunger += 1;
    if (this.health > 0) {
      this.health -= 1;
    }
    if ((this.health <= 0) && (this.farm.usedSheep.total !== 0)) {
      this.farm.lamb.total += 150;
      this.farm.usedSheep.total -= 1;
      this.health = 0;
    }
  }

  yieldLamb() {
    if(this.farm.usedSheep.total !== 0) {
    this.farm.lamb.total += 750;
    this.farm.usedSheep.total -= 1;
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
    return "Baaaa";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatStraw());
    this.stopForFarmer();
  }

  placeSheep(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}

export default Sheep;
