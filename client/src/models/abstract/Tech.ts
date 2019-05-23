import ConstrainedByField from "./ConstrainedByField";

abstract class Tech extends ConstrainedByField {
  height = 16;
  width = 16;
  health: number = 10;

  farmerExamine() {
    let x;
    let y;
    if (this.isFarmerPresent) {
      this.width = 24;
      x = this.x;
      y = this.y;
      this.height = 24;
      this.showUI = true;
    } else {
      this.width = 16;
      this.height = 16;
      this.showUI = false;
      this.x += this.velocityX;
      this.y += this.velocityY;
      x = this.x;
      y = this.y;
    }
    this.p5.image(this.p5Img, x, y, this.width, this.height);
  }
}

export default Tech;
