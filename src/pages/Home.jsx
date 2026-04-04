import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Gallery from "../components/Gallery.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default Home;
