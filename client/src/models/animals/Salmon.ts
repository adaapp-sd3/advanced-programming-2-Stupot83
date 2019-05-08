import Animal from "../abstract/Animal"
import Farm from "../Farm";
class Salmon extends Animal {
  name: string = "Salmon"
  genus: string = "Salmons"
  imgUrl: string = "/img/twtr/1f41f.png"
  eats: string = "fishFood"
  hunger: number = 0
  farm: Farm
  
  constructor(farm: Farm) {
    super()
    this.farm = farm
  }

  checkHealth(){
    if(this.hunger >= 5){
        this.health -= 1
    }
    if(this.health <= 0){
      this.farm.salmons.objects.pop()
      this.farm.salmons.total -= 1
    }
  }

  // if salmon is thin, yield less salmon
  yieldSalmon() {
    this.farm.salmon.total += this.hunger > 0 ? 100 / this.hunger : 120
    this.health = 0
  }

  eatFishFood() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.fishFood.total > 0) {
        this.farm.fishFood.total--
        this.hunger = this.hunger - 1
      } else {
        if (this.hunger < 5) {
          this.hunger = this.hunger + 1
        } 
        
      }
    } 
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl)
    console.log(this.p5Img)
  }

  makeSound() {
    return "blobblobblobblob"
  }

  public draw(): any {

    this.constrainItem()
    this.checkHealth()
    this.doSomethingOccasionally(() => this.eatFishFood())
    this.stopForFarmer()

  }
}

export default Salmon