import Drawable from "./abstract/Drawable";
import Farmer from "./Farmer";

class Market extends Drawable {
  imgUrl = "/img/twtr/market.png";
  currentFarmer!: Farmer;

  pricePerCow: number = 1000;
  pricePerSheep: number = 90;
  pricePerChicken: number = 50;
  pricePerPig: number = 130;
  pricePerCrocodile: number = 1100;
  pricePerOstrich: number = 2500;
  pricePerSalmon: number = 150;
  pricePerDuck: number = 50;
  pricePerGoose: number = 50;
  pricePerLlama: number = 700;

  cabbagePrice: number = 2;
  carrotPrice: number = 0.50;
  kalePrice: number = 2;
  lettucePrice: number = 0.35;
  peaPrice: number = 1;
  potatoPrice: number = 2;
  pumpkinPrice: number = 2;
  rapeseedPrice: number = 0.50;
  sugarbeetPrice: number = 0.50;
  wheatPrice: number = 0.50;

  cabbageSeedPrice: number = 1;
  carrotSeedPrice: number = 1;
  kaleSeedPrice: number = 1;
  lettuceSeedPrice: number = 1;
  peaSeedPrice: number = 1;
  potatoSeedPrice: number = 1;
  pumpkinSeedPrice: number = 1;
  rapeseedSeedPrice: number = 1;
  sugarbeetSeedPrice: number = 1;
  wheatSeedPrice: number = 1;

  strawPrice: number = 4;
  cornPrice: number = 0.50;
  fishPrice: number = 12;
  fishFoodPrice: number = 2.50;
  grassSeedPrice: number = 10;

  gasGeneratorPrice: number = 6000;
  solarPanelPrice: number = 6000;

  beefPrice: number = 35;
  lambPrice: number = 7.50;
  chickenPrice: number = 5.50;
  porkPrice: number = 6.50;
  crocodilePrice: number = 38;
  ostrichPrice: number = 45;
  salmonPrice: number = 35;
  duckPrice: number = 6;
  goosePrice: number = 6;
  llamaPrice: number = 25;

  milkPrice: number = 0.50;
  eggsPrice: number = 3;
  crocEggsPrice: number = 40;
  ostrichEggsPrice: number = 30;
  duckEggsPrice: number = 3;
  gooseEggsPrice: number = 3;

  woolPrice: number = 3;
  llamaWoolPrice: number = 8;
  greenGasPrice: number = 700;
  solarPowerPrice: number = 700;
  gasGeneratorResalePrice: number = 3000;
  solarPanelResalePrice: number = 3000;

  constructor() {
    super();
    this.x = 1000;
    this.y = 275;
    this.width = 60;
    this.height = 60;
  }

  set farmer(farmer: Farmer) {
    this.currentFarmer = farmer;
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl);
  }

  public draw() {
    this.p5.image(this.p5Img, this.x, this.y, this.width, this.height);
  }
}

export default Market;
