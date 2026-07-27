import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ReactLenis from "lenis/react";
import ScrollToTop from "../Components/ScrollToTop";

const Root = () => {
  return (
    <div>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
        <div className="sticky top-0 z-50 bg-white">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
        <ScrollToTop />
      </ReactLenis>
    </div>
  );
};

export default Root;
