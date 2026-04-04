import { Link } from "react-router";
import GalleryCard from "./ui/Card";

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

const Gallery = () => {
  return (
    <section className="container mb-8">
      <div className="py-2">
        {/* heading & subheading*/}
        <div>
          <h2 className="gallery_heading">Gallery</h2>
          <Link to="/gallery" className="gallery_sub_heading">
            Browse The Collection
          </Link>
          <div className="gallery_border" />
        </div>
      </div>

      {/* Items Grid */}
      <div className=" grid gap-6 sm:grid-cols-3 sm:gap-8">
        {ITEMS.map((item) => (
          <GalleryCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
