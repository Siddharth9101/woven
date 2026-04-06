import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router";
import { MdArrowBack } from "react-icons/md";
import GalleryCard from "../components/ui/Card.jsx";
import { useProducts } from "../hooks/useProducts.jsx";

const GalleryPage = () => {
  const { loading, products } = useProducts();

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
          {!loading && products && products.length !== 0 ? (
            <div className=" grid gap-6 sm:grid-cols-3 sm:gap-8">
              {products?.map((item) => (
                <GalleryCard item={item} key={item._id} />
              ))}
            </div>
          ) : (
            <div className="w-full h-64 flex justify-center items-center">
              <h3 className="font-label text-lg font-light">
                No products found.
              </h3>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;
