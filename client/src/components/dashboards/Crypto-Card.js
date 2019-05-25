import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import withUnmounted from '@ishawnwang/withunmounted';
import "./CryptoCard.css";

class CryptoCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      symbol: props.symbol,
      logo: props.logo,
      price: null,
      lastPrice: null,
    };

    this.pollPrice = this.pollPrice.bind(this);
  }

  hasUnmounted = false;

  componentDidMount() {
    this.pollPrice();
    setInterval(this.pollPrice, 10000);
  }

  pollPrice() {
    console.log("polling for new price");
    const { symbol } = this.state;
    fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=${symbol},USD`
    )
      .then(resp => resp.json())
      .then(json => { if (this.hasUnmounted) {
        return;
      }
        this.setState(prevState => ({
          price: json.USD,
          lastPrice:
            prevState.price !== json.USD
              ? prevState.price
              : prevState.lastPrice,
        }));
      });
  }

  priceChange(lastPrice, price) {
    const diff = lastPrice - price;
    const change = diff / lastPrice;
    const percent = change * 100;
    return (change === -Infinity ? 0 : percent).toFixed(3);
  }

  render() {
    const { name, symbol, price, logo, lastPrice } = this.state;
    const gainloss = lastPrice > price ? "Loss" : "Gain";

    return (
      <div className={`Card ${gainloss}`}>
        <div className="Top">
          <div className="Name">
            {name}
            <span>({symbol})</span>
          </div>

          <div className={`Percentage ${gainloss}`}>
            {this.priceChange(lastPrice, price)}%
          </div>
        </div>

        <div className="Bottom">
          <div className="Logo">
            <img src={`${logo}`} alt={symbol} />
          </div>

          <div className={`Price ${gainloss}`}>
            ${price}
            <span className={`Triangle`} />
          </div>
        </div>
      </div>
    );
  }
}

export default withUnmounted(CryptoCard);
