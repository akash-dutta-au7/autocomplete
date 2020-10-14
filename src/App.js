import React from "react";
import Search from "./Components/Searchbar";
import Headings from "./Components/Headings";
import Navbar from "./Components/Navbar";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Headings />
        <Search />
      </BrowserRouter>
    </div>
  );
}

export default App;
