import { Link } from "react-router";
import { motion } from "framer-motion";

const GalleryCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Link to={`/gallery/${item.title}`} state={{ id: item.id }}>
        <div className="card_container">
          <div className="card">
            <div className="card_img_wrapper">
              <img src={item.img} alt={item.title} className="card_img" />
            </div>
            <h4 className="card_title">{item.title}</h4>
            <span className="card_sub_title">{item.subTitle}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default GalleryCard;
