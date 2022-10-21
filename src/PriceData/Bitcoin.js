import React, { useEffect, useState } from "react";


const Bitcoin = (props) => {
   const styleCSS = {
    color: "white",
  };

  const [price, setPrice] = useState();
  const [marketCap, setMarketCap] = useState()
  const [rank, setRank] = useState()
  const [change24hrp, setchange24hrp] = useState()
  const [volumeUsd24Hr, setvolumeUsd24Hr] = useState()

  useEffect(() => {
    var currency = props.curName
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coincap.io/v2/assets/${currency}`
        );
        const result = await response.json();
        const rankResult = (+result?.data?.rank)
        const bitcoinPrice = (+result?.data?.priceUsd).toFixed(3);
        const marketCapResult = (+result?.data?.marketCapUsd).toFixed(2);
        const change24hrpResult = (+result?.data?.changePercent24Hr)
        const volumeUsd24HrResult = (+result?.data?.volumeUsd24Hr)

        setRank(rankResult)
        setPrice(bitcoinPrice);
        setMarketCap(marketCapResult)
        setchange24hrp(change24hrpResult)
        setvolumeUsd24Hr(volumeUsd24HrResult)

      } catch (error) {
        console.log("error", error);
      }
    };

    if (!price) {
      // Fetch price for the first time when the app is loaded
      fetchData();
    }
  }, [rank,price,marketCap,change24hrp,volumeUsd24Hr]);

  return (
    <>
      {/*   <div className="App" style={styleCSS}>
        <h2 className="uppercase">{price && `${props.curName}: $${price}`}</h2>
      </div> */}

      {/* Here we start the page editing  */}
      <div>
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16">
              <h1 className="text-xl text-grey-200 ">Rank : #{rank}</h1>
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white uppercase">
                {price && `${props.curName}: $${price}`}
              </h2>
            </div>
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Market Cap: {marketCap}
                </h3>
                <p class="text-gray-500 dark:text-black-400"></p>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  {" "}
                  24Hr % Change: {change24hrp}
                </h3>
                <p class="text-gray-500 dark:text-gray-400"></p>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                 Volume 24Hr: {volumeUsd24Hr}
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                 
                </p>
              </div>
            </div>
          </div>
          <div className="text-center p-6">
            <h1>Removeable Text</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae excepturi quidem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae excepturi quidem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae excepturi quidem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae excepturi quidem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae excepturi quidem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae excepturi quidem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae excepturi quidem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae excepturi quidem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae excepturi quidem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae excepturi quidem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae excepturi quidem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae excepturi quidem.
             </div>
        </section>
      </div>
    </>
  );
};

export default Bitcoin;
