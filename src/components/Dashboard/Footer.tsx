import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200/60 mt-auto">
      <div className="container mx-auto max-w-8xl px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 text-left">
        <div className="flex flex-col gap-1">
          <span className="text-zinc-900 font-bold text-sm">Cocokin</span>
          <span>
            © 2026 Cocokin. The Architectural Insight. All rights reserved.
          </span>
        </div>
        <div className="flex gap-6 font-medium text-gray-600">
          <Link to="/privacy" className="hover:text-blue-800 cursor-pointer transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-blue-800 cursor-pointer transition">
            Terms of Service
          </Link>
          <Link to="/methodology" className="hover:text-blue-800 cursor-pointer transition">
            Career Methodology
          </Link>
        </div>
      </div>
    </footer>
  );
}