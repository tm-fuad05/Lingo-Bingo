import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "../Components/Banner";
import Features from "../Components/Features";
import AboutSection from "../Components/AboutSection";
import Success from "../Components/Success";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Banner></Banner>
      </header>
      <main>
        <Features></Features>
        <AboutSection></AboutSection>
        <Success></Success>
      </main>
    </div>
  );
};

export default Home;
