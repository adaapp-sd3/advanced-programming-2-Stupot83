import React, { Component } from "react";
import "./FieldDashboard.css";

class FieldDashboard extends Component {
  getMeat = meat => {
    const arrlen = this.props.field.contents.length;
    const arrmid = arrlen / 2;
    const arrqtr = arrlen * 0.75;

    switch (meat) {
      case "beef":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldBeef();
        }
        break;

      case "halfBeef":
        const halfCows = this.props.field.contents[0].farm.cows;
        for (var i = arrlen - 1; i > arrmid; i--) {
          halfCows.objects[i].yieldBeef();
        }
        break;

      case "quarterBeef":
        const quarterCows = this.props.field.contents[0].farm.cows;
        for (var i = arrlen - 1; i > arrqtr; i--) {
          quarterCows.objects[i].yieldBeef();
        }
        break;

      case "lamb":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldLamb();
        }
        break;

      case "halfLamb":
        const halfSheep = this.props.field.contents[0].farm.sheep;
        for (var i = arrlen - 1; i > arrmid; i--) {
          halfSheep.objects[i].yieldLamb();
        }
        break;

      case "quarterLamb":
        const quarterSheep = this.props.field.contents[0].farm.sheep;
        for (var i = arrlen - 1; i > arrqtr; i--) {
          quarterSheep.objects[i].yieldLamb();
        }
        break;

      case "chicken":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldChicken();
        }
        break;

      case "halfChicken":
        const halfChickens = this.props.field.contents[0].farm.chickens;
        for (var i = arrlen - 1; i > arrmid; i--) {
          halfChickens.objects[i].yieldChicken();
        }
        break;

      case "quarterChicken":
        const quarterChicken = this.props.field.contents[0].farm.chickens;
        for (var i = arrlen - 1; i > arrqtr; i--) {
          quarterChicken.objects[i].yieldChicken();
        }
        break;

      case "pork":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldPork();
        }
        break;

      case "halfPork":
        const halfPigs = this.props.field.contents[0].farm.pigs;
        for (var i = arrlen - 1; i > arrmid; i--) {
          halfPigs.objects[i].yieldPork();
        }
        break;

      case "quarterPork":
        const quarterPigs = this.props.field.contents[0].farm.pigs;
        for (var i = arrlen - 1; i > arrqtr; i--) {
          quarterPigs.objects[i].yieldPork();
        }
        break;

      case "crocodile":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldCrocodile();
        }
        break;

      case "halfCrocodile":
        const halfCrocodiles = this.props.field.contents[0].farm.crocodiles;
        for (var i = arrlen - 1; i > arrmid; i--) {
          halfCrocodiles.objects[i].yieldCrocodile();
        }
        break;

      case "quarterCrocodile":
        const quarterCrocodiles = this.props.field.contents[0].farm.crocodiles;
        for (var i = arrlen - 1; i > arrqtr; i--) {
          quarterCrocodiles.objects[i].yieldCrocodile();
        }
        break;

      case "ostrich":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldOstrich();
        }
        break;

      case "halfOstrich":
        const halfOstriches = this.props.field.contents[0].farm.ostriches;
        for (var i = arrlen - 1; i > arrmid; i--) {
          halfOstriches.objects[i].yieldOstrich();
        }
        break;

      case "quarterOstrich":
        const quarterOstriches = this.props.field.contents[0].farm.ostriches;
        for (var i = arrlen - 1; i > arrqtr; i--) {
          quarterOstriches.objects[i].yieldOstrich();
        }
        break;

      case "salmon":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldSalmon();
        }
        break;

      case "halfSalmon":
        const halfSalmons = this.props.field.contents[0].farm.salmons;
        for (var i = arrlen - 1; i > arrmid; i--) {
          halfSalmons.objects[i].yieldSalmon();
        }
        break;

      case "quarterSalmon":
        const quarterSalmons = this.props.field.contents[0].farm.salmons;
        for (var i = arrlen - 1; i > arrqtr; i--) {
          quarterSalmons.objects[i].yieldSalmon();
        }
        break;

      case "duck":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldDuck();
        }
        break;

      case "halfDuck":
        const halfDucks = this.props.field.contents[0].farm.ducks;
        for (var i = arrlen - 1; i > arrmid; i--) {
          halfDucks.objects[i].yieldDuck();
        }
        break;

      case "quarterDuck":
        const quarterDucks = this.props.field.contents[0].farm.ducks;
        for (var i = arrlen - 1; i > arrqtr; i--) {
          quarterDucks.objects[i].yieldDuck();
        }
        break;

      case "goose":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldGoose();
        }
        break;

      case "halfGoose":
        const halfGeese = this.props.field.contents[0].farm.geese;
        for (var i = arrlen - 1; i > arrmid; i--) {
          halfGeese.objects[i].yieldGoose();
        }
        break;

      case "quarterGoose":
        const quarterGeese = this.props.field.contents[0].farm.geese;
        for (var i = arrlen - 1; i > arrqtr; i--) {
          quarterGeese.objects[i].yieldGoose();
        }
        break;

      case "llama":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldLlama();
        }
        break;

      case "halfLlama":
        const halfLlamas = this.props.field.contents[0].farm.llamas;
        for (var i = arrlen - 1; i > arrmid; i--) {
          halfLlamas.objects[i].yieldLlama();
        }
        break;

      case "quarterLlama":
        const quarterLlamas = this.props.field.contents[0].farm.llamas;
        for (var i = arrlen - 1; i > arrqtr; i--) {
          quarterLlamas.objects[i].yieldLlama();
        }
        break;

      default:
    }
  };

  getDairy = dairy => {
    switch (dairy) {
      case "milk":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldMilk();
        }
        break;

      case "eggs":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldEggs();
        }
        break;

      case "crocEggs":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldCrocEggs();
        }
        break;

      case "ostrichEggs":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldOstrichEggs();
        }
        break;

      case "duckEggs":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldDuckEggs();
        }
        break;

      case "gooseEggs":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldGooseEggs();
        }
        break;

      default:
    }
  };

  getMisc = misc => {
    switch (misc) {
      case "wool":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldWool();
        }
        break;

      case "llamaWool":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldLlamaWool();
        }
        break;

      case "greenGas":
        break;

      case "solarPanels":
        break;

      default:
    }
  };

  render() {
    return (
      <div className="FieldDashboard">
        <h2>Field</h2>
        {this.props.field.contents[0] && (
          <p>
            In this field you have {this.props.field.contents.length}{" "}
            {this.props.field.contents[0].name}s
            {this.props.field.contents[0].name === "Cow" && (
              <button onClick={() => this.getMeat("beef")}>Collect beef</button>
            )}
            {this.props.field.contents[0].name === "Cow" && (
              <button onClick={() => this.getMeat("halfBeef")}>
                Collect 1/2 beef
              </button>
            )}
             {this.props.field.contents[0].name === "Cow" && (
              <button onClick={() => this.getMeat("quarterBeef")}>
                Collect 1/4 beef
              </button>
            )}
            {this.props.field.contents[0].name === "Sheep" && (
              <button onClick={() => this.getMeat("lamb")}>Collect lamb</button>
            )}
            {this.props.field.contents[0].name === "Sheep" && (
              <button onClick={() => this.getMeat("halfLamb")}>
                Collect 1/2 lamb
              </button>
            )}
             {this.props.field.contents[0].name === "Sheep" && (
              <button onClick={() => this.getMeat("quarterLamb")}>
                Collect 1/4 lamb
              </button>
            )}
            {this.props.field.contents[0].name === "Chicken" && (
              <button onClick={() => this.getMeat("chicken")}>
                Collect chicken
              </button>
            )}
            {this.props.field.contents[0].name === "Chicken" && (
              <button onClick={() => this.getMeat("halfChicken")}>
                Collect 1/2 chicken
              </button>
            )}
             {this.props.field.contents[0].name === "Chicken" && (
              <button onClick={() => this.getMeat("quarterChicken")}>
                Collect 1/4 chicken
              </button>
            )}
            {this.props.field.contents[0].name === "Pig" && (
              <button onClick={() => this.getMeat("pork")}>Collect pork</button>
            )}
            {this.props.field.contents[0].name === "Pig" && (
              <button onClick={() => this.getMeat("halfPork")}>
                Collect 1/2 pork
              </button>
            )}
             {this.props.field.contents[0].name === "Pig" && (
              <button onClick={() => this.getMeat("quarterPork")}>
                Collect 1/4 pork
              </button>
            )}
            {this.props.field.contents[0].name === "Crocodile" && (
              <button onClick={() => this.getMeat("crocodile")}>
                Collect crocodile
              </button>
            )}
            {this.props.field.contents[0].name === "Crocodile" && (
              <button onClick={() => this.getMeat("halfCrocodile")}>
                Collect 1/2 crocodile
              </button>
            )}
            {this.props.field.contents[0].name === "Crocodile" && (
              <button onClick={() => this.getMeat("quarterCrocodile")}>
                Collect 1/4 crocodile
              </button>
            )}
            {this.props.field.contents[0].name === "Ostrich" && (
              <button onClick={() => this.getMeat("ostrich")}>
                Collect ostrich
              </button>
            )}
            {this.props.field.contents[0].name === "Ostrich" && (
              <button onClick={() => this.getMeat("halfOstrich")}>
                Collect 1/2 ostrich
              </button>
            )}
            {this.props.field.contents[0].name === "Ostrich" && (
              <button onClick={() => this.getMeat("quarterOstrich")}>
                Collect 1/4 ostrich
              </button>
            )}
            {this.props.field.contents[0].name === "Salmon" && (
              <button onClick={() => this.getMeat("salmon")}>
                Collect salmon
              </button>
            )}
            {this.props.field.contents[0].name === "Salmon" && (
              <button onClick={() => this.getMeat("halfSalmon")}>
                Collect 1/2 salmon
              </button>
            )}
            {this.props.field.contents[0].name === "Salmon" && (
              <button onClick={() => this.getMeat("quarterSalmon")}>
                Collect 1/4 salmon
              </button>
            )}
            {this.props.field.contents[0].name === "Duck" && (
              <button onClick={() => this.getMeat("duck")}>Collect duck</button>
            )}
            {this.props.field.contents[0].name === "Duck" && (
              <button onClick={() => this.getMeat("halfDuck")}>
                Collect 1/2 duck
              </button>
            )}
            {this.props.field.contents[0].name === "Duck" && (
              <button onClick={() => this.getMeat("quarterDuck")}>
                Collect 1/4 duck
              </button>
            )}
            {this.props.field.contents[0].name === "Goose" && (
              <button onClick={() => this.getMeat("goose")}>
                Collect goose
              </button>
            )}
            {this.props.field.contents[0].name === "Goose" && (
              <button onClick={() => this.getMeat("halfGoose")}>
                Collect 1/2 goose
              </button>
            )}
             {this.props.field.contents[0].name === "Goose" && (
              <button onClick={() => this.getMeat("quarterGoose")}>
                Collect 1/4 goose
              </button>
            )}
            {this.props.field.contents[0].name === "Llama" && (
              <button onClick={() => this.getMeat("llama")}>
                Collect llama
              </button>
            )}
            {this.props.field.contents[0].name === "Llama" && (
              <button onClick={() => this.getMeat("halfLlama")}>
                Collect 1/2 llama
              </button>
            )}
            {this.props.field.contents[0].name === "Llama" && (
              <button onClick={() => this.getMeat("quarterLlama")}>
                Collect 1/4 llama
              </button>
            )}
            {this.props.field.contents[0].name === "Cow" && (
              <button onClick={() => this.getDairy("milk")}>
                Collect milk
              </button>
            )}
            {this.props.field.contents[0].name === "Chicken" && (
              <button onClick={() => this.getDairy("eggs")}>
                Collect eggs
              </button>
            )}
            {this.props.field.contents[0].name === "Crocodile" && (
              <button onClick={() => this.getDairy("crocEggs")}>
                Collect Crocodile eggs
              </button>
            )}
            {this.props.field.contents[0].name === "Ostrich" && (
              <button onClick={() => this.getDairy("ostrichEggs")}>
                Collect Ostrich eggs
              </button>
            )}
            {this.props.field.contents[0].name === "Duck" && (
              <button onClick={() => this.getDairy("duckEggs")}>
                Collect Duck eggs
              </button>
            )}
            {this.props.field.contents[0].name === "Goose" && (
              <button onClick={() => this.getDairy("gooseEggs")}>
                Collect Goose eggs
              </button>
            )}
            {this.props.field.contents[0].name === "Sheep" && (
              <button onClick={() => this.getMisc("wool")}>Collect wool</button>
            )}
            {this.props.field.contents[0].name === "Llama" && (
              <button onClick={() => this.getMisc("llamaWool")}>
                Collect llamaWool
              </button>
            )}
            {this.props.field.contents[0].name === "greenGas" && (
              <button onClick={() => this.getMisc("greenGas")}>
                Collect green gas
              </button>
            )}
            {this.props.field.contents[0].name === "gasGenerators" && (
              <button onClick={() => this.getMisc("gasGenerators")}>
                Recycle gasGenerators
              </button>
            )}
            {this.props.field.contents[0].name === "solarPanels" && (
              <button onClick={() => this.getMisc("solarPanels")}>
                Recycle solarPanels
              </button>
            )}
          </p>
        )}
        {this.props.field.contents.map((item, i) => (
          <>
            {item.showUI && (
              <div className="fieldItem">
                <h3>
                  <img src={item.imgUrl} alt={item.name} /> {item.name}
                </h3>
                <dl>
                  <dt>Hunger</dt>
                  <dd>{item.hunger}</dd>
                  <dt>Health</dt>
                  <dd>{item.health}</dd>
                </dl>
              </div>
            )}
          </>
        ))}
      </div>
    );
  }
}

export default FieldDashboard;
