import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-xs sticky top-0 z-50">
      <div className="container mx-auto max-w-8xl flex justify-between items-center py-4 px-6">
        <div className="justify-center text-blue-800 text-2xl font-extrabold font-inter tracking-tight cursor-pointer">
          Cocokin
        </div>

        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-700 hover:text-blue-600 focus:outline-hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6 fill-none stroke-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute md:relative top-16.25 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 p-6 md:p-0 shadow-md md:shadow-none border-b border-gray-100 md:border-none font-manrope font-semibold text-secondary-normal text-base md:text-sm md:flex transition-all duration-300 ease-in-out z-40`}
        >
          <a href="#product" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>
            Product
          </a>
          <a href="#pricing" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>
            Pricing
          </a>
          <a href="#resources" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>
            Resources
          </a>
          <a href="#company" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>
            Company
          </a>
          
          <div className="flex flex-col items-center gap-4 w-full pt-4 border-t border-gray-100 md:hidden">
            <button className="text-gray-700 hover:text-blue-600 font-inter font-bold w-full py-2">
              Log In
            </button>
            <button className="w-full text-center bg-blue-700 text-white text-sm font-bold font-inter py-3 rounded-xl shadow-xs hover:bg-blue-800 transition">
              Get Started
            </button>
          </div>
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-700 hover:text-blue-600 font-inter font-bold text-sm transition cursor-pointer">
            Log In
          </button>
          <button className="px-6 py-2.5 bg-blue-700 text-white text-sm font-bold font-inter rounded-xl shadow-xs hover:bg-blue-800 transition duration-200 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}