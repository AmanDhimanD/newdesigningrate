import "./App.css";
import Home from "../src/Page/Home";
import { Route, Routes } from "react-router-dom";
import Error from "../src/Page/Error";
import Navbar from "./Components/Navbar";
import useWindowDimensions from "./Components/windowDimensions";
import Bitcoin from "./PriceData/Bitcoin";

function App() {
  const { height, width } = useWindowDimensions();

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
          height: "100vh",
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
    </>
  );
}

export default App;
