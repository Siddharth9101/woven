import { Link } from "react-router";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="container py-8 md:flex md:gap-4">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="hero_left_side"
      >
        <h1 className="hero_heading">
          <span className="relative w-fit">
            Handcrafted
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-10 -top-4"
            >
              <Link
                to="https://www.instagram.com/crochet.macrame.handmade?igsh=MTlpanJzemoycnV3YQ=="
                target="_blank"
              >
                <img
                  src="/images/follow-cartoon.png"
                  alt="rochet.macrame.handmade"
                  className="size-14 rotate-12"
                />
              </Link>
            </motion.div>
          </span>{" "}
          <br />
          <span className="hero_sub_heading">with intention</span>
        </h1>
        <p className="hero_paragraph">
          A curated collection of crochet & macrame pieces, <br />
          each one made slowly, by hand.
        </p>

        <Link to="/gallery" className="hero_btn">
          <div className="hero_btn_border" />
          Explore Gallery
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="hero_right_side"
      >
        <img src="/images/hero-img.png" alt="hero image" />
      </motion.div>
    </section>
  );
};

export default Hero;
