import React from "react";

const ExchnageDataID = (props) => {
  const [menu, exID] = props;
  if (exID.length > 0) {
      return exID.map((exID, index) => {
          console.log(exID)
          return (
              <div key={exID.id}>
                  {exID.exchangeId}
              </div>
          )
      });
      
    }
    return (
        <>
            {ExchnageDataID(props)}
        </>
    )
};

export default ExchnageDataID;
