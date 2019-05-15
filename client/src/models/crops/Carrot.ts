import Crop from '../abstract/Crop';
import Farm from "../Farm";

class Carrot extends Crop {
  name: string = "Carrot";
  genus: string = "Carrots";
  imgUrl: string = "/img/twtr/carrot.png";
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
export default Carrot;