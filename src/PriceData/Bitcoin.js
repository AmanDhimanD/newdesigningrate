import React, { useEffect, useState } from "react";


const Bitcoin = (props) => {
   const styleCSS = {
    color: "white",
  };

  const [price, setPrice] = useState();

  useEffect(() => {
    var currency = props.curName
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coincap.io/v2/assets/${currency}`
        );
        const result = await response.json();
        const bitcoinPrice = (+result?.data?.priceUsd).toFixed(3);
        setPrice(bitcoinPrice);
      } catch (error) {
        console.log("error", error);
      }
    };

    if (!price) {
      // Fetch price for the first time when the app is loaded
      fetchData();
    }
  }, [price]);

  return (
    <div className="App" style={styleCSS}>
      <h2 className="uppercase">{price && `${props.curName}: $${price}`}</h2>
    </div>
  );
};

export default Bitcoin;
