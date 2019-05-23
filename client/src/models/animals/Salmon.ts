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

  checkHealth() {
    if (this.hunger >= 5) {
      this.health -= 1;
    }
    if (this.health <= 0) {
      this.farm.salmons.objects.pop();
      this.farm.salmons.total -= 1;
    }
  }

  yieldSalmon() {
    this.farm.salmon.total += 750;
    this.farm.usedSalmon.total -=1;
    this.health = 0;
  }

  eatFishFood() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.fishFood.total > 0) {
        this.farm.fishFood.total--;
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
    return "blobblobblobblob";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatFishFood());
    this.stopForFarmer();
    this.checkHealth();
  }

  placeSalmon(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}

export default Salmon;
