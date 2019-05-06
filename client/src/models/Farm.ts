import Drawable from "./abstract/Drawable"
import Field from "./Field"
import Cow from "./animals/Cow"
import Chicken from "./animals/Chicken"
import Sheep from "./animals/Sheep"

class Farm extends Drawable {
  fields: Field[] = []
  width: number = 1000
  height: number = 710
  cows: any
  sheeps: any
  chickens: any
  straw: any
  corn: any
  milk: any
  wool: any
  eggs: any
  seeds: any
  constructor(
    cows: any = {
      name: "Cows",
      total: 42,
      objects: []
    },
    sheeps: any = {
      name: "Sheep",
      total: 42,
      objects: []
    },
    chickens: any = {
      name: "Chickens",
      total: 42,
      objects: []
    },
    straw: any = {
      name: "Straw",
      total: 1000,
      unit: "bales"
    },
    corn: any = {
      name: "Corn",
      total: 1000,
      unit: "bags"
    },
    wool: any = {
      name: "Wool",
      total: 0,
      unit: "bales"
    },
    eggs: any = {
      name: "Eggs",
      total: 0,
      unit: "boxes"
    },
    milk: any = {
      name: "Milk",
      total: 0,
      unit: "pints"
    },
    seeds: any = {
      name: "Grass seeds",
      total: 0,
      unit: "bunches"
    }
  ) {
    super()
    this.cows = cows
    this.sheeps = sheeps
    this.chickens = chickens
    this.straw = straw
    this.corn = corn
    this.wool = wool
    this.eggs = eggs
    this.milk = milk
    this.seeds = seeds
  }

  public preload() {
    this.createBasicFarm()
  }

  private createBasicFarm = () => {
    let firstFieldX = 25
    let firstFieldY = 25
    let firstFieldW = 350
    let firstFieldH = 175

    for (let i = 0; i < this.cows.total; i++) {
      let cow = new Cow(this)
      cow.p5 = this.p5
      cow.preload()
      cow.setRandomPositionInField(
        firstFieldX,
        firstFieldY,
        firstFieldW,
        firstFieldH
      )
      this.cows.objects.push(cow)
    }

    this.fields.push(
      new Field(
        firstFieldX,
        firstFieldY,
        firstFieldW,
        firstFieldH,
        this.cows.objects
      )
    )

    let secondFieldX = 25
    let secondFieldY = 275
    let secondFieldW = 350
    let secondFieldH = 125

    for (let i = 0; i < this.cows.total; i++) {
      let sheep = new Sheep(this)
      sheep.p5 = this.p5
      sheep.preload()
      sheep.setRandomPositionInField(
        secondFieldX,
        secondFieldY,
        secondFieldW,
        secondFieldH
      )
      this.sheeps.objects.push(sheep)
    }

    this.fields.push(
      new Field(
        secondFieldX,
        secondFieldY,
        secondFieldW,
        secondFieldH,
        this.sheeps.objects
      )
    )

    let thirdFieldX = 25
    let thirdFieldY = 450
    let thirdFieldW = 300
    let thirdFieldH = 125

    for (let i = 0; i < this.chickens.total; i++) {
      let chicken = new Chicken(this)
      chicken.p5 = this.p5
      chicken.preload()
      chicken.setRandomPositionInField(
        thirdFieldX,
        thirdFieldY,
        thirdFieldW,
        thirdFieldH
      )
      this.chickens.objects.push(chicken)
    }

    this.fields.push(
      new Field(
        thirdFieldX,
        thirdFieldY,
        thirdFieldW,
        thirdFieldH,
        this.chickens.objects
      )
    )

    this.fields.push(new Field(475, 25, 200, 325))
    
    for (let field of this.fields) {
      field.p5 = this.p5
      field.setHandleUpdate = this.updateUI
    }
  }

  public draw() {
    for (let field of this.fields) {
      field.draw()
    }
  }
}

export default Farm
