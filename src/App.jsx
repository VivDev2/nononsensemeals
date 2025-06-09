import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import BentoGrid from "./components/BentoGrid";
import Zomato from "./components/Zomato";
import HotelInteriorGrid from "./components/HotelInteriorGrid";
import Middlesection from "./components/middlesection";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
        <HeroSection />
        <BentoGrid/>
        <Middlesection/>
        <Zomato/>
        <HotelInteriorGrid/>
        <Testimonial/>
        <Footer/>
      </div>
    
  );
};

export default App;
