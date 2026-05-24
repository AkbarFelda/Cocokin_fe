import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingLayout from "./pages/LandingPage/LandingLayout";
import Landing from "./pages/LandingPage/Landing";
import Company from "./pages/LandingPage/Company";
import Product from "./pages/LandingPage/Product";
import Pricing from "./pages/LandingPage/Pricing";
import Resources from "./pages/LandingPage/Resources";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/company" element={<Company />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* fallback */}
        {/* <Route path="*" element={<div>Page not found</div>} /> */}
      </Routes>
    </Router>
  );
};

export default App;