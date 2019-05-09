import Animal from "../abstract/Animal"
import Farm from "../Farm";
class Ostrich extends Animal {
  name: string = "Ostrich"
  genus: string = "Ostriches"
  imgUrl: string = "/img/twtr/1f426.png"
  eats: string = "seeds"
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
      this.farm.ostriches.objects.pop(0)
      this.farm.ostriches.total -= 1
    }
  }

  // if ostrich is hungry, yield less eggs
  yieldOstrichEggs() {
    let amountOfEggsToYield = 5 - this.hunger
    this.farm.ostrichEggs.total += Math.abs(amountOfEggsToYield)
    this.hunger = 5
  }

  // if ostrich is thin, yield less ostrich
  yieldOstrich() {
    this.farm.ostrich.total += this.hunger > 0 ? 100 / this.hunger : 120
    this.health = 0
  }

  eatSeeds() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.seeds.total > 0) {
        this.farm.seeds.total--
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
    return "Boom"
  }

  public draw(): any {

    this.constrainItem()
    this.checkHealth()
    this.doSomethingOccasionally(() => this.eatSeeds())
    this.stopForFarmer()

  }
}

export default Ostrich