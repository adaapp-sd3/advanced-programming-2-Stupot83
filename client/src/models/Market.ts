import Drawable from "./abstract/Drawable"
import Farmer from './Farmer';
import Animal from "./abstract/Animal";

class Market extends Drawable {
  imgUrl = "/img/twtr/1f3e2.png"
  currentFarmer!: Farmer
  
  greenGasDemand: number = 100
  milkDemand: number = 75
  beefDemand: number = 75

  pricePerCow: number = 60
  pricePerSheep: number = 40
  pricePerChicken: number = 20
  pricePerPig: number = 80
  pricePerCrocodile: number = 100
  pricePerOstrich: number = 60
  pricePerSalmon: number = 40

  strawPrice: number = 100
  cornPrice: number = 100
  fishPrice: number = 100
  fishFoodPrice: number = 100
  grassSeedPrice: number = 100

  greenGasPrice: number = 10
  solarPanelPrice: number = 10000

  beefPrice: number = 25
  lambPrice: number = 25
  chickenPrice: number = 25
  porkPrice: number = 25
  crocodilePrice: number = 25
  ostrichPrice: number = 25
  salmonPrice: number = 25

  milkPrice: number = 100
  eggsPrice: number = 100
  crocEggsPrice: number = 100
  ostrichEggsPrice: number = 100

  woolPrice: number = 100
  greenGasResalePrice: number = 5
  solarPanelResalePrice: number = 50

  constructor() {
    super()
    this.x = 600
    this.y = 500
    this.width = 60
    this.height = 60
  }

  set farmer(farmer: Farmer) {
    this.currentFarmer = farmer
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl)
  }

  public draw() {
    this.p5.image(this.p5Img, this.x, this.y, this.width, this.height)
  }
}

export default Market
