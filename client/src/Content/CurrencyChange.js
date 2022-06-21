import "./CategoryContent";
import { Component } from "react";

class CurrencyChange extends Component {
  render() {
    return (
      <div className="Currency" onMouseLeave={this.props.SetCurrencyRender}>
        <div onClick={this.props.SelectedPrice} id={0}>
          $ USD
        </div>
        <div onClick={this.props.SelectedPrice} id={1}>
          £ GBP
        </div>
        <div onClick={this.props.SelectedPrice} id={2}>
          A$ AUD
        </div>
        <div onClick={this.props.SelectedPrice} id={3}>
          ¥ JPY
        </div>
        <div onClick={this.props.SelectedPrice} id={4}>
          ₽ RUB
        </div>
      </div>
    );
  }
}

export default CurrencyChange;
