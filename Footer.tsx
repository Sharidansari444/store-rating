import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-200 text-gray-700 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-white transform rotate-45"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">E-Comm</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
            </p>
          </div>

          {/* Follow Us */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
            <p className="text-sm text-gray-600 mb-4">
              Since the 1500s, when an unknown printer took a galley of type and scrambled.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-cyan-400 rounded flex items-center justify-center text-white hover:bg-cyan-500 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h4>
            <div className="text-sm text-gray-600">
              <p>E-Comm , 4578</p>
              <p>Marmora Road,</p>
              <p>Glasgow D04 89GR</p>
            </div>
          </div>

          {/* Information */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Information</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Service */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Service</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Information</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* My Account */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">My Account</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Information</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Our Offers */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Our Offers</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Information</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="flex justify-end">
            <div className="flex space-x-2">
              <div className="w-12 h-8 bg-yellow-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">WESTERN</span>
              </div>
              <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">MASTER</span>
              </div>
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">PayPal</span>
              </div>
              <div className="w-12 h-8 bg-blue-800 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">VISA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-300 pt-4">
          <p className="text-xs text-gray-500">
            © 2018 Ecommerce theme by www.bisenbaev.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;