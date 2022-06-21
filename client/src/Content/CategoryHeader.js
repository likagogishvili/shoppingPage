import { Component } from "react";
import a_logo from "../Img/a-logo.png";
import cart from "../Img/EmptyCart.png";
import frame from "../Img/Frame.png";
import Vector from "../Img/Vector.png";

class CategoryHeader extends Component {
  render() {
    return (
      <header>
        <div className="categories">
          <div
            id="Clothes"
            onClick={this.props.CategoryChange}
            style={{
              color: this.props.category === "Clothes" ? "#5DCE7B" : null,
              borderBottom:
                this.props.category === "Clothes" ? "solid 1px #5DCE7B" : null,
            }}
          >
            Clothes
          </div>
          <div
            id="Tech"
            onClick={this.props.CategoryChange}
            style={{
              color: this.props.category === "Tech" ? "#5DCE7B" : null,
              borderBottom:
                this.props.category === "Tech" ? "solid 1px #5DCE7B" : null,
            }}
          >
            Tech
          </div>
        </div>
        <div className="categorie-Img">
          <img src={a_logo} alt="" />
        </div>
        <div className="categories-currency-buy">
          <div onMouseOver={this.props.SetCurrencyRender}>
            <img src={frame} alt="" />
            <img src={Vector} alt="" />
          </div>
          <img src={cart} alt="" onClick={this.props.SetCardRender} />
        </div>
      </header>
    );
  }
}
export default CategoryHeader;
