import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="w-full container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-blue-600">Cocokin</div>
        <nav className="space-x-6">
          <a href="#product" className="text-gray-700 hover:text-blue-600">Product</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
          <a href="#resources" className="text-gray-700 hover:text-blue-600">Resources</a>
          <a href="#company" className="text-gray-700 hover:text-blue-600">Company</a>
        </nav>
        <div className="space-x-4">
          <button className="text-gray-700 hover:text-blue-600">Log In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Get Started</button>
        </div>
      </div>
    </header>
  );
}