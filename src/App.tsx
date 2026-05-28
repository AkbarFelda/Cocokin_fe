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
import VerifyOtp from "./pages/VerifyOtp";
import ResetPassword from "./pages/ResetPassword";
import UserProfile from "./pages/UserProfile";
import AnalyzeProfile from "./pages/AnalyzeProfile";
import EditProfile from "./pages/Dashboard/EditProfile";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import CareerDashboard from "./pages/CareerDashboard";
import AnalysisLoading from "./pages/Dashboard/AnalysisLoading";
import RoleDetail from "./pages/RoleDetail";
import ProtectedRoute from "./components/Dashboard/ProtectedRoute";
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
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<CareerDashboard />} />
            <Route path="loading" element={<AnalysisLoading />} />
            <Route path="result" element={<AnalyzeProfile />} />
            <Route path="job-detail" element={<RoleDetail />} />
          </Route>
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/edit-profile" element={<EditProfile />} />
        </Route>

        {/* fallback */}
        {/* <Route path="*" element={<div>Page not found</div>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
