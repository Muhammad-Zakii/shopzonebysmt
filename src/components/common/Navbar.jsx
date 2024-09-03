import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import logo from "../../assets/images/smt.png";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <TopNavbar />
      <nav className="bg-white border-t-2 border-b-2 border-black dark:bg-white dark:border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img
              src={logo}
              className=" h-16 w-16 object-contain mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-extrabold text-black whitespace-nowrap dark:text-black">
              Shopzonebysmt
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            onClick={toggleNavbar}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover-bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={navbarOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              navbarOpen ? "block" : "hidden"
            }`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-200">
              <li>
                <a
                  href="/"
                  className={`block py-2 pl-3 pr-4 ${
                    navbarOpen
                      ? "text-black bg-gray-100 cursor-pointer"
                      : "text-black cursor-pointer"
                  } rounded md:bg-transparent md:text-gray-700 md:p-0`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <Link to={"/products"}>
                  <div
                    href="#"
                    className={`block py-2 pl-3 pr-4 ${
                      navbarOpen
                        ? "text-black cursor-pointer"
                        : "text-black cursor-pointer"
                    } rounded hover:bg-gray-100 md:hover-bg-transparent md:p-0`}
                  >
                    Products
                  </div>
                </Link>
              </li>
              {window.location.pathname !== "/products" && (
                <>
                  <li>
                    <ScrollLink to="about" smooth={true} duration={500}>
                      <div
                        className={`block py-2 pl-3 pr-4 ${
                          navbarOpen
                            ? "text-black cursor-pointer"
                            : "text-black cursor-pointer"
                        } rounded hover:bg-gray-100 md:hover-bg-transparent md:p-0`}
                      >
                        About us
                      </div>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="contact" smooth={true} duration={500}>
                      <div
                        className={`block py-2 pl-3 pr-4 ${
                          navbarOpen
                            ? "text-black cursor-pointer"
                            : "text-black cursor-pointer"
                        } rounded hover:bg-gray-100 md:hover-bg-transparent md:p-0`}
                      >
                        Contact us
                      </div>
                    </ScrollLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
