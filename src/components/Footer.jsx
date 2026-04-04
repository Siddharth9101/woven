import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container mt-8 mb-2 py-4 border-y border-light-grey flex justify-between items-center">
      <h5 className=" text-sm text-muted-brown">
        @ {new Date().getFullYear()}{" "}
        <span className="font-heading font-medium">Woven</span>
      </h5>

      <div>
        <Link
          to="https://www.instagram.com/crochet.macrame.handmade?igsh=MTlpanJzemoycnV3YQ=="
          className="text-pink-400 flex gap-1 items-center"
          target="_blank"
        >
          <FaInstagram />
          crochet.macrame.handmade
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
