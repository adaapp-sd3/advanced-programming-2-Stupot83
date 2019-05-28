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

  checkGasGeneratorHealth() {
    if (this.health <= 2 && this.health > 0) {
      alert("Your Gas Generators are almost exhausted, collect more green gas to wear them out permanently or consider recycling them");
    }
    return this.health;
  }

  yieldGreenGas() {
    let amountOfGreenGasToYield = 5 - this.health;
    this.farm.greenGas.total += Math.abs(amountOfGreenGasToYield);
    this.health -=1;
    if ((this.health <= 0) && (this.farm.gasGenerator.total !== 0)) {
      this.farm.gasGenerators.total += 1;
      this.farm.gasGenerator.total -= 1;
      this.health = 0;
    }
  }

  yieldGasGenerator() {
    this.farm.gasGenerators.total +=1;
    this.farm.gasGenerator.total -=1;
    this.health = 0;
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl);
    console.log(this.p5Img);
  }

  public draw(): any {
    this.constrainItem();
    this.farmerExamine();
  }

  placeGasGenerator(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}

export default GasGenerator;
