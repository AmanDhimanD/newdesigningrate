import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class CurrentExchangePriceClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };

    this.callAPI = this.callAPI.bind(this);
    this.callAPI();
  }

  callAPI() {
    fetch("https://api.coincap.io/v2/assets/bitcoin/markets")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          list: data.data,
        });
      });
  }
  render() {
    let tableData = this.state.list.map((item) => {
      return (
        <tr
          key={item.id}
          className="bg-green-500 border-b border-green-400 text-black"
        >
          <td className="py-4 px-6">{item.baseId}</td>
          <td className="py-4 px-6">{item.baseSymbol}</td>
          <td className="py-4 px-6">{item.exchangeId}</td>
          <td className="py-4 px-6">{item.quoteId}</td>
          <td className="py-4 px-6">{item.priceUsd}</td>
          <td className="py-4 px-6">{item.volumePercent}</td>
          <td className="py-4 px-6 ">
            <Link
              to="/bitcoin"
              className="bg-transparent hover:bg-green-400 text-black-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
            >
              Calculate
            </Link>
            {/* <Link to={`/${item.quoteId}`}>Calculate</Link> */}
          </td>
        </tr>
      );
    });
    return (
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-green-100 dark:text-green-100">
          <thead
            scope="col"
            class="py-3 px-6"
            ead
            className="text-xs text-black uppercase bg-green-600 dark:text-white "
          >
            <tr>
              <th scope="col" class="py-3 px-6">
                Name
              </th>
              <th scope="col" class="py-3 px-6">
                Base Symbol
              </th>
              <th scope="col" class="py-3 px-6">
                Exchange Name
              </th>
              <th scope="col" class="py-3 px-6">
                Quote ID
              </th>
              <th scope="col" class="py-3 px-6">
                Price USD
              </th>
              <th scope="col" class="py-3 px-6">
                Volume (%)
              </th>

              <th scope="col" class="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      </div>
    );
  }
}
