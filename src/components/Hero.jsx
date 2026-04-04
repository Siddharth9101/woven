import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="container py-8 md:flex md:gap-4">
      <div className="hero_left_side">
        <h1 className="hero_heading">
          <span className="relative w-fit">
            Handcrafted
            <Link
              className="absolute -right-10 -top-4"
              to="https://www.instagram.com/crochet.macrame.handmade?igsh=MTlpanJzemoycnV3YQ=="
            >
              <img
                src="/images/follow-cartoon.png"
                alt="rochet.macrame.handmade"
                className="size-14 rotate-12"
              />
            </Link>
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
      </div>
      <div className="hero_right_side">
        <img src="/images/hero-img.png" alt="hero image" />
      </div>
    </section>
  );
};

export default Hero;
