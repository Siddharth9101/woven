import { Link } from "react-router";
import GalleryCard from "./ui/Card";
import { motion } from "framer-motion";
import { useProducts } from "../hooks/useProducts.jsx";

const Gallery = () => {
  const { loading, products } = useProducts();

  return (
    <section className="container mb-8">
      <div className="py-2">
        {/* heading & subheading*/}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="gallery_heading">Gallery</h2>
          <Link to="/gallery" className="gallery_sub_heading">
            Browse The Collection
          </Link>
          <div className="gallery_border" />
        </motion.div>
      </div>

      {/* Items Grid */}
      {!loading && products && products.length !== 0 ? (
        <div className=" grid gap-6 sm:grid-cols-3 sm:gap-8">
          {products?.map((item) => (
            <GalleryCard item={item} key={item._id} />
          ))}
        </div>
      ) : (
        <div className="w-full h-64 flex justify-center items-center">
          <h3 className="font-label text-lg font-light">No products found.</h3>
        </div>
      )}
    </section>
  );
};

export default Gallery;
