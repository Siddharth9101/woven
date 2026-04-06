import { useState } from "react";
import { ProductContext } from "../contexts/product.context.js";

const ProductContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  return (
    <ProductContext.Provider
      value={{
        loading,
        setLoading,
        products,
        setProducts,
        product,
        setProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
