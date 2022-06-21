import React, { Component } from "react";
import CategoryContent from "../Content/CategoryContent";

class ProductsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query {
          category {
            name
            products {
              id
              name
              inStock
              gallery
              description
              category
              attributes {
                id
                name
                type
                items{
                  displayValue
                  value
                  id
                }
              }
              prices{
                currency{
                    label
                    symbol
                }
                amount
              }
              brand
            }
          }
        }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          products: data.data.category.products,
        });
      });
  }
  render() {
    let { products } = this.state;
    return (
      <div>
        <CategoryContent products={products} />
      </div>
    );
  }
}

export default ProductsData;
