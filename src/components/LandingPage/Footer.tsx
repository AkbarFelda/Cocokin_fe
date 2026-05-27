import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto max-w-8xl px-6 flex flex-col md:flex-row justify-between gap-8">
        
        <div className="space-y-4 text-left md:w-1/4">
          <h3 className="font-bold text-blue-600 text-lg">Cocokin</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Membantu jutaan talenta menemukan <br className="hidden lg:inline" />
            kecocokan karir yang didorong oleh data dan <br className="hidden lg:inline" />
            kejujuran skill.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-200">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-200">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-2 text-left mt-8 md:mt-0">
          <h4 className="font-semibold text-gray-800 text-sm tracking-wide uppercase opacity-80">Produk</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition duration-150">Analisis CV</a></li>
            <li><a href="#" className="hover:text-blue-600 transition duration-150">Portfolio Review</a></li>
            <li><a href="#" className="hover:text-blue-600 transition duration-150">Career Mapping</a></li>
          </ul>
        </div>

        <div className="space-y-2 text-left mt-8 md:mt-0">
          <h4 className="font-semibold text-gray-800 text-sm tracking-wide uppercase opacity-80">Perusahaan</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition duration-150">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-blue-600 transition duration-150">Karier</a></li>
            <li><a href="#" className="hover:text-blue-600 transition duration-150">Blog</a></li>
          </ul>
        </div>

        <div className="space-y-2 text-left mt-8 md:mt-0">
          <h4 className="font-semibold text-gray-800 text-sm tracking-wide uppercase opacity-80">Bantuan</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition duration-150">Pusat Bantuan</a></li>
            <li><a href="#" className="hover:text-blue-600 transition duration-150">Kontak</a></li>
            <li><a href="#" className="hover:text-blue-600 transition duration-150">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto max-w-8xl px-6 mt-12 pt-6 border-t border-gray-300/40 flex flex-col md:flex-row justify-between text-gray-500 text-xs font-medium tracking-wide">
        <p>© 2026 Cocokin AI Career Analytics. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Made with focus on your future success.</p>
      </div>
    </footer>
  );
};

export default Footer;