import "./Cart.css";
import { Component } from "react";

class Cart extends Component {
  render() {
    let sumOfSelected = 0;
    console.log(this.props.selected.length);
    for (let i = 0; i < this.props.selected.length; i++) {
      sumOfSelected += this.props.selected[i].price;
    }
    let taxOfSelected = (sumOfSelected * 21) / 100;

    const products = this.props.selected.map((product) => {
      return (
        <div
          key={Math.floor(Math.random() * 1000 + 1)}
          className="CardParentDiv"
        >
          <div className="Card_main_content">
            <div className="desccription_container_cart">
              <p className="desccription_container_name">{product.name}</p>
              <p>{product.category}</p>
              <div>
                <p className="desctiption_p">Price:</p>
                <p>
                  {product.currency}
                  {product.price}
                </p>
                {product.size !== "" && <p>Size: {product.size}</p>}
                {product.color !== "" && <p>Color: {product.color}</p>}
              </div>
            </div>
          </div>
          <div className="QuantityAndImg">
            <div className="Quantity">
              <button onClick={this.props.Addquantity}>+</button>
              <div>{this.props.quantity}</div>
              <button>-</button>
            </div>
            <div className="image_card">
              <img src={product.image} alt="" width={"100%"} height={"100%"} />
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="CardPage">
        <div className="CartHeading">
          <p>Cart</p>
        </div>
        {products}
        <div className="order">
          <div>Tax 21%: {taxOfSelected}</div>
          <div>Quality: {this.props.selected.length} </div>
          <div>Total: {sumOfSelected} </div>
          <button onClick={() => window.location.reload(false)}>Order</button>
        </div>
      </div>
    );
  }
}

export default Cart;
