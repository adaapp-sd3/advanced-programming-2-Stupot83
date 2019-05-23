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
import Carrot from "./crops/Carrot";
import Pumpkin from "./crops/Pumpkin";
import Wheat from "./crops/Wheat";
import Farm from "./Farm";
import SolarPanel from "./tech/SolarPanel";
import GasGenerator from "./tech/GasGenerator";

class Field extends Drawable {
  image: any;
  contents: any[];

  constructor(
    xPos: number,
    yPos: number,
    w: number,
    h: number,
    initalContents: any[] = []
  ) {
    super();
    this.width = w;
    this.height = h;
    this.x = xPos;
    this.y = yPos;
    this.contents = initalContents;
  }

  public draw() {
    this.p5.stroke("#7c4011");
    this.p5.strokeWeight(10);
    this.p5.fill("#b58969");
    this.p5.rect(this.x, this.y, this.width, this.height, 10);

    for (var item of this.contents) {
      item.draw();
    }
  }

  placeCow(x: number, y: number, farm: Farm) {
    console.log("new cow")
    let cow = new Cow(farm)
    cow.p5 = this.p5
    cow.preload()
    cow.placeCow(x, y)
    this.contents.push(cow)
  }

  placeSheep(x: number, y: number, farm: Farm) {
    console.log("new sheep")
    let sheep = new Sheep(farm)
    sheep.p5 = this.p5
    sheep.preload()
    sheep.placeSheep(x, y)
    this.contents.push(sheep)
  }

  placeChicken(x: number, y: number, farm: Farm) {
    console.log("new chicken")
    let chicken = new Chicken(farm)
    chicken.p5 = this.p5
    chicken.preload()
    chicken.placeChicken(x, y)
    this.contents.push(chicken)
  }

  placePig(x: number, y: number, farm: Farm) {
    console.log("new pig")
    let pig = new Pig(farm)
    pig.p5 = this.p5
    pig.preload()
    pig.placePig(x, y)
    this.contents.push(pig)
  }

  placeCrocodile(x: number, y: number, farm: Farm) {
    console.log("new crocodile")
    let crocodile = new Crocodile(farm)
    crocodile.p5 = this.p5
    crocodile.preload()
    crocodile.placeCrocodile(x, y)
    this.contents.push(crocodile)
  }

  placeOstrich(x: number, y: number, farm: Farm) {
    console.log("new ostrich")
    let ostrich = new Ostrich(farm)
    ostrich.p5 = this.p5
    ostrich.preload()
    ostrich.placeOstrich(x, y)
    this.contents.push(ostrich)
  }

  placeSalmon(x: number, y: number, farm: Farm) {
    console.log("new salmon")
    let salmon = new Salmon(farm)
    salmon.p5 = this.p5
    salmon.preload()
    salmon.placeSalmon(x, y)
    this.contents.push(salmon)
  }

  placeDuck(x: number, y: number, farm: Farm) {
    console.log("new duck")
    let duck = new Duck(farm)
    duck.p5 = this.p5
    duck.preload()
    duck.placeDuck(x, y)
    this.contents.push(duck)
  }

  placeGoose(x: number, y: number, farm: Farm) {
    console.log("new goose")
    let goose = new Goose(farm)
    goose.p5 = this.p5
    goose.preload()
    goose.placeGoose(x, y)
    this.contents.push(goose)
  }

  placeLlama(x: number, y: number, farm: Farm) {
    console.log("new llama")
    let llama = new Llama(farm)
    llama.p5 = this.p5
    llama.preload()
    llama.placeLlama(x, y)
    this.contents.push(llama)
  }

  plantCarrot(x: number, y: number, farm: Farm) {
    console.log("new carrot");
    let carrot = new Carrot(farm);
    carrot.p5 = this.p5;
    carrot.preload();
    carrot.plantCarrot(x, y);
    this.contents.push(carrot);
  }

  plantPumpkin(x: number, y: number, farm: Farm) {
    console.log("new pumpkin");
    let pumpkin = new Pumpkin(farm);
    pumpkin.p5 = this.p5;
    pumpkin.preload();
    pumpkin.plantPumpkin(x, y);
    this.contents.push(pumpkin);
  }

  plantWheat(x: number, y: number, farm: Farm) {
    console.log("new wheat");
    let wheat = new Wheat(farm);
    wheat.p5 = this.p5;
    wheat.preload();
    wheat.plantWheat(x, y);
    this.contents.push(wheat);
  }

  placeGasGenerator(x: number, y: number, farm: Farm) {
    console.log("new gas generator")
    let gasGenerator = new GasGenerator(farm)
    gasGenerator.p5 = this.p5
    gasGenerator.preload()
    gasGenerator.placeGasGenerator(x, y)
    this.contents.push(gasGenerator)
  }

  placeSolarPanel(x: number, y: number, farm: Farm) {
    console.log("new solar panel")
    let solarPanel = new SolarPanel(farm)
    solarPanel.p5 = this.p5
    solarPanel.preload()
    solarPanel.placeSolarPanel(x, y)
    this.contents.push(solarPanel)
  }
}

export default Field;
