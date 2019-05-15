import ConstrainedByField from './ConstrainedByField';

abstract class Animal extends ConstrainedByField {
  abstract makeSound(): void;
  height = 16;
  width = 16;
  health: number = 10;
  hunger: number = 0;
  move(): string {
    return "roaming the earth...";
  }

  doSomethingOccasionally(doThis: Function) {
    if (Math.floor((this.p5.millis() * 1000) % 100) === 0) {
      doThis();
      this.velocityX = Math.random() >= 0.5 ? -0.1 : 0.1;
      this.velocityY = Math.random() >= 0.5 ? -0.1 : 0.1;
      let chanceOfStayingStill = Math.random();
      this.velocityX = chanceOfStayingStill >= 0.1 ? 0 : this.velocityX;
      this.velocityY = chanceOfStayingStill >= 0.1 ? 0 : this.velocityY;
    }
  }

  stopForFarmer() {
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



export default Animal;
