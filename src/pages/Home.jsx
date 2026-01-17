import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
};
export default Home;
