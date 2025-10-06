import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header.jsx";
import index from "./Pages/Home/index.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path=""/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
