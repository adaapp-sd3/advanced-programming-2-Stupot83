import Drawable from "./abstract/Drawable";
import Farm from "./Farm";
import Market from "./Market";
import FieldClass from "./abstract/FieldClass";

class Farmer extends Drawable {
  myFarm!: Farm;
  localMarket!: Market;
  budget: number = 100000;
  showUI: boolean = true;
  currentLocation: any;
  imgUrl = "img/farmer.png";
  constructor() {
    super();
    this.x = 100;
    this.y = 100;
    this.width = 72;
    this.height = 72;
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl);
  }

  public keyPressed() {
    if (this.p5.keyCode === this.p5.ENTER) {
      this.showUI = true;
    }
  }

  private update() {
    if (this.p5.keyIsDown(68)) {
      this.x = this.x + 3;
    }
    if (this.p5.keyIsDown(65)) {
      this.x = this.x - 3;
    }
    if (this.p5.keyIsDown(83)) {
      this.y = this.y + 3;
    }
    if (this.p5.keyIsDown(87)) {
      this.y = this.y - 3;
    }
  }

  set farmerCurrentLocation(location: any) {
    this.currentLocation = location;
  }

  private getCurrentLocation() {
    for (let field of this.myFarm.fields) {
      if (field.containsPoint(this.x + this.height, this.y + this.width)) {
        this.farmerCurrentLocation = field;
        field.farmerPresent = true;

        if (!field.contents[0] || field.contents[0].name === "Cow") {
          if (this.myFarm.cows.total > 0) {
            if (this.p5.keyIsDown(84)) {
              if (this.myFarm.cows.total !== field.contents.length) {
                field.placeCow(this.x + 50, this.y + 50, this.myFarm);
                this.myFarm.cows.total -= 1;
                this.myFarm.usedCow.total += 1;
              }
            }
          }
          if (field.fieldName === FieldClass.Grazing) {
            if (this.p5.keyIsDown(90)) {
              field.fieldName = FieldClass.PettingZoo;
              field.fieldDecor = "#cb4154";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area to a petting zoo for cows at a cost of £10000"
              );
            }
          }
          if (field.fieldName === FieldClass.PettingZoo) {
            if (this.p5.keyIsDown(88)) {
              field.fieldName = FieldClass.Grazing;
              field.fieldDecor = "#065535";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area back to grazing for cows at a cost of £10000"
              );
            }
            this.budget += 0.1;
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Sheep") {
          if (this.myFarm.sheep.total > 0) {
            if (this.p5.keyIsDown(89)) {
              if (this.myFarm.sheep.total !== field.contents.length) {
                field.placeSheep(this.x + 50, this.y + 50, this.myFarm);
                this.myFarm.sheep.total -= 1;
                this.myFarm.usedSheep.total += 1;
              }
            }
          }
          if (field.fieldName === FieldClass.Grazing) {
            if (this.p5.keyIsDown(90)) {
              field.fieldName = FieldClass.PettingZoo;
              field.fieldDecor = "#cb4154";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area to a petting zoo for sheep at a cost of £10000"
              );
            }
          }
          if (field.fieldName === FieldClass.PettingZoo) {
            if (this.p5.keyIsDown(88)) {
              field.fieldName = FieldClass.Grazing;
              field.fieldDecor = "#065535";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area back to grazing for sheep at a cost of £10000"
              );
            }
            this.budget += 0.1;
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Chicken") {
          if (this.myFarm.chickens.total > 0) {
            if (this.p5.keyIsDown(85)) {
              if (this.myFarm.chickens.total !== field.contents.length) {
                field.placeChicken(this.x + 50, this.y + 50, this.myFarm);
                this.myFarm.chickens.total -= 1;
                this.myFarm.usedChicken.total += 1;
              }
            }
          }
          if (field.fieldName === FieldClass.Grazing) {
            if (this.p5.keyIsDown(90)) {
              field.fieldName = FieldClass.PettingZoo;
              field.fieldDecor = "#cb4154";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area to a petting zoo for chickens at a cost of £10000"
              );
            }
          }
          if (field.fieldName === FieldClass.PettingZoo) {
            if (this.p5.keyIsDown(88)) {
              field.fieldName = FieldClass.Grazing;
              field.fieldDecor = "#065535";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area back to grazing for chickens at a cost of £10000"
              );
            }
            this.budget += 0.1;
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Pig") {
          if (this.myFarm.pigs.total > 0) {
            if (this.p5.keyIsDown(73)) {
              if (this.myFarm.pigs.total !== field.contents.length) {
                field.placePig(this.x + 50, this.y + 50, this.myFarm);
                this.myFarm.pigs.total -= 1;
                this.myFarm.usedPig.total += 1;
              }
            }
          }
          if (field.fieldName === FieldClass.Grazing) {
            if (this.p5.keyIsDown(90)) {
              field.fieldName = FieldClass.PettingZoo;
              field.fieldDecor = "#cb4154";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area to a petting zoo for pigs at a cost of £10000"
              );
            }
          }
          if (field.fieldName === FieldClass.PettingZoo) {
            if (this.p5.keyIsDown(88)) {
              field.fieldName = FieldClass.Grazing;
              field.fieldDecor = "#065535";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area back to grazing for pigs at a cost of £10000"
              );
            }
            this.budget += 0.1;
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Crocodile") {
          if (this.myFarm.crocodiles.total > 0) {
            if (this.p5.keyIsDown(79)) {
              if (this.myFarm.crocodiles.total !== field.contents.length) {
                field.placeCrocodile(this.x + 50, this.y + 50, this.myFarm);
                this.myFarm.crocodiles.total -= 1;
                this.myFarm.usedCrocodile.total += 1;
              }
            }
          }
          if (field.fieldName === FieldClass.Lakeland) {
            if (this.p5.keyIsDown(90)) {
              field.fieldName = FieldClass.PettingZoo;
              field.fieldDecor = "#cb4154";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area to a petting zoo for crocodiles at a cost of £10000"
              );
            }
          }
          if (field.fieldName === FieldClass.PettingZoo) {
            if (this.p5.keyIsDown(88)) {
              field.fieldName = FieldClass.Lakeland;
              field.fieldDecor = "#065535";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area back to lakeland for crocodiles at a cost of £10000"
              );
            }
            this.budget += 0.1;
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Ostrich") {
          if (this.myFarm.ostriches.total > 0) {
            if (this.p5.keyIsDown(80)) {
              if (this.myFarm.ostriches.total !== field.contents.length) {
                field.placeOstrich(this.x + 50, this.y + 50, this.myFarm);
                this.myFarm.ostriches.total -= 1;
                this.myFarm.usedOstrich.total += 1;
              }
            }
          }
          if (field.fieldName === FieldClass.Grazing) {
            if (this.p5.keyIsDown(90)) {
              field.fieldName = FieldClass.PettingZoo;
              field.fieldDecor = "#cb4154";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area to a petting zoo for ostriches at a cost of £10000"
              );
            }
          }
          if (field.fieldName === FieldClass.PettingZoo) {
            if (this.p5.keyIsDown(88)) {
              field.fieldName = FieldClass.Grazing;
              field.fieldDecor = "#065535";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area back to grazing for ostriches at a cost of £10000"
              );
            }
            this.budget += 0.1;
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Salmon") {
          if (this.myFarm.salmons.total > 0) {
            if (this.p5.keyIsDown(71)) {
              if (this.myFarm.salmons.total !== field.contents.length) {
                field.placeSalmon(this.x + 50, this.y + 50, this.myFarm);
                this.myFarm.salmons.total -= 1;
                this.myFarm.usedSalmon.total += 1;
              }
            }
          }
          if (field.fieldName === FieldClass.FishFarm) {
            if (this.p5.keyIsDown(90)) {
              field.fieldName = FieldClass.PettingZoo;
              field.fieldDecor = "#cb4154";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area to a petting zoo for salmons at a cost of £10000"
              );
            }
          }
          if (field.fieldName === FieldClass.PettingZoo) {
            if (this.p5.keyIsDown(88)) {
              field.fieldName = FieldClass.FishFarm;
              field.fieldDecor = "#065535";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area back to a fishfarm for salmons at a cost of £10000"
              );
            }
            this.budget += 0.1;
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Duck") {
          if (this.myFarm.ducks.total > 0) {
            if (this.p5.keyIsDown(72)) {
              if (this.myFarm.ducks.total !== field.contents.length) {
                field.placeDuck(this.x + 50, this.y + 50, this.myFarm);
                this.myFarm.ducks.total -= 1;
                this.myFarm.usedDuck.total += 1;
              }
            }
          }
          if (field.fieldName === FieldClass.Lakeland) {
            if (this.p5.keyIsDown(90)) {
              field.fieldName = FieldClass.PettingZoo;
              field.fieldDecor = "#cb4154";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area to a petting zoo for ducks at a cost of £10000"
              );
            }
          }
          if (field.fieldName === FieldClass.PettingZoo) {
            if (this.p5.keyIsDown(88)) {
              field.fieldName = FieldClass.Lakeland;
              field.fieldDecor = "#065535";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area back to lakeland for ducks at a cost of £10000"
              );
            }
            this.budget += 0.1;
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Goose") {
          if (this.myFarm.geese.total > 0) {
            if (this.p5.keyIsDown(74)) {
              if (this.myFarm.geese.total !== field.contents.length) {
                field.placeGoose(this.x + 50, this.y + 50, this.myFarm);
                this.myFarm.geese.total -= 1;
                this.myFarm.usedGoose.total += 1;
              }
            }
          }
          if (field.fieldName === FieldClass.Lakeland) {
            if (this.p5.keyIsDown(90)) {
              field.fieldName = FieldClass.PettingZoo;
              field.fieldDecor = "#cb4154";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area to a petting zoo for geese at a cost of £10000"
              );
            }
          }
          if (field.fieldName === FieldClass.PettingZoo) {
            if (this.p5.keyIsDown(88)) {
              field.fieldName = FieldClass.Lakeland;
              field.fieldDecor = "#065535";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area back to lakeland for geese at a cost of £10000"
              );
            }
            this.budget += 0.1;
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Llama") {
          if (this.myFarm.llamas.total > 0) {
            if (this.p5.keyIsDown(75)) {
              if (this.myFarm.llamas.total !== field.contents.length) {
                field.placeLlama(this.x + 50, this.y + 50, this.myFarm);
                this.myFarm.llamas.total -= 1;
                this.myFarm.usedLlama.total += 1;
              }
            }
          }
          if (field.fieldName === FieldClass.Grazing) {
            if (this.p5.keyIsDown(90)) {
              field.fieldName = FieldClass.PettingZoo;
              field.fieldDecor = "#cb4154";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area to a petting zoo for llamas at a cost of £10000"
              );
            }
          }
          if (field.fieldName === FieldClass.PettingZoo) {
            if (this.p5.keyIsDown(88)) {
              field.fieldName = FieldClass.Grazing;
              field.fieldDecor = "#065535";
              this.budget = this.budget - 10000;
              alert(
                "You have changed this area back to grazing for llamas at a cost of £10000"
              );
            }
            this.budget += 0.1;
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Cabbage") {
          if (this.myFarm.cabbageSeeds.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              field.plantCabbage(this.x + 50, this.y + 50, this.myFarm);
              this.myFarm.cabbageSeeds.total -= 1;
              this.myFarm.cabbages.total += 1;
            }
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Carrot") {
          if (this.myFarm.carrotSeeds.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              field.plantCarrot(this.x + 50, this.y + 50, this.myFarm);
              this.myFarm.carrotSeeds.total -= 1;
              this.myFarm.carrots.total += 1;
            }
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Kale") {
          if (this.myFarm.kaleSeeds.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              field.plantKale(this.x + 50, this.y + 50, this.myFarm);
              this.myFarm.kaleSeeds.total -= 1;
              this.myFarm.kales.total += 1;
            }
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Lettuce") {
          if (this.myFarm.lettuceSeeds.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              field.plantLettuce(this.x + 50, this.y + 50, this.myFarm);
              this.myFarm.lettuceSeeds.total -= 1;
              this.myFarm.lettuces.total += 1;
            }
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Pea") {
          if (this.myFarm.peaSeeds.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              field.plantPea(this.x + 50, this.y + 50, this.myFarm);
              this.myFarm.peaSeeds.total -= 1;
              this.myFarm.peas.total += 1;
            }
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Potato") {
          if (this.myFarm.potatoSeeds.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              field.plantPotato(this.x + 50, this.y + 50, this.myFarm);
              this.myFarm.potatoSeeds.total -= 1;
              this.myFarm.potatoes.total += 1;
            }
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Pumpkin") {
          if (this.myFarm.pumpkinSeeds.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              field.plantPumpkin(this.x + 50, this.y + 50, this.myFarm);
              this.myFarm.pumpkinSeeds.total -= 1;
              this.myFarm.pumpkins.total += 1;
            }
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Rapeseed") {
          if (this.myFarm.rapeseedSeeds.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              field.plantRapeseed(this.x + 50, this.y + 50, this.myFarm);
              this.myFarm.rapeseedSeeds.total -= 1;
              this.myFarm.rapeseeds.total += 1;
            }
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Sugarbeet") {
          if (this.myFarm.sugarbeetSeeds.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              field.plantSugarbeet(this.x + 50, this.y + 50, this.myFarm);
              this.myFarm.sugarbeetSeeds.total -= 1;
              this.myFarm.sugarbeets.total += 1;
            }
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Wheat") {
          if (this.myFarm.wheatSeeds.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              field.plantWheat(this.x + 50, this.y + 50, this.myFarm);
              this.myFarm.wheatSeeds.total -= 1;
              this.myFarm.wheats.total += 1;
            }
          }
        }
        if (!field.contents[0] || field.contents[0].name === "GasGenerator") {
          if (this.myFarm.gasGenerators.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              field.placeGasGenerator(this.x + 50, this.y + 50, this.myFarm);
              this.myFarm.gasGenerators.total -= 1;
              this.myFarm.gasGenerator.total += 1;
            }
          }
        }
        if (!field.contents[0] || field.contents[0].name === "SolarPanel") {
          if (this.myFarm.solarPanels.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              field.placeSolarPanel(this.x + 50, this.y + 50, this.myFarm);
              this.myFarm.solarPanels.total -= 1;
              this.myFarm.solarPanel.total += 1;
            }
          }
        }
      } else {
        field.farmerPresent = false;
      }
    }
    if (
      this.localMarket.containsPoint(this.x + this.height, this.y + this.width)
    ) {
      this.farmerCurrentLocation = this.localMarket;
      this.localMarket.farmerPresent = true;
    } else {
      this.localMarket.farmerPresent = false;
    }
    if (this.currentLocation && this.currentLocation.contents) {
      for (var item of this.currentLocation.contents) {
        if (item.containsPoint(this.x + this.height, this.y + this.width)) {
          item.farmerPresent = true;
        } else {
          item.farmerPresent = false;
        }
      }
    }
  }

  public draw() {
    this.update();
    this.getCurrentLocation();
    var bobAmount = Math.sin(this.p5.millis() / 60) * 3;
    let that = this;
    this.updateUI({ farmer: that });
    this.p5.image(
      this.p5Img,
      this.x,
      this.y + bobAmount,
      this.width,
      this.height
    );
  }

  set farm(farm: Farm) {
    this.myFarm = farm;
  }

  set market(market: Market) {
    this.localMarket = market;
  }
}

export default Farmer;
