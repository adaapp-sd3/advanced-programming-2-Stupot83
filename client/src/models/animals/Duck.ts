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

  checkDuckHealth() {
    if (this.health <= 2 && this.health > 0) {
      alert("Your ducks are hungry, tired and overworked please refrain until they have been fed else they could die");
    }
    return this.health;
  }

  maxHealth() {
    if(this.health >= 10) {
      this.health = 10
    }
  }

  yieldDuckEggs() {
    let amountOfDuckEggsToYield = 5 - this.hunger;
    this.farm.duckEggs.total += Math.abs(amountOfDuckEggsToYield);
    this.hunger += 1;
    if (this.health > 0) {
      this.health -= 1;
    }
    if ((this.health <= 0) && (this.farm.usedDuck.total !== 0)) {
      this.farm.duck.total += 2;
      this.farm.usedDuck.total -= 1;
      this.health = 0;
    }
  }

  yieldDuck() {
    if(this.farm.usedDuck.total !== 0) {
    this.farm.duck.total += 2;
    this.farm.usedDuck.total -= 1;
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
    return "Quack";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatCorn());
    this.stopForFarmer();
    this.maxHealth();
  }

  placeDuck(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}

export default Duck;
