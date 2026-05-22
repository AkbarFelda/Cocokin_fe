import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/LandingPage/Footer";
import Navbar from "../../components/LandingPage/Navbar";

const LandingLayout: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Outlet />  
      <Footer />
    </div>
  );
};

export default LandingLayout;