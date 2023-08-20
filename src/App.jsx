import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/navbar/navbar";
import Market from './pages/Market';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/market" element={<Market />} />
          </Routes>
        </>
      </Router>
    </>
  );
};

export default App;