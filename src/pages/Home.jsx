import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Gallery from "../components/Gallery.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
      </main>
    </>
  );
};

export default Home;
