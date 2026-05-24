import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between">
        <div className="space-y-4 text-left">
          <h3 className="font-bold text-blue-600 text-lg">Cocokin</h3>
          <p className="text-gray-700 text-sm">
            Membantu jutaan talenta menemukan <br />
            kecocokan karir yang didorong oleh data dan <br />
            kejujuran skill.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-2 text-left mt-8 md:mt-0">
          <h4 className="font-semibold text-gray-800">Produk</h4>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>
              <a href="#" className="hover:text-blue-600">
                Analisis CV
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Portfolio Review
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Career Mapping
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-2 text-left mt-8 md:mt-0">
          <h4 className="font-semibold text-gray-800">Perusahaan</h4>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>
              <a href="#" className="hover:text-blue-600">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Karier
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-2 text-left mt-8 md:mt-0">
          <h4 className="font-semibold text-gray-800">Bantuan</h4>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>
              <a href="#" className="hover:text-blue-600">
                Pusat Bantuan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Kontak
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto max-w-7xl px-6 mt-8 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
        <p>© 2026 Cocokin AI Career Analytics. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Made with focus on your future success.</p>
      </div>
    </footer>
  );
};

export default Footer;
