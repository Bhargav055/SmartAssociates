import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const productLinks = [
    { name: 'Vegetable Powders', path: '/products?category=vegetable-powders' },
    { name: 'Fruit Powders', path: '/products?category=fruit-powders' },
    { name: 'Dried Petals', path: '/products?category=dried-petals' },
    { name: 'Herbal Powders', path: '/products?category=herbal-powders' },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Quality Policy', path: '/quality' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Smart Associates</h3>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Premium manufacturer and exporter of dehydrated fruits, vegetables, herbal powders, and dried flower petals from Vijayawada, India.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-green-400 transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 group-hover:scale-150 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Our Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-green-400 transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 group-hover:scale-150 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Bommuru, Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>info@smartassociates.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 Smart Associates. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
