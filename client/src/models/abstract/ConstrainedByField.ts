import Drawable from "./Drawable";

abstract class ConstrainedByField extends Drawable {
  fieldX!: number;
  fieldY!: number;
  fieldW!: number;
  fieldH!: number;
  velocityY: number = 0;
  velocityX: number = 0;
  bounceSpeed!: number;

  setRandomPositionInField(
    fieldX: number,
    fieldY: number,
    fieldW: number,
    fieldH: number
  ) {
    this.x = Math.floor(Math.random() * (fieldW - this.width)) + fieldX;
    this.y = Math.floor(Math.random() * (fieldH - this.height * 2)) + fieldY;
    this.fieldX = fieldX;
    this.fieldY = fieldY;
    this.fieldW = fieldW;
    this.fieldH = fieldH;
    this.bounceSpeed = 1;
  }

  constrainItem() {
    if (this.y - this.height + 6 >= this.fieldY + this.fieldH - this.height) {
      this.velocityY = -this.velocityY * this.bounceSpeed;
      this.y = this.fieldY + this.fieldH - this.height - 1;
    }

    if (this.y <= this.fieldY) {
      this.velocityY = -this.velocityY * this.bounceSpeed;
      this.y = this.fieldY + 1;
    }

    if (this.x <= this.fieldX) {
      this.velocityX = -this.velocityX * this.bounceSpeed;
      this.x = this.fieldX + 1;
    }

    if (this.x + this.width / 2 >= this.fieldW + this.fieldX) {
      this.velocityX = -this.velocityX * this.bounceSpeed;
      this.x = this.fieldW - this.width / 2 - 1;
    }
  }
}

export default ConstrainedByField;
