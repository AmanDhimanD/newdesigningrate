import React from "react";
import Cards from "../Components/Cards";

const Home = () => {
  const styleCSS = {
    color: "white",
  };
  return (
    <>
      <div
        style={styleCSS}
        className="place-content-center"
      >
        
        <Cards />
      </div>
    </>
  );
};

export default Home;
