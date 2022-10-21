import React from "react";

const CurrentExchangePrices = () => {
  fetch("https://api.coincap.io/v2/assets/bitcoin/markets")
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      console.log(res.data);
      var dataAdd = "";
      for (let i = 0; i < res.data.length; i++) {
        dataAdd += `
            <tbody>
               
                    <tr>
                        <td>${res.data[i].exchangeId}</td>
                        <td>${res.data[i].quoteSymbol}</td>
                        <td>${res.data[i].priceUsd}</td>
                    </tr>
            
            </tbody>
               
                `;
        document.getElementById("demo").style.fontSize = "15px";
      }
      document.getElementById("demo").innerHTML = dataAdd;
    });

  return (
    <>
      <table className="table bg-white bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <thead>
          <tr>
            <th>Exchanged ID</th>
            <th>Quote Symbol</th>
            <th>Price of USD</th>
          </tr>
        {/* <div id="demo" ></div> */}
        </thead>
      </table>
    </>
  );
};

export default CurrentExchangePrices;
