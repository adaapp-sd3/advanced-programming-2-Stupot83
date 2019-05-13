import React, { Component } from "react";
import "./FieldDashboard.css";

class FieldDashboard extends Component {
  getMeat = meat => {
    switch (meat) {
      case "beef":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldBeef();
        }
        break;

      case "lamb":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldLamb();
        }
        break;

      case "chicken":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldChicken();
        }
        break;

      case "pork":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldPork();
        }
        break;

      case "crocodile":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldCrocodile();
        }
        break;

      case "ostrich":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldOstrich();
        }
        break;

      case "salmon":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldSalmon();
        }
        break;

      case "duck":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldDuck();
        }
        break;

      case "goose":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldGoose();
        }
        break;

      case "llama":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldLlama();
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
            {this.props.field.contents[0].name === "Sheep" && (
              <button onClick={() => this.getMeat("lamb")}>Collect lamb</button>
            )}
            {this.props.field.contents[0].name === "Chicken" && (
              <button onClick={() => this.getMeat("chicken")}>
                Collect chicken
              </button>
            )}
            {this.props.field.contents[0].name === "Pig" && (
              <button onClick={() => this.getMeat("pork")}>Collect pork</button>
            )}
            {this.props.field.contents[0].name === "Crocodile" && (
              <button onClick={() => this.getMeat("crocodile")}>
                Collect crocodile
              </button>
            )}
            {this.props.field.contents[0].name === "Ostrich" && (
              <button onClick={() => this.getMeat("ostrich")}>
                Collect ostrich
              </button>
            )}
            {this.props.field.contents[0].name === "Salmon" && (
              <button onClick={() => this.getMeat("salmon")}>
                Collect salmon
              </button>
            )}
            {this.props.field.contents[0].name === "Duck" && (
              <button onClick={() => this.getMeat("duck")}>Collect duck</button>
            )}
            {this.props.field.contents[0].name === "Goose" && (
              <button onClick={() => this.getMeat("goose")}>
                Collect goose
              </button>
            )}
            {this.props.field.contents[0].name === "Llama" && (
              <button onClick={() => this.getMeat("llama")}>
                Collect llama
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
            {this.props.field.contents[0].name === "solarPanels" && (
              <button onClick={() => this.getDairy("solarPanels")}>
                Recycle solar panels
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
