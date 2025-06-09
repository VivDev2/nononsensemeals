import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import BentoGrid from "./components/BentoGrid";
import Zomato from "./components/Zomato";
import HotelInteriorGrid from "./components/HotelInteriorGrid";
import Middlesection from "./components/middlesection";

const App = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
        <HeroSection />
        <BentoGrid/>
        <Middlesection/>
        <Zomato/>
        <HotelInteriorGrid/>
        <Footer/>
      </div>
    
  );
};

export default App;
