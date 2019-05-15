import Crop from '../abstract/Crop';
import Farm from "../Farm";

class Wheat extends Crop {
  name: string = "Wheat";
  genus: string = "Wheats";
  imgUrl: string = "/img/twtr/wheat.png";
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
export default Wheat;