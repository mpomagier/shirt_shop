import React from "react";
import PropTypes from "prop-types";

const ProductImage = ({ name, title, currentColor }) => {
  return (
    <div>
      <img
        alt={`${title} - ${currentColor}`}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
      />
    </div>
  );
};

ProductImage.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default ProductImage;
