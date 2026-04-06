import { useContext, useEffect } from "react";
import {
  getAllProductsService,
  getProductById,
} from "../services/products.api.js";
import { ProductContext } from "../contexts/product.context.js";
export const useProducts = () => {
  const { loading, setLoading, products, setProducts, setProduct, product } =
    useContext(ProductContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const products = await getAllProductsService();
      setProducts(products);
    } catch (err) {
      console.error("Error while fetching products, err: ", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductById = async (id) => {
    setLoading(true);
    try {
      const product = await getProductById(id);
      setProduct(product);
    } catch (err) {
      console.error("Error while fetching product by Id, err: ", err);
    } finally {
      setLoading(false);
    }
  };
  return { loading, products, fetchProductById, product };
};
