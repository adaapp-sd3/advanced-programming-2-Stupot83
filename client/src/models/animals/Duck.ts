import Animal from "../abstract/Animal";
import Farm from "../Farm";

class Duck extends Animal {
  name: string = "Duck";
  genus: string = "Ducks";
  imgUrl: string = "/img/twtr/1f986.png";
  eats: string = "corn";
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
      this.farm.ducks.objects.pop(0);
      this.farm.ducks.total -= 1;
    }
  }

  yieldDuckEggs() {
    let amountOfEggsToYield = 5 - this.hunger;
    this.farm.duckEggs.total += Math.abs(amountOfEggsToYield);
    this.hunger += 1;
  }

  yieldDuck() {
    this.farm.duck.total += this.hunger > 0 ? 100 / this.hunger : 120;
    this.health = 0;
  }

  eatCorn() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.corn.total > 0) {
        this.farm.corn.total--;
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
    return "Quack";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatCorn());
    this.stopForFarmer();
    this.checkHealth();
  }
}

export default Duck;
