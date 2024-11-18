import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
