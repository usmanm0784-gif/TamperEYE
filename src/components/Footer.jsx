import { Link } from "react-router-dom";
import { Shield, Twitter, Linkedin, Github } from "lucide-react";
import img from "../assets/eye_logo.png";

export function Footer() {
  return (
    <footer className="bg-[#0f1629] text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={img} alt="Logo" className="h-25 w-25" />
              <span className="text-2xl font-semibold text-white tracking-wide">
                Tamper EYE
              </span>
            </div>
            <p className="max-w-md leading-relaxed">
              AI-powered deepfake detection platform designed to safeguard
              authenticity, trust, and integrity in digital media.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li className="hover:text-white transition cursor-pointer">
                Documentation
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Research
              </li>
              <li className="hover:text-white transition cursor-pointer">
                <a href="/privacy-policy" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm">
            © 2025 <span className="text-white">Tamper EYE</span>. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
