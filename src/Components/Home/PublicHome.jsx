import React from "react";
import Header from "./Header";
import Products from "../Products/Products";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

const PublicHome = ({ onLogout, isAuthenticated }) => {
  return (
    <>
      <div className="w-[1200px] mx-auto">
        <Header onLogout={onLogout} isAuthenticated={isAuthenticated} />
        <HeroSection />
        <Products />
      </div>
      <Footer />
    </>
  );
};

export default PublicHome;
