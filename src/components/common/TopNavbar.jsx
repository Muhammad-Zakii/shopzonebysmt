import React from "react";
import { FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className="bg-gray-50 text-gray-900 py-2">
      <div className="container mx-auto flex flex-col items-center justify-between lg:flex-row">
        <div className="flex flex-row mx-10 items-center justify-between w-full lg:space-x-4">
          <div className="flex items-center space-x-2">
            <FaPhone className="text-blue-400" />
            <span className="text-sm">Call us: +447456447030</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-900 hover:text-blue-400">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
