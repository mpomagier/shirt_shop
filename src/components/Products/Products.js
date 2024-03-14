import React, { useState } from "react";
import Product from "../Product/Product";
import ProductForm from "../Product/Form/ProductForm"; // Dodaj import ProductForm
import productsData from "../../data/products";

const Products = () => {
  const [products] = useState(productsData);

  return (
    <section>
      {products.map((product) => (
        <div key={product.id}>
          <Product {...product} />
          <ProductForm />
        </div>
      ))}
    </section>
  );
};

export default Products;
