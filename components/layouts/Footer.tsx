import { Phone, MessageCircle, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="#home" className="text-xl font-bold tracking-tight">
              <Image src={"/logo.png"} width={48} height={48} alt="Logo" />
            </Link>
            <h2 className="text-xl font-bold text-gray-800 mb-3 mt-1">
              Beanibazar Home Delivery Service
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Fast, reliable, and trusted delivery service in Beanibazar. We
              deliver your daily needs with care and responsibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-600 text-[15">
              <li>
                <a href="#about" className="hover:text-green-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-600 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-600 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-600 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <a
                href="tel:+880XXXXXXXXXX"
                className="flex items-center gap-2 hover:text-green-600 transition"
              >
                <Phone className="w-4 h-4" />
                +880 1706-397147
              </a>

              <a
                href="https://wa.me/8801706397147"
                target="_blank"
                className="flex items-center gap-2 hover:text-green-600 transition"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Beanibazar, Sylhet
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Beanibazar Home Delivery Service. All
          rights reserved.
          <p className="mt-1">Serving Beanibazar with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
