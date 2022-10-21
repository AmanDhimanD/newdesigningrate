import "./App.css";
import Home from "../src/Page/Home";
import { Route, Routes } from "react-router-dom";
import Error from "../src/Page/Error";
import Navbar from "./Components/Navbar";
import useWindowDimensions from "./Components/windowDimensions";
import Bitcoin from "./PriceData/Bitcoin";

function App() {
  const { height, width } = useWindowDimensions();
  const styleCSS2 = {
    background: "#4ade80 ",
    height: "50vh",
    color: "black",
  };
  const styleCSS3 = {
    background: "black",
    height: "100vh",
    color: "white",
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          /* backgroundImage: `url('https://img.freepik.com/free-photo/modern-futuristic-sci-fi-background_35913-2152.jpg?w=996&t=st=1665770551~exp=1665771151~hmac=e19e1a7c6d88567ca098e12098ff050ff32202ce986d1d75b31020b4c59da53c')`, */
          background: "#000000",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "auto",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route
            path="/bitcoin"
            element={<Bitcoin curName={"bitcoin"} />}
            exact
          />
          <Route
            path="/ethereum"
            element={<Bitcoin curName={"ethereum"} />}
            exact
          />
          <Route
            path="/ripple"
            element={<Bitcoin curName={"ripple"} />}
            exact
          />
          <Route
            path="/bch"
            element={<Bitcoin curName={"bitcoin-cash"} />}
            exact
          />
          <Route path="/eos" element={<Bitcoin curName={"eos"} />} exact />
          <Route
            path="/stellar"
            element={<Bitcoin curName={"stellar"} />}
            exact
          />
          <Route
            path="/siacoin"
            element={<Bitcoin curName={"siacoin"} />}
            exact
          />
          <Route
            path="/litecoin"
            element={<Bitcoin curName={"litecoin"} />}
            exact
          />
          <Route
            path="/cardano"
            element={<Bitcoin curName={"cardano"} />}
            exact
          />

          <Route path="*" element={<Error />} exact />
        </Routes>
      </div>


      
      {/* second bg tags */}
      {/* <div style={styleCSS2} className="text-center  ">
        <h1 className="font-bold">Crypto Diffrence</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          voluptas nisi non placeat recusandae, veniam dolore vitae quasi id
          corrupti et, repellendus quidem?
        </p>
      </div>
      <div style={styleCSS3}>
        
      </div> */}
    </>
  );
}

export default App;
