import React from "react";
import { Link } from "react-router-dom";


const Cards = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-8 pt-8 mx-auto">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-green-200 border p-4 rounded-lg">
                <img
                  alt="coin"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    <Link to="/bitcoin">Bitcoin </Link>
                  </h2>
                  <p className="text-gray-400">BTC</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-green-200 border p-4 rounded-lg">
                <img
                  alt="coin"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/84x84"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    <Link to="/ethereum">Ethereum </Link>
                  </h2>
                  <p className="text-gray-400">ETH</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-green-200 border p-4 rounded-lg">
                <img
                  alt="coin"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    <Link to="/ripple">XRP </Link>
                  </h2>
                  <p className="text-gray-400">XRP</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-green-200 border p-4 rounded-lg">
                <img
                  alt="coin"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/90x90"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    <Link to="/bch">Bitcoin Cash </Link>
                  </h2>
                  <p className="text-gray-400">BCH</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-green-200 border p-4 rounded-lg">
                <img
                  alt="coin"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/94x94"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    <Link to="/eos">EOS </Link>
                  </h2>
                  <p className="text-gray-400">EOS</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-green-200 border p-4 rounded-lg">
                <img
                  alt="coin"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/98x98"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    <Link to="/stellar">Stellar </Link>
                  </h2>
                  <p className="text-gray-400">XLM</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-green-200 border p-4 rounded-lg">
                <img
                  alt="coin"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/100x90"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    <Link to="/siacoin">Siacoin </Link>
                  </h2>
                  <p className="text-gray-400">SC</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-green-200 border p-4 rounded-lg">
                <img
                  alt="coin"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/104x94"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    <Link to="/litecoin">Litecoin </Link>
                  </h2>
                  <p className="text-gray-400">LTC</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-green-200 border p-4 rounded-lg">
                <img
                  alt="coin"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/108x98"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    <Link to="/cardano">Cardano </Link>
                  </h2>
                  <p className="text-gray-400">ADA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
