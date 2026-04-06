import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link, useParams } from "react-router";
import { MdArrowBack } from "react-icons/md";
import { motion } from "framer-motion";
import { useProducts } from "../hooks/useProducts.jsx";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const { fetchProductById, loading, product } = useProducts();
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState(0);

  useEffect(() => {
    fetchProductById(id);
  }, [id]);
  const pictures = [
    product?.thumbnail?.url,
    ...(product?.images?.map((img) => img.url) || []),
  ].filter(Boolean);

  if (loading) {
    return (
      <section className="w-full min-h-screen flex justify-center items-center">
        <h3 className="font-heading text-3xl">Loading...</h3>
      </section>
    );
  }
  return (
    <>
      <Navbar />
      <main className="container">
        {/* back btn */}
        <div className="py-4">
          <Link to="/gallery" className="back_btn">
            <MdArrowBack />
            Back to gallery
          </Link>
        </div>

        {/* Product section */}
        <div className="product_section">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="product_left"
          >
            <img src={pictures[selectedImg]} alt={product?.title} />
            <div className="flex flex-wrap gap-2 mt-2">
              {pictures?.map((img, i) => (
                <div
                  key={i}
                  className="w-1/5 aspect-square border-2 border-muted-brown rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImg(i)}
                >
                  <img
                    src={img}
                    alt={product?.title}
                    className="object-cover size-full"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* right */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="product_right"
          >
            <span className="product_badge">Macrame</span>
            <h1 className="product_title">
              {product?.title}
              <div className="product_title_underline" />
            </h1>

            <p className="product_desc">{product?.description}</p>

            <span className="product_label">Find us on instagram</span>
            <Link
              className="product_insta_link"
              to="https://www.instagram.com/crochet.macrame.handmade?igsh=MTlpanJzemoycnV3YQ=="
              target="_blank"
            >
              @crochet.macrame.handmade
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
