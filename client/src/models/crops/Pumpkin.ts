import Crop from "../abstract/Crop";
import Farm from "../Farm";

class Pumpkin extends Crop {
  name: string = "Pumpkin";
  genus: string = "Pumpkins";
  imgUrl: string = "/img/twtr/pumpkin.png";
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl);
  }

  public draw(): any {
    this.constrainItem();
    this.farmerExamine();
  }
}
export default Pumpkin;
