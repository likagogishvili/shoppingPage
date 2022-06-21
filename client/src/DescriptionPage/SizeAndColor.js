import "./ProductDescription.css";
import { Component } from "react";

class SizeAndColor extends Component {
  render() {
    const selectedProductDescription = this.props.products.filter(
      (product) =>
        product.name === Object.values(this.props.selectedProduct).toString()
    );

    if (selectedProductDescription[0].attributes.length === 1) {
      if (selectedProductDescription[0].attributes[0].name === "Size") {
        var sizes = selectedProductDescription[0].attributes[0].items.map(
          (size) => {
            return (
              <div
                key={size.id}
                id={size.value}
                onClick={this.props.SetSize}
                style={
                  size.value === this.props.selectedSize
                    ? {
                        background: "#000000",
                        color: "#f0f8ff",
                      }
                    : {}
                }
              >
                {size.value}
              </div>
            );
          }
        );
      }
      if (selectedProductDescription[0].attributes[0].name === "Color") {
        var colors = selectedProductDescription[0].attributes[0].items.map(
          (color) => {
            const colorStyle = {
              backgroundColor: color.value,
            };
            return (
              <div
                key={color.id}
                style={colorStyle}
                onClick={this.props.SetColor}
                id={color.value}
                className={`${
                  color.value === this.props.selectedColor
                    ? "desccription_container_color_perent_selected"
                    : ""
                }`}
              ></div>
            );
          }
        );
      }
    }

    if (selectedProductDescription[0].attributes.length === 2) {
      if (
        selectedProductDescription[0].attributes[0].name === "Size" ||
        selectedProductDescription[0].attributes[0].name === "Capacity"
      ) {
        sizes = selectedProductDescription[0].attributes[0].items.map(
          (size) => {
            return (
              <div
                key={size.id}
                id={size.value}
                onClick={this.props.SetSize}
                style={
                  size.value === this.props.selectedSize
                    ? {
                        background: "#000000",
                        color: "#f0f8ff",
                      }
                    : {}
                }
              >
                {size.value}
              </div>
            );
          }
        );
      }
      if (selectedProductDescription[0].attributes[0].name === "Color") {
        colors = selectedProductDescription[0].attributes[0].items.map(
          (color) => {
            const colorStyle = {
              backgroundColor: color.value.toString(),
            };
            return (
              <div
                key={color.id}
                style={colorStyle}
                onClick={this.props.SetColor}
                id={color.value}
                className={`${
                  color.value === this.props.selectedColor
                    ? "desccription_container_color_perent_selected"
                    : ""
                }`}
              ></div>
            );
          }
        );
      }
      if (
        selectedProductDescription[0].attributes[1].name === "Size" ||
        selectedProductDescription[0].attributes[1].name === "Capacity"
      ) {
        sizes = selectedProductDescription[0].attributes[1].items.map(
          (size) => {
            return (
              <div
                key={size.id}
                id={size.value}
                onClick={this.props.SetSize}
                style={
                  size.value === this.props.selectedSize
                    ? {
                        background: "#000000",
                        color: "#f0f8ff",
                      }
                    : {}
                }
              >
                {size.value}
              </div>
            );
          }
        );
      }
      if (selectedProductDescription[0].attributes[1].name === "Color") {
        colors = selectedProductDescription[0].attributes[1].items.map(
          (color) => {
            const colorStyle = {
              backgroundColor: color.value.toString(),
            };

            return (
              <div
                key={color.id}
                style={colorStyle}
                onClick={this.props.SetColor}
                id={color.value}
                className={`${
                  color.value === this.props.selectedColor
                    ? "desccription_container_color_perent_selected"
                    : ""
                }`}
              ></div>
            );
          }
        );
      }
    }

    if (selectedProductDescription[0].attributes.length === 3) {
      if (
        selectedProductDescription[0].attributes[0].name === "Size" ||
        selectedProductDescription[0].attributes[0].name === "Capacity"
      ) {
        sizes = selectedProductDescription[0].attributes[0].items.map(
          (size) => {
            return (
              <div
                key={size.id}
                id={size.value}
                onClick={this.props.SetSize}
                style={
                  size.value === this.props.selectedSize
                    ? {
                        background: "#000000",
                        color: "#f0f8ff",
                      }
                    : {}
                }
              >
                {size.value}
              </div>
            );
          }
        );
      }
      if (selectedProductDescription[0].attributes[0].name === "Color") {
        colors = selectedProductDescription[0].attributes[0].items.map(
          (color) => {
            const colorStyle = {
              backgroundColor: color.value.toString(),
            };
            return (
              <div
                key={color.id}
                style={colorStyle}
                onClick={this.props.SetColor}
                id={color.value}
                className={`${
                  color.value === this.props.selectedColor
                    ? "desccription_container_color_perent_selected"
                    : ""
                }`}
              ></div>
            );
          }
        );
      }
      if (
        selectedProductDescription[0].attributes[1].name === "Size" ||
        selectedProductDescription[0].attributes[1].name === "Capacity"
      ) {
        sizes = selectedProductDescription[0].attributes[1].items.map(
          (size) => {
            return (
              <div
                key={size.id}
                id={size.value}
                onClick={this.props.SetSize}
                style={
                  size.value === this.props.selectedSize
                    ? {
                        background: "#000000",
                        color: "#f0f8ff",
                      }
                    : {}
                }
              >
                {size.value}
              </div>
            );
          }
        );
      }
      if (selectedProductDescription[0].attributes[1].name === "Color") {
        colors = selectedProductDescription[0].attributes[1].items.map(
          (color) => {
            const colorStyle = {
              backgroundColor: color.value.toString(),
            };
            return (
              <div
                key={color.id}
                style={colorStyle}
                onClick={this.props.SetColor}
                id={color.value}
                className={`${
                  color.value === this.props.selectedColor
                    ? "desccription_container_color_perent_selected"
                    : ""
                }`}
              ></div>
            );
          }
        );
      }
      if (
        selectedProductDescription[0].attributes[2].name === "Size" ||
        selectedProductDescription[0].attributes[2].name === "Capacity"
      ) {
        sizes = selectedProductDescription[0].attributes[2].items.map(
          (size) => {
            return (
              <div
                key={size.id}
                id={size.value}
                onClick={this.props.SetSize}
                style={
                  size.value === this.props.selectedSize
                    ? {
                        background: "#000000",
                        color: "#f0f8ff",
                      }
                    : {}
                }
              >
                {size.value}
              </div>
            );
          }
        );
      }
      if (selectedProductDescription[0].attributes[2].name === "Color") {
        colors = selectedProductDescription[0].attributes[2].items.map(
          (color) => {
            const colorStyle = {
              backgroundColor: color.value.toString(),
            };
            return (
              <div
                key={color.id}
                style={colorStyle}
                onClick={this.props.SetColor}
                id={color.value}
                className={`${
                  color.value === this.props.selectedColor
                    ? "desccription_container_color_perent_selected"
                    : ""
                }`}
              ></div>
            );
          }
        );
      }
    }

    return (
      <div>
        {sizes !== undefined && (
          <div>
            <p className="desctiption_p">Size:</p>
            <div className="desccription_container_sizes_perent">{sizes}</div>
          </div>
        )}

        {colors !== undefined && (
          <div>
            <p className="desctiption_p">Colors:</p>
            <div className="desccription_container_color_perent">{colors}</div>
          </div>
        )}
      </div>
    );
  }
}

export default SizeAndColor;
