import React, { useEffect, useState } from "react";
import Exchanges from "../PriceData/Exchanges";
import Cards from "../Components/Cards";
import { HashLoader } from "react-spinners";

const Home = () => {
  const styleCSS = {
    display: "Flex",
    justifyContent: "center",
  };
  const [load, setload] = useState(false);

  useEffect(() => {
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 2000);
  }, []);

  return (
    <>
      {load ? (
        <HashLoader color={"green"} loading={load} size={50} style={styleCSS} />
      ) : (
        <>
          {" "}
          <Cards />
          <div className="mx-5 mt-6">
            <Exchanges />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
