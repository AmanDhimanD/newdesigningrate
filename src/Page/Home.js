import React from "react";
/* import CurrentExchangePrices from "../Components/CurrentExchangePrices"; */
/* import Cards from "../Components/Cards"; */
import CurrentExchangePriceClass from "../Components/CurrentExchangePriceClass";

const Home = () => {
  const styleCSS = {
    color: "white",
  };
  return (
    <>
      {/* <CurrentExchangePrices/> */}
      <div className="">
        <div className="text-white mx-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            totam assumenda dolorem cum quam architecto nostrum ducimus itaque
            porro, accusantium veritatis ea vero. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Molestiae totam assumenda dolorem cum
            quam architecto nostrum ducimus itaque porro, accusantium veritatis
            ea vero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestiae totam assumenda dolorem cum quam architecto nostrum
            ducimus itaque porro, accusantium veritatis ea vero. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Molestiae totam
            assumenda dolorem cum quam architecto nostrum ducimus itaque porro,
            accusantium veritatis ea vero.
        </div>
        <div className="mt-10 mx-10">
        <CurrentExchangePriceClass />
        </div>
      </div>
    </>
  );
};

export default Home;
