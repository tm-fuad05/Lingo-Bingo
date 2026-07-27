import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "../Components/Banner";
import Features from "../Components/Features";
import AboutSection from "../Components/AboutSection";
import Success from "../Components/Success";
import JoinUs from "../Components/JoinUs";
import { Helmet } from "react-helmet";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="space-y-20">
      <Helmet>
        <title>Home | Lingo Bingo</title>
      </Helmet>
      <header>
        <Banner></Banner>
      </header>
      <main className="space-y-20">
        <Features></Features>
        <AboutSection></AboutSection>
        <Success></Success>
      </main>
      <div className="bg-secondary">
        <JoinUs></JoinUs>
      </div>
    </div>
  );
};

export default Home;
