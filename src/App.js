import React from "react";
// components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route exaxt path="/igniteMERNStackDemo/" element={<Home />} />
        <Route exact path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
