import React, { useEffect, useState } from "react";
/* import CurrentExchangePrices from "../Components/CurrentExchangePrices"; */
/* import Cards from "../Components/Cards"; */
import CurrentExchangePriceClass from "../Components/CurrentExchangePriceClass";
import { HashLoader } from "react-spinners";

const Home = () => {
  const styleCSS = {
    color: "white",
  };
  const loaderCSS = {
    display: "Flex",
    justifyContent: "center",
  };
  const [load, setload] = useState(false);

  useEffect(() => {
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 5000);
  }, []);

  return (
    <>
      {/* <CurrentExchangePrices/> */}
      <div className="">
        <h3 className="text-white text-center text-xl">Demo Text </h3>
        <div className="text-white mx-10">
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
        {load ? (
          <HashLoader
            color={"green"}
            loading={load}
            size={40}
            style={loaderCSS}
          />
        ) : (
          <div className="mt-10 mx-10">
            <CurrentExchangePriceClass />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
