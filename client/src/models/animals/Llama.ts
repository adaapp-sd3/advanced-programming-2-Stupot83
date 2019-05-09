import Animal from "../abstract/Animal"
import Farm from "../Farm";

class Llama extends Animal {
  name: string = "Llama"
  genus: string = "Llamas"
  imgUrl: string = "/img/twtr/1f426.png"
  eats: string = "straw"
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
      this.farm.llamas.objects.pop(0)
      this.farm.llamas.total -= 1
    }
  }

  // if ostrich is thin, yield less ostrich
  yieldLlama() {
    this.farm.llama.total += this.hunger > 0 ? 100 / this.hunger : 120
    this.health = 0
  }

  eatStraw() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.straw.total > 0) {
        this.farm.straw.total--
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
    return "Berrr"
  }

  public draw(): any {

    this.constrainItem()
    this.checkHealth()
    this.doSomethingOccasionally(() => this.eatStraw())
    this.stopForFarmer()

  }
}

export default Llama