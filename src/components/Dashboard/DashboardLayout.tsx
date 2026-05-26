import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function DashboardLayout() {
  return (
    <div className="w-full bg-slate-50 font-inter text-gray-900 antialiased flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <Footer />   
    </div>
  );
}