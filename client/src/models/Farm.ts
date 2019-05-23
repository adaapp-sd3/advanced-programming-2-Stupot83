import Drawable from "./abstract/Drawable";
import Field from "./Field";

class Farm extends Drawable {
  fields: Field[] = [];
  width: number = 2130;
  height: number = 1110;
  cows: any;
  usedCow: any;
  milk: any;
  beef: any;
  sheep: any;
  usedSheep: any;
  lamb: any;
  wool: any;
  chickens: any;
  usedChicken: any;
  chicken: any;
  eggs: any;
  pigs: any;
  usedPig: any;
  pork: any;
  crocodiles: any;
  usedCrocodile: any;
  crocodile: any;
  crocEggs: any;
  ostriches: any;
  usedOstrich: any;
  ostrich: any;
  ostrichEggs: any;
  salmons: any;
  usedSalmon: any;
  salmon: any;
  geese: any;
  usedGoose: any;
  goose: any;
  gooseEggs: any;
  ducks: any;
  usedDuck: any;
  duck: any;
  duckEggs: any;
  llamas: any;
  usedLlama: any;
  llama: any;
  llamaWool: any;
  cabbageSeeds: any;
  carrotSeeds: any;
  kaleSeeds: any;
  lettuceSeeds: any;
  peaSeeds: any;
  potatoSeeds: any;
  pumpkinSeeds: any;
  rapeseedSeeds: any;
  sugarbeetSeeds: any;
  wheatSeeds: any;
  cabbages: any;
  cabbage: any;
  carrots: any;
  carrot: any;
  kales: any;
  kale: any;
  lettuces: any;
  lettuce: any;
  peas: any;
  pea: any;
  potatoes: any;
  potato: any;
  pumpkins: any;
  pumpkin: any;
  rapeseeds: any;
  rapeseed: any;
  sugarbeets: any;
  sugarbeet: any;
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
    usedCow: any = {
      name: "used Cow",
      total: 0,
      unit: "units"
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
    usedSheep: any = {
      name: "used Sheep",
      total: 0,
      unit: "units"
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
    usedChicken: any = {
      name: "used Chicken",
      total: 0,
      unit: "units"
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
    usedPig: any = {
      name: "used Pig",
      total: 0,
      unit: "units"
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
    usedCrocodile: any = {
      name: "used Crocodile",
      total: 0,
      unit: "units"
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
    usedOstrich: any = {
      name: "used Ostrich",
      total: 0,
      unit: "units"
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
    usedSalmon: any = {
      name: "used Salmon",
      total: 0,
      unit: "units"
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
    usedGoose: any = {
      name: "used Goose",
      total: 0,
      unit: "units"
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
    usedDuck: any = {
      name: "used Duck",
      total: 0,
      unit: "units"
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
    usedLlama: any = {
      name: "used Llama",
      total: 0,
      unit: "units"
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
    cabbageSeeds: any = {
      name: "cabbageSeeds",
      total: 0,
      unit: "bags",
    },
    carrotSeeds: any = {
      name: "carrotSeeds",
      total: 0,
      unit: "bags",
    },
    kaleSeeds: any = {
      name: "kaleSeeds",
      total: 0,
      unit: "bags",
    },
    lettuceSeeds: any = {
      name: "lettuceSeeds",
      total: 0,
      unit: "bags",
    },
    peaSeeds: any = {
      name: "peaSeeds",
      total: 0,
      unit: "bags",
    },
    potatoSeeds: any = {
      name: "potatoSeeds",
      total: 0,
      unit: "bags",
    },
    pumpkinSeeds: any = {
      name: "pumpkinSeeds",
      total: 0,
      unit: "bags",
    },
    rapeseedSeeds: any = {
      name: "rapeseedSeeds",
      total: 0,
      unit: "bags",
    },
    sugarbeetSeeds: any = {
      name: "sugarbeetSeeds",
      total: 0,
      unit: "bags",
    },
    wheatSeeds: any = {
      name: "wheatSeeds",
      total: 0,
      unit: "bags",
    },
    cabbages: any = {
      name: "Cabbages",
      total: 0,
      objects: [],
    },
    cabbage: any = {
      name: "Cabbage",
      total: 0,
      unit: "kg",
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
    kales: any = {
      name: "Kales",
      total: 0,
      objects: [],
    },
    kale: any = {
      name: "Kale",
      total: 0,
      unit: "kg",
    },
    lettuces: any = {
      name: "Lettuces",
      total: 0,
      objects: [],
    },
    lettuce: any = {
      name: "Lettuce",
      total: 0,
      unit: "kg",
    },
    peas: any = {
      name: "Peas",
      total: 0,
      objects: [],
    },
    pea: any = {
      name: "Pea",
      total: 0,
      unit: "kg",
    },
    potatoes: any = {
      name: "Potatoes",
      total: 0,
      objects: [],
    },
    potato: any = {
      name: "Potato",
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
    rapeseeds: any = {
      name: "Rapeseeds",
      total: 0,
      objects: [],
    },
    rapeseed: any = {
      name: "Rapeseed",
      total: 0,
      unit: "kg",
    },
    sugarbeets: any = {
      name: "Sugarbeets",
      total: 0,
      objects: [],
    },
    sugarbeet: any = {
      name: "Sugarbeet",
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
    this.usedCow = usedCow;
    this.beef = beef;
    this.milk = milk;
    this.sheep = sheep;
    this.usedSheep = usedSheep;
    this.lamb = lamb;
    this.wool = wool;
    this.chickens = chickens;
    this.usedChicken = usedChicken;
    this.chicken = chicken;
    this.eggs = eggs;
    this.pigs = pigs;
    this.usedPig = usedPig;
    this.pork = pork;
    this.crocodiles = crocodiles;
    this.usedCrocodile = usedCrocodile;
    this.crocodile = crocodile;
    this.crocEggs = crocEggs;
    this.ostriches = ostriches;
    this.usedOstrich = usedOstrich;
    this.ostrich = ostrich;
    this.ostrichEggs = ostrichEggs;
    this.salmons = salmons;
    this.usedSalmon = usedSalmon;
    this.salmon = salmon;
    this.geese = geese;
    this.usedGoose = usedGoose;
    this.goose = goose;
    this.gooseEggs = gooseEggs;
    this.ducks = ducks;
    this.usedDuck = usedDuck;
    this.duck = duck;
    this.duckEggs = duckEggs;
    this.llamas = llamas;
    this.usedLlama = usedLlama;
    this.llama = llama;
    this.llamaWool = llamaWool;
    this.cabbageSeeds = cabbageSeeds;
    this.carrotSeeds = carrotSeeds;
    this.kaleSeeds = kaleSeeds;
    this.lettuceSeeds = lettuceSeeds;
    this.peaSeeds = peaSeeds;
    this.potatoSeeds = potatoSeeds;
    this.pumpkinSeeds = pumpkinSeeds;
    this.rapeseedSeeds = rapeseedSeeds;
    this.sugarbeetSeeds = sugarbeetSeeds;
    this.wheatSeeds = wheatSeeds;
    this.cabbages = cabbages;
    this.cabbage = cabbage;
    this.carrots = carrots;
    this.carrot = carrot;
    this.kales = kales;
    this.kale = kale;
    this.lettuces = lettuces;
    this.lettuce = lettuce;
    this.peas = peas;
    this.pea = pea;
    this.potatoes = potatoes;
    this.potato = potato;
    this.pumpkins = pumpkins;
    this.pumpkin = pumpkin;
    this.rapeseeds = rapeseeds;
    this.rapeseed = rapeseed;
    this.sugarbeets = sugarbeets;
    this.sugarbeet = sugarbeet;
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
