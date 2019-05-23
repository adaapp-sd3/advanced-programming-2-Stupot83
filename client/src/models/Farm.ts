import Drawable from "./abstract/Drawable";
import Field from "./Field";

class Farm extends Drawable {
  fields: Field[] = [];
  width: number = 2130;
  height: number = 1110;
  cows: any;
  milk: any;
  beef: any;
  sheep: any;
  lamb: any;
  wool: any;
  chickens: any;
  chicken: any;
  eggs: any;
  pigs: any;
  pork: any;
  crocodiles: any;
  crocodile: any;
  crocEggs: any;
  ostriches: any;
  ostrich: any;
  ostrichEggs: any;
  salmons: any;
  salmon: any;
  geese: any;
  goose: any;
  gooseEggs: any;
  ducks: any;
  duck: any;
  duckEggs: any;
  llamas: any;
  llama: any;
  llamaWool: any;
  carrotSeeds: any;
  pumpkinSeeds: any;
  wheatSeeds: any;
  carrots: any;
  carrot: any;
  pumpkins: any;
  pumpkin: any;
  wheats: any;
  wheat: any;
  straw: any;
  corn: any;
  fish: any;
  fishFood: any;
  seeds: any;
  greenGas: any;
  gasGenerators: any;
  gasGenerator: any;
  solarPower: any;
  solarPanels: any;
  solarPanel: any;

  constructor(
    cows: any = {
      name: "Cows",
      total: 0,
      objects: [],
    },
    beef: any = {
      name: "Beef",
      total: 0,
      unit: "kg",
    },
    milk: any = {
      name: "Milk",
      total: 0,
      unit: "pints",
    },
    sheep: any = {
      name: "Sheep",
      total: 0,
      objects: [],
    },
    lamb: any = {
      name: "Lamb",
      total: 0,
      unit: "kg",
    },
    wool: any = {
      name: "Wool",
      total: 0,
      unit: "bales",
    },
    chickens: any = {
      name: "Chickens",
      total: 0,
      objects: [],
    },
    chicken: any = {
      name: "Chicken",
      total: 0,
      unit: "kg",
    },
    eggs: any = {
      name: "Eggs",
      total: 0,
      unit: "boxes",
    },
    pigs: any = {
      name: "Pigs",
      total: 0,
      objects: [],
    },
    pork: any = {
      name: "Pork",
      total: 0,
      unit: "kg",
    },
    crocodiles: any = {
      name: "Crocodiles",
      total: 0,
      objects: [],
    },
    crocodile: any = {
      name: "Crocodile",
      total: 0,
      unit: "kg",
    },
    crocEggs: any = {
      name: "crocEggs",
      total: 0,
      unit: "boxes",
    },
    ostriches: any = {
      name: "Ostriches",
      total: 0,
      objects: [],
    },
    ostrich: any = {
      name: "Ostrich",
      total: 0,
      unit: "kg",
    },
    ostrichEggs: any = {
      name: "ostrichEggs",
      total: 0,
      unit: "boxes",
    },
    salmons: any = {
      name: "Salmons",
      total: 0,
      objects: [],
    },
    salmon: any = {
      name: "Salmon",
      total: 0,
      unit: "kg",
    },
    geese: any = {
      name: "Geese",
      total: 0,
      objects: [],
    },
    goose: any = {
      name: "Goose",
      total: 0,
      unit: "kg",
    },
    gooseEggs: any = {
      name: "gooseEggs",
      total: 0,
      unit: "boxes",
    },
    ducks: any = {
      name: "Ducks",
      total: 0,
      objects: [],
    },
    duck: any = {
      name: "Duck",
      total: 0,
      unit: "kg",
    },
    duckEggs: any = {
      name: "duckEggs",
      total: 0,
      unit: "boxes",
    },
    llamas: any = {
      name: "Llamas",
      total: 0,
      objects: [],
    },
    llama: any = {
      name: "Llama",
      total: 0,
      unit: "kg",
    },
    llamaWool: any = {
      name: "llamaWool",
      total: 0,
      unit: "bales",
    },
    carrotSeeds: any = {
      name: "carrotSeeds",
      total: 0,
      unit: "bags",
    },
    pumpkinSeeds: any = {
      name: "pumpkinSeeds",
      total: 0,
      unit: "bags",
    },
    wheatSeeds: any = {
      name: "wheatSeeds",
      total: 0,
      unit: "bags",
    },
    carrots: any = {
      name: "Carrots",
      total: 0,
      objects: [],
    },
    carrot: any = {
      name: "Carrot",
      total: 0,
      unit: "kg",
    },
    pumpkins: any = {
      name: "Pumpkins",
      total: 0,
      objects: [],
    },
    pumpkin: any = {
      name: "Pumpkin",
      total: 0,
      unit: "kg",
    },
    wheats: any = {
      name: "Wheats",
      total: 0,
      objects: [],
    },
    wheat: any = {
      name: "Wheat",
      total: 0,
      unit: "kg",
    },
    straw: any = {
      name: "Straw",
      total: 0,
      unit: "bales",
    },
    corn: any = {
      name: "Corn",
      total: 0,
      unit: "bags",
    },
    fish: any = {
      name: "Fish",
      total: 0,
      unit: "kg",
    },
    fishFood: any = {
      name: "fishFood",
      total: 0,
      unit: "bags",
    },
    seeds: any = {
      name: "Grass seeds",
      total: 0,
      unit: "packets",
    },
    greenGas: any = {
      name: "Green Gas",
      total: 0,
      unit: "ltrs",
    },
    gasGenerators: any = {
      name: "Gas Generators",
      total: 0,
      objects: [],
    },
    gasGenerator: any = {
      name: "Gas Generator",
      total: 0,
      unit: "units",
    },
    solarPower: any = {
      name: "Solar Power",
      total: 0,
      unit: "units",
    },
    solarPanels: any = {
      name: "Solar Panels",
      total: 0,
      objects: [],
    },
    solarPanel: any = {
      name: "Solar Panel",
      total: 0,
      unit: "units",
    }
  ) {
    super();
    this.cows = cows;
    this.beef = beef;
    this.milk = milk;
    this.sheep = sheep;
    this.lamb = lamb;
    this.wool = wool;
    this.chickens = chickens;
    this.chicken = chicken;
    this.eggs = eggs;
    this.pigs = pigs;
    this.pork = pork;
    this.crocodiles = crocodiles;
    this.crocodile = crocodile;
    this.crocEggs = crocEggs;
    this.ostriches = ostriches;
    this.ostrich = ostrich;
    this.ostrichEggs = ostrichEggs;
    this.salmons = salmons;
    this.salmon = salmon;
    this.geese = geese;
    this.goose = goose;
    this.gooseEggs = gooseEggs;
    this.ducks = ducks;
    this.duck = duck;
    this.duckEggs = duckEggs;
    this.llamas = llamas;
    this.llama = llama;
    this.llamaWool = llamaWool;
    this.carrotSeeds = carrotSeeds;
    this.pumpkinSeeds = pumpkinSeeds;
    this.wheatSeeds = wheatSeeds;
    this.carrots = carrots;
    this.carrot = carrot;
    this.pumpkins = pumpkins;
    this.pumpkin = pumpkin;
    this.wheats = wheats;
    this.wheat = wheat;
    this.straw = straw;
    this.corn = corn;
    this.fish = fish;
    this.fishFood = fishFood;
    this.seeds = seeds;
    this.greenGas = greenGas;
    this.gasGenerators = gasGenerators;
    this.gasGenerator = gasGenerator;
    this.solarPower = solarPower;
    this.solarPanels = solarPanels;
    this.solarPanel = solarPanel;
  }

  public preload() {
    this.createBasicFarm();
  }

  private createBasicFarm = () => {
    this.fields.push(new Field(10, 10, 200, 250));
    this.fields.push(new Field(10, 290, 200, 250));
    this.fields.push(new Field(230, 290, 200, 250));
    this.fields.push(new Field(230, 10, 200, 250));
    this.fields.push(new Field(800, 10, 250, 200));
    this.fields.push(new Field(700, 415, 350, 125));
    this.fields.push(new Field(720, 250, 250, 125));
    this.fields.push(new Field(450, 10, 300, 125));
    this.fields.push(new Field(460, 340, 210, 200));
    this.fields.push(new Field(480, 170, 200, 125));

    for (let field of this.fields) {
      field.p5 = this.p5;
      field.setHandleUpdate = this.updateUI;
    }
  };

  public draw() {
    for (let field of this.fields) {
      field.draw();
    }
  }
}

export default Farm;
