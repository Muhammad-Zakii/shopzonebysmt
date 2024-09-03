import React from "react";
import { Link } from "react-scroll"; // Import the Link component from react-scroll

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full ml-10 md:w-1/2 lg:w-1/4 mb-6 lg:mb-0 lg:ml-16">
          <h2 className="text-3xl font-bold mb-4">Shopzonebysmt</h2>
          <p className="text-gray-400 mb-4">
          Elevate your online shopping experience with Shopzonebysmt – Where Quality Meets Convenience.
          </p>
          <ul className="flex space-x-4">
            <li>
            <a href="/" className="hover:text-blue-401">
                Home
              </a>
            </li>
            <li>
              <a href="/products"  className="hover:text-blue-400">
                Products
                </a>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} duration={500} offset={-70} className="hover:text-blue-400">
                About us
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} duration={500} offset={-70} className="hover:text-blue-400">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full ml-10 md:w-1/2 lg:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-4">
          Flat 5, 547
            <br />
           Bordesley Green East, Stechford, Birmingham B33 8RX
          </p>
          <p>
            Email:{" "}
            <a href="mailto:contactus@shopzonebysmt.com" className="hover:text-blue-400 cursor-pointer">
            contactus@shopzonebysmt.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
