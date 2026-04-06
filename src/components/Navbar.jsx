import { useState } from "react";
import { Link } from "react-router";
import { HiBars3, HiXMark } from "react-icons/hi2";

const NAV_LINKS = [
  {
    label: "gallery",
    link: "/gallery",
  },
  {
    label: "about",
    link: "https://www.instagram.com/crochet.macrame.handmade?igsh=MTlpanJzemoycnV3YQ==",
    target: "_blank",
  },
  {
    label: "contact",
    link: "https://www.instagram.com/crochet.macrame.handmade?igsh=MTlpanJzemoycnV3YQ==",
    target: "_blank",
  },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="container">
      <nav className="navbar">
        {/* logo */}
        <div>
          <Link to="/">
            <h2 className="logo">Woven</h2>
          </Link>
        </div>

        {/* nav links - hidden on mobile */}
        <ul className="nav_links_container">
          {NAV_LINKS.map((item, i) => (
            <li key={i} className="nav_link">
              <Link to={item.link} target={item.target ? item.target : "_self"}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* mobile sidebar toggle button */}
        <button
          onClick={toggleSidebar}
          className="sm:hidden p-2 border border-light-grey rounded-lg hover:bg-gray-100 transition-colors"
        >
          <HiBars3 className="size-6" />
        </button>
      </nav>

      {/* sidebar overlay and content */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-cream shadow-lg z-50 transform transition-transform duration-300 ease-in-out sm:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* close button */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold font-heading">Woven</h2>
          <button
            onClick={closeSidebar}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <HiXMark className="size-6" />
          </button>
        </div>

        {/* sidebar links */}
        <ul className="p-4 space-y-3">
          {NAV_LINKS.map((item, i) => (
            <li key={i}>
              <Link
                to={item.link}
                target={item.target ? item.target : "_self"}
                onClick={closeSidebar}
                className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-charcoal uppercase font-label"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
};

export default Navbar;
