import Animal from "../abstract/Animal";
import Farm from "../Farm";

class Pig extends Animal {
  name: string = "Pig";
  genus: string = "Pigs";
  imgUrl: string = "/img/twtr/1f416.png";
  eats: string = "corn";
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

  yieldPork() {
    if(this.farm.usedPig.total !== 0) {
    this.farm.pork.total += 80;
    this.farm.usedPig.total -= 1;
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
    return "Oink";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatCorn());
    this.stopForFarmer();
    this.maxHealth();
  }

  placePig(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}

export default Pig;
