import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Quote from "../../components/Quote/Quote";
import ErasCarousel from "../../components/ErasCarousel/ErasCarousel";
import Timeline from "../../components/Timeline/Timeline";
import Footer from "../../components/Footer/Footer";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />

      <div className="eras-strip"></div>
      <div className="era-transition"></div>

      <Quote />

      <div className="editorial-gap"><span></span></div>

      <ErasCarousel 
        currentIndex={currentIndex} 
        setCurrentIndex={setCurrentIndex} 
      />

      <Timeline 
        currentIndex={currentIndex} 
        onSelectEra={(index) => setCurrentIndex(index)} 
      />

      <Footer />
    </>
  );
}

export default Home;