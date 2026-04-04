import { Link } from "react-router";

const NAV_LINKS = [
  {
    label: "gallery",
    link: "/gallery",
  },
  {
    label: "about",
    link: "https://www.instagram.com/crochet.macrame.handmade?igsh=MTlpanJzemoycnV3YQ==",
  },
  {
    label: "contact",
    link: "https://www.instagram.com/direct/inbox/?hl=en",
  },
];

const Navbar = () => {
  return (
    <header className="container">
      <nav className="navbar">
        {/* logo */}
        <div>
          <h2 className="logo">Woven</h2>
        </div>

        {/* nav links */}
        <ul className="nav_links_container">
          {NAV_LINKS.map((item, i) => (
            <li key={i} className="nav_link">
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
