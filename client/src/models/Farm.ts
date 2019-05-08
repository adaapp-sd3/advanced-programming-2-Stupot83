import Drawable from "./abstract/Drawable"
import Field from "./Field"
import Cow from "./animals/Cow"
import Chicken from "./animals/Chicken"
import Sheep from "./animals/Sheep"

class Farm extends Drawable {
  fields: Field[] = []
  width: number = 1000
  height: number = 1000
  cows: any
  beef: any
  sheep: any
  lamb: any
  chickens: any
  chicken: any
  straw: any
  corn: any
  milk: any
  wool: any
  eggs: any
  seeds: any
  greenGas: any
  solarPanels: any

  constructor(
    cows: any = {
      name: "Cows",
      total: 42,
      objects: []
    },
    beef: any = {
      name: "Beef",
      total: 0,
      unit: "kg"
    },
    milk: any = {
      name: "Milk",
      total: 0,
      unit: "pints"
    },
    sheep: any = {
      name: "Sheep",
      total: 42,
      objects: []
    },
    lamb: any = {
      name: "Lamb",
      total: 0,
      unit: "kg"
    },
    wool: any = {
      name: "Wool",
      total: 0,
      unit: "bales"
    },
    chickens: any = {
      name: "Chickens",
      total: 42,
      objects: []
    },
    chicken: any = {
      name: "Chicken",
      total: 0,
      unit: "kg"
    },
    eggs: any = {
      name: "Eggs",
      total: 0,
      unit: "boxes"
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
    seeds: any = {
      name: "Grass seeds",
      total: 0,
      unit: "packets"
    },
    greenGas: any = {
      name: "Green Gas",
      total: 0,
      unit: "ltrs"
    },
    solarPanels: any = {
      name: "Solar Panels",
      total: 0,
      unit: "panels"
    }

  ) {
    super()
    this.cows = cows
    this.beef = beef
    this.milk = milk
    this.sheep = sheep
    this.lamb = lamb
    this.wool = wool
    this.chickens = chickens
    this.chicken = chicken
    this.eggs = eggs
    this.straw = straw
    this.corn = corn
    this.seeds = seeds
    this.greenGas = greenGas
    this.solarPanels = solarPanels
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
      this.sheep.objects.push(sheep)
    }

    this.fields.push(
      new Field(
        secondFieldX,
        secondFieldY,
        secondFieldW,
        secondFieldH,
        this.sheep.objects
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
