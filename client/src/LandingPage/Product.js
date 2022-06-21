import "./Product.css";
import { Component } from "react";
class Product extends Component {
  render() {
    return (
      <div className="product_cont_child">
        <img
          onClick={this.props.SetSelectedProduct}
          id={this.props.product.name}
          src={this.props.product.gallery[0]}
          className={`product_img ${
            this.props.product.inStock ? "" : "product_img_blured"
          }`}
          alt=""
        />

        <p className="centered">
          {" "}
          {!this.props.product.inStock && "Out Of Stock"}
        </p>

        <div
          onClick={this.props.SetSelectedProduct}
          id={this.props.product.name}
        >
          {this.props.product.name}
        </div>
        <div
          onClick={this.props.SetSelectedProduct}
          id={this.props.product.name}
        >
          {this.props.product.prices[this.props.selectedPrice].currency.symbol}
          {this.props.product.prices[this.props.selectedPrice].amount}
        </div>
      </div>
    );
  }
}

export default Product;
