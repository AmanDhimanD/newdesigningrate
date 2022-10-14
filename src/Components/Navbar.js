import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styleCSS = {
    color: "white",
    backgroundColor:"black"
  };
  return (
    <>
      <header class="text-gray-600 body-font" style={styleCSS}>
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl" style={styleCSS}>
              CryptoGuru
            </span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" class="mr-10 text-xl ">
              Home
            </Link>
            <Link to="price" class="mr-10  text-xl ">
              Price
            </Link>
          </nav>
          <button class=" text-xl inline-flex items-center bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-green-300 rounded text-base mt-4 md:mt-0">
            Login / Sign up
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
