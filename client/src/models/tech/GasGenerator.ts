import Tech from "../abstract/Tech";
import Farm from "../Farm";

class GasGenerator extends Tech {
  name: string = "GasGenerator";
  genus: string = "GasGenerators";
  imgUrl: string = "/img/twtr/gasgenerator.png";
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }

  checkWear() {
    if (this.health <= 0) {
      this.farm.gasGenerators.objects.pop();
      this.farm.gasGenerators.total -= 1;
    }
  }

  yieldGreenGas() {
    let amountOfGreenGasToYield = 5 - this.hunger;
    this.farm.greenGas.total += Math.abs(amountOfGreenGasToYield);
    this.hunger += 1;
  }

  yieldGasGenerator() {
    this.farm.gasGenerator.total = this.farm.gasGenerators.total;
    this.health = 0;
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl);
    console.log(this.p5Img);
  }

  public draw(): any {
    this.constrainItem();
    this.farmerExamine();
    this.checkWear();
  }
}

export default GasGenerator;
