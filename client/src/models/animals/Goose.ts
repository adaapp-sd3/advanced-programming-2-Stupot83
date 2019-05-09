import Animal from "../abstract/Animal"
import Farm from "../Farm";

class Goose extends Animal {
  name: string = "Goose"
  genus: string = "Geese"
  imgUrl: string = "/img/twtr/1f999.png"
  eats: string = "corn"
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
      this.farm.geese.objects.pop(0)
      this.farm.geese.total -= 1
    }
  }

  // if ostrich is hungry, yield less eggs
  yieldGooseEggs() {
    let amountOfEggsToYield = 5 - this.hunger
    this.farm.gooseEggs.total += Math.abs(amountOfEggsToYield)
    this.hunger = 5
  }

  // if ostrich is thin, yield less ostrich
  yieldGoose() {
    this.farm.goose.total += this.hunger > 0 ? 100 / this.hunger : 120
    this.health = 0
  }

  eatCorn() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.corn.total > 0) {
        this.farm.corn.total--
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
    return "Bwark"
  }

  public draw(): any {

    this.constrainItem()
    this.checkHealth()
    this.doSomethingOccasionally(() => this.eatCorn())
    this.stopForFarmer()

  }
}

export default Goose