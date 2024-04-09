import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import OptionColor from "./OptionColor";
import OptionSize from "./OptionSize";

const ProductForm = ({
  title,
  basePrice,
  sizes,
  colors,
  currentSize,
  setCurrentSize,
  currentColor,
  setCurrentColor,
}) => {
  const getPrice =
    basePrice + sizes.find((size) => size.name === currentSize).additionalPrice;

  return (
    <form>
      <div>
        <h3>Sizes</h3>
        <OptionSize
          sizes={sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
        />
      </div>
      <div>
        <h3>Colors</h3>
        <OptionColor
          colors={colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
      </div>
      <Button>
        <span className="fa fa-shopping-cart" />
      </Button>
      <p>Price: {getPrice}$</p>
    </form>
  );
};

ProductForm.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default ProductForm;
