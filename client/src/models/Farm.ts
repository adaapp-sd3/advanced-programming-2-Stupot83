import Drawable from "./abstract/Drawable"
import Field from "./Field"
import Cow from "./animals/Cow"
import Chicken from "./animals/Chicken"
import Sheep from "./animals/Sheep"
import Pig from "./animals/Pig"
import Crocodile from "./animals/Crocodile"
import Ostrich from "./animals/Ostrich"
import Salmon from "./animals/Salmon"
import Goose from "./animals/Goose"
import Duck from "./animals/Duck"
import Llama from "./animals/Llama"

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
  geese: any
  goose: any
  gooseEggs: any
  ducks: any
  duck: any
  duckEggs: any
  llamas: any
  llama: any
  llamaWool: any
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
      total: 42,
      objects: []
    },
    pork: any = {
      name: "Pork",
      total: 0,
      unit: "kg"
    },
    crocodiles: any = {
      name: "Crocodiles",
      total: 42,
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
      total: 42,
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
      total: 42,
      objects: []
    },
    salmon: any = {
      name: "Salmon",
      total: 0,
      unit: "kg"
    },
    geese: any = {
      name: "Geese",
      total: 0,
      objects: []
    },
    goose: any = {
      name: "Goose",
      total: 0,
      unit: "kg"
    },
    gooseEggs: any = {
      name: "gooseEggs",
      total: 0,
      unit: "boxes"
    },
    ducks: any = {
      name: "Ducks",
      total: 0,
      objects: []
    },
    duck: any = {
      name: "Duck",
      total: 0,
      unit: "kg"
    },
    duckEggs: any = {
      name: "duckEggs",
      total: 0,
      unit: "boxes"
    },
    llamas: any = {
      name: "Llamas",
      total: 0,
      objects: []
    },
    llama: any = {
      name: "Llama",
      total: 0,
      unit: "kg"
    },
    llamaWool: any = {
      name: "llamaWool",
      total: 0,
      unit: "bales"
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
    this.geese = geese
    this.goose = goose
    this.gooseEggs = gooseEggs
    this.ducks = ducks
    this.duck = duck
    this.duckEggs = duckEggs
    this.llamas = llamas
    this.llama = llama
    this.llamaWool = llamaWool
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

    for (let i = 0; i < this.ostriches.total; i++) {
      let ostrich = new Ostrich(this)
      ostrich.p5 = this.p5
      ostrich.preload()
      ostrich.setRandomPositionInField(
        secondFieldX,
        secondFieldY,
        secondFieldW,
        secondFieldH
      )
      this.ostriches.objects.push(ostrich)
    }

    this.fields.push(
      new Field(
        secondFieldX,
        secondFieldY,
        secondFieldW,
        secondFieldH,
        this.ostriches.objects
      )
    )

    let thirdFieldX = 25
    let thirdFieldY = 450
    let thirdFieldW = 300
    let thirdFieldH = 125

    for (let i = 0; i < this.salmons.total; i++) {
      let salmon = new Salmon(this)
      salmon.p5 = this.p5
      salmon.preload()
      salmon.setRandomPositionInField(
        thirdFieldX,
        thirdFieldY,
        thirdFieldW,
        thirdFieldH
      )
      this.salmons.objects.push(salmon)
    }

    this.fields.push(
      new Field(
        thirdFieldX,
        thirdFieldY,
        thirdFieldW,
        thirdFieldH,
        this.salmons.objects
      )
    )

    let fourthFieldX = 475
    let fourthFieldY = 25
    let fourthFieldW = 200
    let fourthFieldH = 325

    for (let i = 0; i < this.pigs.total; i++) {
      let pig = new Pig(this)
      pig.p5 = this.p5
      pig.preload()
      pig.setRandomPositionInField(
        fourthFieldX,
        fourthFieldY,
        fourthFieldW,
        fourthFieldH
      )
      this.pigs.objects.push(pig)
    }

    this.fields.push(
      new Field(
        fourthFieldX,
        fourthFieldY,
        fourthFieldW,
        fourthFieldH,
        this.pigs.objects
      )
    )
    
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
