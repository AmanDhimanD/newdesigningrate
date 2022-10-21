import React, { useEffect, useState } from "react";
import axios from "axios";
import ExchnageDataID from "./ExchnageDataID";


const ExchnageData = () => {
  const [exID, setExID] = useState();
  useEffect(() => {
    getAllID();
  });

  const getAllID = () => {
    axios
      .get("https://api.coincap.io/v2/assets/bitcoin/markets")
      .then((response) => {
        const allID = response.data.exID.allID;
        setExID(allID);
        console.log(response.data);
      })
      .catch((err) => console.err(`Error: " ${err}`));
  };

  return <ExchnageDataID exID={exID} />;
};

export default ExchnageData;
