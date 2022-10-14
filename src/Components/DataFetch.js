import React, { useEffect, useState } from "react";

const DataFetch = () => {
  const [price, setPrice] = useState();
  const [marketCap, setmarketCap] = useState();

  useEffect(() => {
    let interval;
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coincap.io/v2/assets/bitcoin"
        );
        const result = await response.json();
        const bitcoinPrice = (+result?.data?.priceUsd).toFixed(2);
        const bitcoinPriceMarketCap = (+result?.data?.marketCapUsd).toFixed(2);
        setPrice(bitcoinPrice);
        setmarketCap(bitcoinPriceMarketCap);

      } catch (error) {
        console.log("error", error);
      }
    };

    if (!price || !marketCap) {
      // Fetch price for the first time when the app is loaded
      fetchData();
    }


  }, [price,marketCap]);

  return (
    <div className="App">
      <h2>{price && `Bitcoin Price: $${price}`}</h2>
      <h2>{price && `Market Cap: $${marketCap}`}</h2>
    </div>
  );
};

export default DataFetch;
