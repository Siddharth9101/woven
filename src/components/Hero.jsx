const Hero = () => {
  return (
    <section className="container py-8 md:flex md:gap-4">
      <div className="hero_left_side">
        <h1 className="hero_heading">
          Handcrafted <br />
          <span className="hero_sub_heading">with intention</span>
        </h1>
        <p className="hero_paragraph">
          A curated collection of crochet & macrame pieces, <br />
          each one made slowly, by hand.
        </p>

        <button className="hero_btn">
          <div className="hero_btn_border" />
          Explore Gallery
        </button>
      </div>
      <div className="hero_right_side">
        <img src="/images/hero-img.png" alt="hero image" />
      </div>
    </section>
  );
};

export default Hero;
