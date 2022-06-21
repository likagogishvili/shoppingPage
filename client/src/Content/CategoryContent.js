import "./CategoryContent.css";
import { Component } from "react";
import LandingPage from "../LandingPage/LandingPage";
import CategoryHeader from "./CategoryHeader";
import CurrencyChange from "./CurrencyChange";

class CategoryContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "All",
      setSelectedPrice: 0,
      currencyRender: false,
      cardRender: false,
    };
    this.CategoryChange = this.CategoryChange.bind(this);
    this.SelectedPrice = this.SelectedPrice.bind(this);
    this.SetCurrencyRender = this.SetCurrencyRender.bind(this);
    this.SetCardRender = this.SetCardRender.bind(this);
  }

  CategoryChange(event) {
    this.setState({
      category: event.target.id,
    });
  }

  SelectedPrice(event) {
    this.setState({
      setSelectedPrice: event.target.id,
    });
  }
  SetCurrencyRender() {
    this.setState((prevState) => ({
      currencyRender: !prevState.currencyRender,
    }));
  }
  SetCardRender() {
    this.setState((prevState) => ({
      cardRender: !prevState.cardRender,
    }));
  }
  render() {
    return (
      <div>
        <CategoryHeader
          category={this.state.category}
          CategoryChange={this.CategoryChange}
          SetCurrencyRender={this.SetCurrencyRender}
          SetCardRender={this.SetCardRender}
        />
        {this.state.currencyRender && (
          <CurrencyChange
            selectedPrice={this.state.setSelectedPrice}
            SelectedPrice={this.SelectedPrice}
            SetCurrencyRender={this.SetCurrencyRender}
          />
        )}
        <LandingPage
          category={this.state.category}
          products={this.props.products}
          selectedPrice={this.state.setSelectedPrice}
          cardRender={this.state.cardRender}
        />
      </div>
    );
  }
}

export default CategoryContent;
