import Drawable from "./abstract/Drawable";
import Cow from "./animals/Cow";
import Sheep from "./animals/Sheep";
import Chicken from "./animals/Chicken";
import Pig from "./animals/Pig";
import Crocodile from "./animals/Crocodile";
import Ostrich from "./animals/Ostrich";
import Salmon from "./animals/Salmon";
import Duck from "./animals/Duck";
import Goose from "./animals/Goose";
import Llama from "./animals/Llama";
import Cabbage from "./crops/Cabbage";
import Carrot from "./crops/Carrot";
import Kale from "./crops/Kale";
import Lettuce from "./crops/Lettuce";
import Pea from "./crops/Pea";
import Potato from "./crops/Potato";
import Pumpkin from "./crops/Pumpkin";
import Rapeseed from "./crops/Rapeseed";
import Sugarbeet from "./crops/Sugarbeet";
import Wheat from "./crops/Wheat";
import Farm from "./Farm";
import SolarPanel from "./tech/SolarPanel";
import GasGenerator from "./tech/GasGenerator";
import FieldClass from "./abstract/FieldClass";

class Field extends Drawable {
  image: any;
  fieldDecor: string = "";
  fieldName: FieldClass = FieldClass.Grazing;
  contents: any[];

  constructor(
    xPos: number,
    yPos: number,
    w: number,
    h: number,
    fieldDecor: string = "#b58969",
    fieldName: FieldClass = FieldClass.Fallow,
    initalContents: any[] = [],
  ) {
    super();
    this.width = w;
    this.height = h;
    this.x = xPos;
    this.y = yPos;
    this.fieldDecor = fieldDecor;
    this.fieldName = fieldName;
    this.contents = initalContents;
  }

  public draw() {
    this.p5.stroke("#7c4011");
    this.p5.strokeWeight(10);
    this.p5.fill(this.fieldDecor);
    this.p5.rect(this.x, this.y, this.width, this.height, 10);

    this.contents.forEach(object => {
      object.draw();
      if (object.fieldX == null || object.fieldY == null) {
        object.setRandomPositionInField(this.x, this.y, this.width, this.height);
      }
    });
  }

  placeCow(x: number, y: number, farm: Farm) {
    console.log("new cow");
    this.fieldDecor = "#065535";
    this.fieldName = FieldClass.Grazing;
    let cow = new Cow(farm);
    cow.p5 = this.p5;
    cow.preload();
    cow.draw();
    this.contents.push(cow);
  }

  placeSheep(x: number, y: number, farm: Farm) {
    console.log("new sheep");
    this.fieldDecor = "#065535";
    this.fieldName = FieldClass.Grazing;
    let sheep = new Sheep(farm);
    sheep.p5 = this.p5;
    sheep.preload();
    sheep.draw();
    this.contents.push(sheep);
  }

  placeChicken(x: number, y: number, farm: Farm) {
    console.log("new chicken");
    this.fieldDecor = "#9c673d";
    this.fieldName = FieldClass.Grazing;
    let chicken = new Chicken(farm);
    chicken.p5 = this.p5;
    chicken.preload();
    chicken.draw();
    this.contents.push(chicken);
  }

  placePig(x: number, y: number, farm: Farm) {
    console.log("new pig");
    this.fieldDecor = "#9c673d";
    this.fieldName = FieldClass.Grazing;
    let pig = new Pig(farm);
    pig.p5 = this.p5;
    pig.preload();
    pig.draw();
    this.contents.push(pig);
  }

  placeCrocodile(x: number, y: number, farm: Farm) {
    console.log("new crocodile");
    this.fieldDecor = "#c7e3c6";
    this.fieldName = FieldClass.Lakeland;
    let crocodile = new Crocodile(farm);
    crocodile.p5 = this.p5;
    crocodile.preload();
    crocodile.draw();
    this.contents.push(crocodile);
  }

  placeOstrich(x: number, y: number, farm: Farm) {
    console.log("new ostrich");
    this.fieldDecor = "#065535";
    this.fieldName = FieldClass.Grazing;
    let ostrich = new Ostrich(farm);
    ostrich.p5 = this.p5;
    ostrich.preload();
    ostrich.draw();
    this.contents.push(ostrich);
  }

  placeSalmon(x: number, y: number, farm: Farm) {
    console.log("new salmon");
    this.fieldDecor = "#cad1da";
    this.fieldName = FieldClass.FishFarm;
    let salmon = new Salmon(farm);
    salmon.p5 = this.p5;
    salmon.preload();
    salmon.draw();
    this.contents.push(salmon);
  }

  placeDuck(x: number, y: number, farm: Farm) {
    console.log("new duck");
    this.fieldDecor = "#04a3f5";
    this.fieldName = FieldClass.Lakeland;
    let duck = new Duck(farm);
    duck.p5 = this.p5;
    duck.preload();
    duck.draw();
    this.contents.push(duck);
  }

  placeGoose(x: number, y: number, farm: Farm) {
    console.log("new goose");
    this.fieldDecor = "#04a3f5";
    this.fieldName = FieldClass.Lakeland;
    let goose = new Goose(farm);
    goose.p5 = this.p5;
    goose.preload();
    goose.draw();
    this.contents.push(goose);
  }

  placeLlama(x: number, y: number, farm: Farm) {
    console.log("new llama");
    this.fieldDecor = "#065535";
    this.fieldName = FieldClass.Grazing;
    let llama = new Llama(farm);
    llama.p5 = this.p5;
    llama.preload();
    llama.draw();
    this.contents.push(llama);
  }

  plantCabbage(x: number, y: number, farm: Farm) {
    console.log("new cabbage");
    this.fieldDecor = "#b58969";
    this.fieldName = FieldClass.Arable;
    let cabbage = new Cabbage(farm);
    cabbage.p5 = this.p5;
    cabbage.preload();
    cabbage.plantCabbage(x, y);
    this.contents.push(cabbage);
  }

  plantCarrot(x: number, y: number, farm: Farm) {
    console.log("new carrot");
    this.fieldDecor = "#b58969";
    this.fieldName = FieldClass.Arable;
    let carrot = new Carrot(farm);
    carrot.p5 = this.p5;
    carrot.preload();
    carrot.plantCarrot(x, y);
    this.contents.push(carrot);
  }

  plantKale(x: number, y: number, farm: Farm) {
    console.log("new kale");
    this.fieldDecor = "#b58969";
    this.fieldName = FieldClass.Arable;
    let kale = new Kale(farm);
    kale.p5 = this.p5;
    kale.preload();
    kale.plantKale(x, y);
    this.contents.push(kale);
  }

  plantLettuce(x: number, y: number, farm: Farm) {
    console.log("new lettuce");
    this.fieldDecor = "#b58969";
    this.fieldName = FieldClass.Arable;
    let lettuce = new Lettuce(farm);
    lettuce.p5 = this.p5;
    lettuce.preload();
    lettuce.plantLettuce(x, y);
    this.contents.push(lettuce);
  }

  plantPea(x: number, y: number, farm: Farm) {
    console.log("new pea");
    this.fieldDecor = "#b58969";
    this.fieldName = FieldClass.Arable;
    let pea = new Pea(farm);
    pea.p5 = this.p5;
    pea.preload();
    pea.plantPea(x, y);
    this.contents.push(pea);
  }

  plantPotato(x: number, y: number, farm: Farm) {
    console.log("new potato");
    this.fieldDecor = "#b58969";
    this.fieldName = FieldClass.Arable;
    let potato = new Potato(farm);
    potato.p5 = this.p5;
    potato.preload();
    potato.plantPotato(x, y);
    this.contents.push(potato);
  }

  plantPumpkin(x: number, y: number, farm: Farm) {
    console.log("new pumpkin");
    this.fieldDecor = "#b58969";
    this.fieldName = FieldClass.Arable;
    let pumpkin = new Pumpkin(farm);
    pumpkin.p5 = this.p5;
    pumpkin.preload();
    pumpkin.plantPumpkin(x, y);
    this.contents.push(pumpkin);
  }

  plantRapeseed(x: number, y: number, farm: Farm) {
    console.log("new rapeseed");
    this.fieldDecor = "#b58969";
    this.fieldName = FieldClass.Arable;
    let rapeseed = new Rapeseed(farm);
    rapeseed.p5 = this.p5;
    rapeseed.preload();
    rapeseed.plantRapeseed(x, y);
    this.contents.push(rapeseed);
  }

  plantSugarbeet(x: number, y: number, farm: Farm) {
    console.log("new sugarbeet");
    this.fieldDecor = "#b58969";
    this.fieldName = FieldClass.Arable;
    let sugarbeet = new Sugarbeet(farm);
    sugarbeet.p5 = this.p5;
    sugarbeet.preload();
    sugarbeet.plantSugarbeet(x, y);
    this.contents.push(sugarbeet);
  }

  plantWheat(x: number, y: number, farm: Farm) {
    console.log("new wheat");
    this.fieldDecor = "#b58969";
    this.fieldName = FieldClass.Arable;
    let wheat = new Wheat(farm);
    wheat.p5 = this.p5;
    wheat.preload();
    wheat.plantWheat(x, y);
    this.contents.push(wheat);
  }

  placeGasGenerator(x: number, y: number, farm: Farm) {
    console.log("new gas generator");
    let gasGenerator = new GasGenerator(farm);
    gasGenerator.p5 = this.p5;
    gasGenerator.preload();
    gasGenerator.placeGasGenerator(x, y);
    this.contents.push(gasGenerator);
  }

  placeSolarPanel(x: number, y: number, farm: Farm) {
    console.log("new solar panel");
    let solarPanel = new SolarPanel(farm);
    solarPanel.p5 = this.p5;
    solarPanel.preload();
    solarPanel.placeSolarPanel(x, y);
    this.contents.push(solarPanel);
  }
}

export default Field;
