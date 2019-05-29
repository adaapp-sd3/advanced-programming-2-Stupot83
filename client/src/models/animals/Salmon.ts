import Animal from "../abstract/Animal";
import Farm from "../Farm";

class Salmon extends Animal {
  name: string = "Salmon";
  genus: string = "Salmons";
  imgUrl: string = "/img/twtr/1f41f.png";
  eats: string = "fishFood";
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }

  maxHealth() {
    if(this.health >= 10) {
      this.health = 10
    }
  }

  yieldSalmon() {
    if(this.farm.usedSalmon.total !== 0) {
    this.farm.salmon.total += 26;
    this.farm.usedSalmon.total -= 1;
    this.health = 0;
  }
}

eatFishFood() {
  if (this.hunger >= 5) {
    if ((this.farm.fishFood.total) > 0 && (this.health !== 10)) {
      this.farm.fishFood.total--;
      this.hunger = this.hunger - 1;
      this.health = this.health + 1;
    } else if ((this.farm.fishFood.total === 0) && (this.health !== 0) && (this.health !== 10)) {
        this.hunger = this.hunger + 0.01
        this.health = this.health - 0.01
      }
  }
    if (this.hunger < 5) {
      if ((this.farm.fishFood.total) > 0 && (this.health !== 10)) {
        this.farm.fishFood.total -= 0.1;
        this.health = this.health + 0.1;
        this.hunger = this.hunger = 0;
      } else if ((this.farm.fishFood.total === 0) && (this.health !== 0) && (this.health !== 10)) {
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
    return "blobblobblobblob";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatFishFood());
    this.stopForFarmer();
    this.maxHealth();
  }

  placeSalmon(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}

export default Salmon;
