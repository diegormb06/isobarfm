import Home from "./pages/home";
import {createGlobalStyle} from "styled-components";
import {Route, Routes } from "react-router-dom";
import BandDetails from "./pages/BandDetails";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="band/:id" element={<BandDetails />} />
      </Routes>
    </>
  );
}

export default App;
