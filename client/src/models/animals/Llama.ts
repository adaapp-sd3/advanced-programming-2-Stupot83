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


  yieldLlamaWool() {
    let amountOfWoolToYield = 5 - this.hunger;
    this.farm.llamaWool.total += Math.abs(amountOfWoolToYield);
    this.hunger += 1;
  }

  yieldLlama() {
    this.farm.llama.total += 200;
    this.farm.usedLlama.total -=1;
    this.health = 0;
  }

  eatStraw() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.straw.total > 0) {
        this.farm.straw.total--;
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
    return "Berrr";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatStraw());
    this.stopForFarmer();
  }

  placeLlama(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}

export default Llama;
