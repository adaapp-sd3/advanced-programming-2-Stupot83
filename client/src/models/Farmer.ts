import Drawable from "./abstract/Drawable";
import Farm from "./Farm";
import Market from "./Market";

class Farmer extends Drawable {
  myFarm!: Farm;
  localMarket!: Market;
  budget: number = 1000000;
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
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              if (this.myFarm.cows.total != field.contents.length) {
                field.placeCow(this.x, this.y, this.myFarm);
              }
              else if (this.myFarm.cows.total === field.contents.length) {
                alert("You have placed all available cows in this area")
            }
          }
        }
      }
        if (!field.contents[0] || field.contents[0].name === "Sheep") {
          if (this.myFarm.sheep.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              if (this.myFarm.sheep.total != field.contents.length) {
                field.placeSheep(this.x + 50, this.y + 50, this.myFarm);
              }
              else if (this.myFarm.sheep.total === field.contents.length) {
                alert("You have placed all available sheep in this area")
            }
          }
        }
      }
        if (!field.contents[0] || field.contents[0].name === "Chicken") {
          if (this.myFarm.chickens.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              if (this.myFarm.chickens.total != field.contents.length) {
                field.placeChicken(this.x + 50, this.y + 50, this.myFarm);
              }
              else if (this.myFarm.chickens.total === field.contents.length) {
                alert("You have placed all available chickens in this area")
            }
          }
        }
      }
        if (!field.contents[0] || field.contents[0].name === "Pig") {
          if (this.myFarm.pigs.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              if (this.myFarm.pigs.total != field.contents.length) {
                field.placePig(this.x + 50, this.y + 50, this.myFarm);
              }
              else if (this.myFarm.pigs.total === field.contents.length) {
                alert("You have placed all available pigs in this area")
            }
          }
        }
      }
        if (!field.contents[0] || field.contents[0].name === "Crocodile") {
          if (this.myFarm.crocodiles.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              if (this.myFarm.crocodiles.total != field.contents.length) {
                field.placeCrocodile(this.x + 50, this.y + 50, this.myFarm);
              }
              else if (this.myFarm.crocodiles.total === field.contents.length) {
                alert("You have placed all available crocodiles in this area")
            }
          }
        }
      }
        if (!field.contents[0] || field.contents[0].name === "Ostrich") {
          if (this.myFarm.ostriches.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              if (this.myFarm.ostriches.total != field.contents.length) {
                field.placeOstrich(this.x + 50, this.y + 50, this.myFarm);
              }
              else if (this.myFarm.ostriches.total === field.contents.length) {
                alert("You have placed all available ostriches in this area")
            }
          }
        }
      }
        if (!field.contents[0] || field.contents[0].name === "Salmon") {
          if (this.myFarm.salmons.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              if (this.myFarm.salmons.total != field.contents.length) {
                field.placeSalmon(this.x + 50, this.y + 50, this.myFarm);
              }
              else if (this.myFarm.salmons.total === field.contents.length) {
                alert("You have placed all available salmons in this area")
              }
            }
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Duck") {
          if (this.myFarm.ducks.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              if (this.myFarm.ducks.total != field.contents.length) {
                field.placeDuck(this.x + 50, this.y + 50, this.myFarm);
              }
              else if (this.myFarm.ducks.total === field.contents.length) {
                alert("You have placed all available ducks in this area")
              }
            }
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Goose") {
          if (this.myFarm.geese.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              if (this.myFarm.geese.total != field.contents.length) {
                field.placeGoose(this.x + 50, this.y + 50, this.myFarm);
              }
              else if (this.myFarm.geese.total === field.contents.length) {
                alert("You have placed all available geese in this area")
              }
            }
          }
        }
        if (!field.contents[0] || field.contents[0].name === "Llama") {
          if (this.myFarm.llamas.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              if (this.myFarm.llamas.total != field.contents.length) {
                field.placeLlama(this.x + 50, this.y + 50, this.myFarm);
              }
              else if (this.myFarm.llamas.total === field.contents.length) {
                alert("You have placed all available llamas in this area")
              }
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
        if (!field.contents[0] || field.contents[0].name === "Pumpkin") {
          if (this.myFarm.pumpkinSeeds.total > 0) {
            if (this.p5.keyIsDown(this.p5.ENTER)) {
              field.plantPumpkin(this.x + 50, this.y + 50, this.myFarm);
              this.myFarm.pumpkinSeeds.total -= 1;
              this.myFarm.pumpkins.total += 1;
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
