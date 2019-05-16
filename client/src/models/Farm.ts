import Drawable from "./abstract/Drawable";
import Field from "./Field";
import Cow from "./animals/Cow";
import Chicken from "./animals/Chicken";
import Sheep from "./animals/Sheep";
import Pig from "./animals/Pig";
import Crocodile from "./animals/Crocodile";
import Ostrich from "./animals/Ostrich";
import Salmon from "./animals/Salmon";
import Goose from "./animals/Goose";
import Duck from "./animals/Duck";
import Llama from "./animals/Llama";
import Carrot from "./crops/Carrot";
import Pumpkin from "./crops/Pumpkin";
import Wheat from "./crops/Wheat";
import GasGenerator from "./tech/GasGenerator";
import SolarPanel from "./tech/SolarPanel";

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
  wheat: any ;
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
    carrotSeeds: any = {
      name: "carrotSeeds",
      total: 0,
      unit: "bags"
    },
    pumpkinSeeds: any = {
      name: "pumpkinSeeds",
      total: 0,
      unit: "bags"
    },
    wheatSeeds: any = {
      name: "wheatSeeds",
      total: 0,
      unit: "bags"
    },
    carrots: any = {
      name: "Carrots",
      total: 0,
      objects: []
    },
    carrot: any = {
      name: "Carrot",
      total: 0,
      unit: "kg"
    },
    pumpkins: any = {
      name: "Pumpkins",
      total: 0,
      objects: []
    },
    pumpkin: any = {
      name: "Pumpkin",
      total: 0,
      unit: "kg"
    },
    wheats: any = {
      name: "Wheats",
      total: 0,
      objects: []
    },
    wheat: any = {
      name: "Wheat",
      total: 0,
      unit: "kg"
    },
    straw: any = {
      name: "Straw",
      total: 0,
      unit: "bales"
    },
    corn: any = {
      name: "Corn",
      total: 0,
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
    gasGenerators: any = {
      name: "Gas Generators",
      total: 42,
      objects: []
    },
    gasGenerator: any = {
      name: "Gas Generator",
      total: 0,
      unit: "units"
    },
    solarPower: any = {
      name: "Solar Power",
      total: 0,
      unit: "units"
    },
    solarPanels: any = {
      name: "Solar Panels",
      total: 42,
      objects: []
    },
    solarPanel: any = {
      name: "Solar Panel",
      total: 0,
      unit: "units"
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
    let firstFieldX = 25;
    let firstFieldY = 25;
    let firstFieldW = 350;
    let firstFieldH = 175;

    for (let i = 0; i < this.solarPanels.total; i++) {
      let solarPanel = new SolarPanel(this);
      solarPanel.p5 = this.p5;
      solarPanel.preload();
      solarPanel.setRandomPositionInField(
        firstFieldX,
        firstFieldY,
        firstFieldW,
        firstFieldH
      );
      this.solarPanels.objects.push(solarPanel);
    };

    this.fields.push(
      new Field(
        firstFieldX,
        firstFieldY,
        firstFieldW,
        firstFieldH,
        this.solarPanels.objects
      )
    );

    let secondFieldX = 25;
    let secondFieldY = 250;
    let secondFieldW = 350;
    let secondFieldH = 125;

    for (let i = 0; i < this.gasGenerators.total; i++) {
      let gasGenerator = new GasGenerator(this);
      gasGenerator.p5 = this.p5;
      gasGenerator.preload();
      gasGenerator.setRandomPositionInField(
        secondFieldX,
        secondFieldY,
        secondFieldW,
        secondFieldH
      );
      this.gasGenerators.objects.push(gasGenerator);
    };

    this.fields.push(
      new Field(
        secondFieldX,
        secondFieldY,
        secondFieldW,
        secondFieldH,
        this.gasGenerators.objects
      )
    );

    let thirdFieldX = 25;
    let thirdFieldY = 400;
    let thirdFieldW = 300;
    let thirdFieldH = 125;

    for (let i = 0; i < this.salmons.total; i++) {
      let salmon = new Salmon(this);
      salmon.p5 = this.p5;
      salmon.preload();
      salmon.setRandomPositionInField(
        thirdFieldX,
        thirdFieldY,
        thirdFieldW,
        thirdFieldH
      );
      this.salmons.objects.push(salmon);
    };

    this.fields.push(
      new Field(
        thirdFieldX,
        thirdFieldY,
        thirdFieldW,
        thirdFieldH,
        this.salmons.objects
      )
    );

    let fourthFieldX = 475;
    let fourthFieldY = 25;
    let fourthFieldW = 200;
    let fourthFieldH = 325;

    for (let i = 0; i < this.pigs.total; i++) {
      let pig = new Pig(this);
      pig.p5 = this.p5;
      pig.preload();
      pig.setRandomPositionInField(
        fourthFieldX,
        fourthFieldY,
        fourthFieldW,
        fourthFieldH
      );
      this.pigs.objects.push(pig);
    };

    this.fields.push(
      new Field(
        fourthFieldX,
        fourthFieldY,
        fourthFieldW,
        fourthFieldH,
        this.pigs.objects
      )
    );
    
    for (let field of this.fields) {
      field.p5 = this.p5;
      field.setHandleUpdate = this.updateUI;
    }
  };

  public draw() {
    for (let field of this.fields) {
      field.draw();
    }
  };
}

export default Farm
