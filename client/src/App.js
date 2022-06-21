import { Component } from "react";
import ProductsData from "./Products/ProductsData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDescription from "./DescriptionPage/ProductDescription";
import Cart from "./Cart/Cart";
class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<ProductsData />} />
          <Route path="/description" element={<ProductDescription />} />
          <Route path="/card" element={<Cart />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
