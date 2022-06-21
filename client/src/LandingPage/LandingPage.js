import { Component } from "react";
import Product from "./Product";
import "./Product.css";
import ProductDescription from "../DescriptionPage/ProductDescription";
import Cart from "../Cart/Cart";
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: "",
      renderDescription: false,
      selectedSize: "",
      selectedColor: "",
      selected: [],
      quantity: 1,
    };
    this.SetSelectedProduct = this.SetSelectedProduct.bind(this);
    this.SetSize = this.SetSize.bind(this);
    this.SetColor = this.SetColor.bind(this);
    this.AddSelectedProduct = this.AddSelectedProduct.bind(this);
    this.AddSelectedProduct = this.AddSelectedProduct.bind(this);
    this.Addquantity = this.Addquantity.bind(this);
  }

  SetSelectedProduct(event) {
    this.setState({
      selectedProduct: [event.target.id],
      renderDescription: true,
    });
  }
  SetSize(event) {
    this.setState({ selectedSize: event.target.id });
  }
  SetColor(event) {
    this.setState({ selectedColor: event.target.id });
  }
  AddSelectedProduct() {
    const selectedProductDescription = this.props.products.filter(
      (product) =>
        product.name === Object.values(this.state.selectedProduct).toString()
    );

    if (selectedProductDescription[0].inStock) {
      this.setState({
        renderDescription: false,
        selected: [
          ...this.state.selected,
          {
            name: this.state.selectedProduct,
            category: selectedProductDescription[0].category,
            currency:
              selectedProductDescription[0].prices[this.props.selectedPrice]
                .currency.symbol,
            price:
              selectedProductDescription[0].prices[this.props.selectedPrice]
                .amount,
            image: selectedProductDescription[0].gallery[0],

            color: this.state.selectedColor,
            size: this.state.selectedSize,
          },
        ],
      });
    }
    if (!selectedProductDescription[0].inStock) alert("Not In Stock");
  }
  Addquantity() {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  }
  render() {
    const rendProducts = this.props.products
      .filter((product) => {
        if (this.props.category.toLowerCase() === "all") {
          return product;
        }
        if (product.category === this.props.category.toLowerCase()) {
          return product;
        }
        return 0;
      })

      .map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            selectedPrice={this.props.selectedPrice}
            SetSelectedProduct={this.SetSelectedProduct}
          />
        );
      });

    return (
      <div>
        {!this.props.cardRender ? (
          !this.state.renderDescription ? (
            <div>
              <section>{this.props.category}</section>
              <div className="product_cont">{rendProducts}</div>
            </div>
          ) : (
            <ProductDescription
              selectedPrice={this.props.selectedPrice}
              products={this.props.products}
              selectedProduct={this.state.selectedProduct}
              RenderPrevius={this.RenderPrevius}
              AddSelectedProduct={this.AddSelectedProduct}
              SetSize={this.SetSize}
              SetColor={this.SetColor}
              selectedSize={this.state.selectedSize}
              selectedColor={this.state.selectedColor}
            />
          )
        ) : (
          <Cart
            selected={this.state.selected}
            selectedProduct={this.state.selectedProduct}
            products={this.props.products}
            SetSize={this.SetSize}
            SetColor={this.SetColor}
            selectedSize={this.state.selectedSize}
            selectedColor={this.state.selectedColor}
            Addquantity={this.Addquantity}
            quantity={this.state.quantity}
          />
        )}
      </div>
    );
  }
}

export default LandingPage;
