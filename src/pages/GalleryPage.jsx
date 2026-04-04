import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router";
import { MdArrowBack } from "react-icons/md";
import GalleryCard from "../components/ui/Card.jsx";

const ITEMS = [
  {
    id: 1,
    img: "/flowral_pouch/flowral_pouch_01.jpeg",
    title: "Floral Pouch",
    subTitle: "crochet",
  },
  {
    id: 2,
    img: "/flowral_pouch/flowral_pouch_02.jpeg",
    title: "Floral Pouch",
    subTitle: "crochet",
  },
  {
    id: 3,
    img: "/flowral_pouch/flowral_pouch_03.jpeg",
    title: "Floral Pouch",
    subTitle: "crochet",
  },
  {
    id: 4,
    img: "/flowral_pouch/flowral_pouch_04.jpeg",
    title: "Floral Pouch",
    subTitle: "crochet",
  },
  {
    id: 5,
    img: "/flowral_pouch/flowral_pouch_05.jpeg",
    title: "Floral Pouch",
    subTitle: "crochet",
  },
  {
    id: 6,
    img: "/flowral_pouch/flowral_pouch.png",
    title: "Floral Pouch",
    subTitle: "crochet",
  },
];
const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        {/* back btn */}
        <div className="py-4">
          <Link to="/" className="back_btn">
            <MdArrowBack />
            Back to home
          </Link>
        </div>
        <div>
          <div className=" grid gap-6 sm:grid-cols-3 sm:gap-8">
            {ITEMS.map((item) => (
              <GalleryCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;
