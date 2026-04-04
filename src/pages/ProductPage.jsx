import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router";
import { MdArrowBack } from "react-icons/md";
import GalleryCard from "../components/ui/Card.jsx";

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
        <div className="py-4 sm:py-8 grid sm:grid-cols-2 px-2">
          {/* left */}
          <div className="w-fit aspect-auto overflow-hidden sm:pt-8">
            <img src={ITEM.img} alt={ITEM.title} />
          </div>

          {/* right */}
          <div className="flex flex-col gap-4 pl-2 sm:pl-16 mt-6 sm:mt-0">
            <span className="text-muted-brown font-label uppercase">
              Macrame
            </span>
            <h1 className="w-fit font-heading text-5xl flex flex-col gap-4 max-w-80">
              {ITEM.title}
              <div className="h-0.5 bg-terracotta w-3/5" />
            </h1>

            <p className="font-desc text-muted-brown max-w-80">
              A hand-knotted wall piece inspired by the geometry of sunlight
              through woven curtains. Each knot is tied with intention, creating
              a meditation in cotton and form.
            </p>

            <h3 className="uppercase font-label text-lg font-semibold mt-4 sm:mt-6">
              Details
            </h3>

            <div className="flex flex-col gap-2 font-label text-muted-brown">
              <p className="label">Material: 100% natural cotton rope</p>
              <p className="label">Dimensions: 60 × 90 cm</p>
            </div>

            <span className="uppercase font-label text-lg font-semibold mt-4 sm:mt-6">
              Find us on instagram
            </span>
            <Link
              className="py-4 max-w-80 h-14 flex items-center justify-center border border-charcoal rounded-lg hover:bg-charcoal hover:text-warm-white transition-all duration-300 ease-in-out active:scale-90"
              to="https://www.instagram.com/crochet.macrame.handmade?igsh=MTlpanJzemoycnV3YQ=="
              target="_blank"
            >
              @crochet.macrame.handmade
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
