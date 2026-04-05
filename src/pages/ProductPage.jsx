import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router";
import { MdArrowBack } from "react-icons/md";
import { motion } from "framer-motion";

const ITEM = {
  id: 1,
  img: "/flowral_pouch/flowral_pouch_01.jpeg",
  title: "Floral Pouch",
  subTitle: "crochet",
};

const ProductPage = () => {
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
            <img src={ITEM.img} alt={ITEM.title} />
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
              {ITEM.title}
              <div className="product_title_underline" />
            </h1>

            <p className="product_desc">
              A hand-knotted wall piece inspired by the geometry of sunlight
              through woven curtains. Each knot is tied with intention, creating
              a meditation in cotton and form.
            </p>

            <h3 className="product_label">Details</h3>

            <div className="product_info">
              <p>Material: 100% natural cotton rope</p>
              <p>Dimensions: 60 × 90 cm</p>
            </div>

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
