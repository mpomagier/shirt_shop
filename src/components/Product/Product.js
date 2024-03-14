import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Product.module.scss";
import ProductImage from "./ProductImage";
import ProductForm from "./Form/ProductForm";

const Product = ({ title, basePrice, colors, sizes, id, name }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {basePrice}$</span>
        </header>
        <ProductForm
          title={title}
          basePrice={basePrice}
          sizes={sizes}
          colors={colors}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    }),
  ).isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Product;
