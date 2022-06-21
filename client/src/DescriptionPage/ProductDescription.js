import "./ProductDescription.css";
import { Component } from "react";
import SizeAndColor from "./SizeAndColor";

class ProductDescription extends Component {
  render() {
    const selectedProductDescription = this.props.products.filter(
      (product) =>
        product.name === Object.values(this.props.selectedProduct).toString()
    );
    const images = selectedProductDescription[0].gallery.map((img) => {
      return (
        <img key={Math.floor(Math.random() * 1000 + 1)} src={img} alt="" />
      );
    });
    return (
      <div className="product_Description_container">
        <div className="small_pictures">{images}</div>
        <div className="main_picture">
          <img src={selectedProductDescription[0].gallery[0]} alt="" />
        </div>
        <div className="desccription_container">
          <p className="desccription_container_name">
            {selectedProductDescription[0].name}
          </p>
          <p>{selectedProductDescription[0].category}</p>

          <SizeAndColor
            selectedProduct={this.props.selectedProduct}
            products={this.props.products}
            SetSize={this.props.SetSize}
            SetColor={this.props.SetColor}
            selectedSize={this.props.selectedSize}
            selectedColor={this.props.selectedColor}
          />
          <div>
            <p className="desctiption_p">Price:</p>
            <p>
              {
                selectedProductDescription[0].prices[this.props.selectedPrice]
                  .currency.symbol
              }
              {
                selectedProductDescription[0].prices[this.props.selectedPrice]
                  .amount
              }
            </p>
          </div>

          <button onClick={this.props.AddSelectedProduct}>Add To Cart</button>
          <div
            dangerouslySetInnerHTML={{
              __html: selectedProductDescription[0].description,
            }}
            className="desctiption_details"
          />
        </div>
      </div>
    );
  }
}

export default ProductDescription;
