import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* E-Comm Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">E-Comm</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Since the 1500s, when an unknown printer.
            </p>
          </div>

          {/* Follow Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Follow Us</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Since the 1500s, when an unknown printer took a galley of type and scrambled.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center hover:bg-blue-500 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <div className="text-gray-600 text-sm space-y-1">
              <p>E-Comm, 4578</p>
              <p>Marmora Road,</p>
              <p>Glasgow D04 89GR</p>
            </div>
          </div>

          {/* Empty column for spacing - this maintains the 4-column layout */}
          <div></div>
        </div>

        {/* Second Row with Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Information</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-800 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Information</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Service Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Service</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-800 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Information</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* My Account Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">My Account</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-800 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Information</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Our Offers Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Our Offers</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-800 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Information</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2018 Ecommerce theme by www.bisenbaev.com
            </p>

            {/* Payment Methods */}
            <div className="flex space-x-2">
              <div className="w-12 h-8 bg-yellow-500 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">WESTERN</span>
              </div>
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">MASTER</span>
              </div>
              <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">PAYPAL</span>
              </div>
              <div className="w-12 h-8 bg-blue-700 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">VISA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;