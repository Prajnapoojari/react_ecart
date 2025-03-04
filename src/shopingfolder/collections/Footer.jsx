import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white p-6">
      <div className="footer-content grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        <div className="footer-section">
          <h2 className="text-lg font-semibold">About Us</h2>
          <p className="text-sm mt-2">
            We provide high-quality services and solutions for your needs.
          </p>
        </div>

        <div className="footer-section">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/about" className="hover:text-gray-400">About</a></li>
            <li><a href="/services" className="hover:text-gray-400">Services</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="text-sm mt-2">Email: prajnapoojari098@email.com</p>
          <p className="text-sm">Phone: +91-8073308709</p>
        </div>

        <div className="footer-section">
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="social-media flex justify-center md:justify-start space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
