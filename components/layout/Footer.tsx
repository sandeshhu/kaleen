import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="text-xl font-light tracking-widest uppercase mb-6">
                Kaleen<span className="font-bold"> </span>Baba
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Premium handcrafted rugs for the modern home. Bringing texture, warmth, and style to your spaces since 2003.
              </p>
              <div className="flex space-x-4 text-gray-400">
                <Instagram className="w-5 h-5 hover:text-gray-900 cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 hover:text-gray-900 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 hover:text-gray-900 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Links Sections... you can make these a .map() if you want */}
            <div>
              <h4 className="font-medium text-gray-900 mb-6">Shop</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900 transition-colors">All Rugs</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Runners</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Care Guide</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">FAQ</a></li>
              </ul>
            </div>

             <div>
              <h4 className="font-medium text-gray-900 mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; 2024 Kaleen Baba. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
               <span>Made with care.</span>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer;