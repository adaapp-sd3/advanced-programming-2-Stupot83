import Animal from "../abstract/Animal"
import Farm from "../Farm";

class Crocodile extends Animal {
  name: string = "Crocodile"
  genus: string = "Crocodiles"
  imgUrl: string = "/img/twtr/1f40a.png"
  eats: string = "fish"
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
      this.farm.crocodiles.objects.pop()
      this.farm.crocodiles.total -= 1
    }
  }

  // if crocodile is hungry, yield less eggs
  yieldCrocEggs() {
    let amountOfEggsToYield = 5 - this.hunger
    this.farm.crocEggs.total += Math.abs(amountOfEggsToYield)
    this.hunger = 5
  }

  // if crocodile is thin, yield less crocodile
  yieldCrocodile() {
    this.farm.crocodile.total += this.hunger > 0 ? 100 / this.hunger : 120
    this.health = 0
  }

  eatFish() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.fish.total > 0) {
        this.farm.fish.total--
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
    return "Rarrr"
  }

  public draw(): any {

    this.constrainItem()
    this.checkHealth()
    this.doSomethingOccasionally(() => this.eatFish())
    this.stopForFarmer()

  }
}

export default Crocodile