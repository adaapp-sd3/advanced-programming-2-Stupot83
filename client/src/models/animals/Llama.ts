import Animal from "../abstract/Animal";
import Farm from "../Farm";

class Llama extends Animal {
  name: string = "Llama";
  genus: string = "Llamas";
  imgUrl: string = "/img/twtr/1f999.png";
  eats: string = "straw";
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }

  checkLlamaHealth() {
    if (this.health <= 2 && this.health > 0) {
      alert("Your llamas are hungry, tired and overworked please refrain until they have been fed else they could die");
    }
    return this.health;
  }

  maxHealth() {
    if(this.health >= 10) {
      this.health = 10
    }
  }

  yieldLlamaWool() {
    let amountOfLlamaWoolToYield = 5 - this.hunger;
    this.farm.llamaWool.total += Math.abs(amountOfLlamaWoolToYield);
    this.hunger += 1;
    if (this.health > 0) {
      this.health -= 1;
    }
    if ((this.health <= 0) && (this.farm.usedLlama.total !== 0)) {
      this.farm.llama.total += 200;
      this.farm.usedLlama.total -= 1;
      this.health = 0;
    }
  }

  yieldLlama() {
    if(this.farm.usedLlama.total !== 0) {
    this.farm.llama.total += 200;
    this.farm.usedLlama.total -= 1;
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
    return "Berrr";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatStraw());
    this.stopForFarmer();
    this.maxHealth();
  }

  placeLlama(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}

export default Llama;
