import Drawable from "./abstract/Drawable"
import Field from "./Field"
import Cow from "./animals/Cow"
import Chicken from "./animals/Chicken"
import Sheep from "./animals/Sheep"
import Pig from "./animals/Pig"
import Crocodile from "./animals/Crocodile"
import Ostrich from "./animals/Ostrich"
import Salmon from "./animals/Salmon"

class Farm extends Drawable {
  fields: Field[] = []
  width: number = 1000
  height: number = 1000
  cows: any
  milk: any
  beef: any
  sheep: any
  lamb: any
  wool: any
  chickens: any
  chicken: any
  eggs: any
  pigs: any
  pork: any
  crocodiles: any
  crocodile: any
  crocEggs: any
  ostriches: any
  ostrich: any
  ostrichEggs: any
  salmons: any
  salmon: any
  straw: any
  corn: any
  fish: any
  fishFood: any
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
    pigs: any = {
      name: "Pigs",
      total: 0,
      objects: []
    },
    pork: any = {
      name: "Pork",
      total: 0,
      unit: "kg"
    },
    crocodiles: any = {
      name: "Crocodiles",
      total: 0,
      objects: []
    },
    crocodile: any = {
      name: "Crocodile",
      total: 0,
      unit: "kg"
    },
    crocEggs: any = {
      name: "crocEggs",
      total: 0,
      unit: "boxes"
    },
    ostriches: any = {
      name: "Ostriches",
      total: 0,
      objects: []
    },
    ostrich: any = {
      name: "Ostrich",
      total: 0,
      unit: "kg"
    },
    ostrichEggs: any = {
      name: "ostrichEggs",
      total: 0,
      unit: "boxes"
    },
    salmons: any = {
      name: "Salmons",
      total: 0,
      objects: []
    },
    salmon: any = {
      name: "Salmon",
      total: 0,
      unit: "kg"
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
    fish: any = {
      name: "Fish",
      total: 0,
      unit: "kg"
    },
    fishFood: any = {
      name: "fishFood",
      total: 0,
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
    this.pigs = pigs
    this.pork = pork
    this.crocodiles = crocodiles
    this.crocodile = crocodile
    this.crocEggs = crocEggs
    this.ostriches = ostriches
    this.ostrich = ostrich
    this.ostrichEggs = ostrichEggs
    this.salmons = salmons
    this.salmon = salmon
    this.straw = straw
    this.corn = corn
    this.fish = fish
    this.fishFood = fishFood
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

    for (let i = 0; i < this.crocodiles.total; i++) {
      let crocodile = new Crocodile(this)
      crocodile.p5 = this.p5
      crocodile.preload()
      crocodile.setRandomPositionInField(
        firstFieldX,
        firstFieldY,
        firstFieldW,
        firstFieldH
      )
      this.crocodiles.objects.push(crocodile)
    }

    this.fields.push(
      new Field(
        firstFieldX,
        firstFieldY,
        firstFieldW,
        firstFieldH,
        this.crocodiles.objects
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
