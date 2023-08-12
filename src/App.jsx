import Navbar from "./components/Navbar/NavBar";
import Home from "./components/Home";
import Market from "./components/Market";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/market" element={<Market />} />
        </Routes>
      </Router>
      {/* <Home /> */}
    </>
  );
};

export default App;