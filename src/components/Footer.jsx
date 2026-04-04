import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer_container container">
      <h5 className="footer_heading">
        @ {new Date().getFullYear()} <span className="footer_logo">Woven</span>
      </h5>

      <div>
        <Link
          to="https://www.instagram.com/crochet.macrame.handmade?igsh=MTlpanJzemoycnV3YQ=="
          className="footer_link"
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
