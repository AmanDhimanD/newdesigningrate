import React from "react";
import CurrentExchangePriceClass from "../Components/CurrentExchangePriceClass";

const Exchanges = () => {
  const styleCSS = {
    color: "white",
  };

  return (
    <>
      {/* <CurrentExchangePrices/> */}
      <div className="mt-9">
        <h3 className="text-white text-center text-xl">Demo Text </h3>
        <div className="text-white mt-4 mx-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          totam assumenda dolorem cum quam architecto nostrum ducimus itaque
          porro, accusantium veritatis ea vero. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Molestiae totam assumenda dolorem cum
          quam architecto nostrum ducimus itaque porro, accusantium veritatis ea
          vero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestiae totam assumenda dolorem cum quam architecto nostrum ducimus
          itaque porro, accusantium veritatis ea vero. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Molestiae totam assumenda dolorem
          cum quam architecto nostrum ducimus itaque porro, accusantium
          veritatis ea vero.
        </div>

        <div className="text-white mt-4">
          <CurrentExchangePriceClass />
          </div>
      </div>
    </>
  );
};

export default Exchanges;
