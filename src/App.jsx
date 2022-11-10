import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Menu from "./component/Menu";
import ChartRaceEje from "./component/ChartRace";
import CharLineCom from "./component/ChartLine";
import Imagen from "./component/Imagen";

function App() {
 

  return (
    <>
   
      <BrowserRouter>
      <Menu />

        <Routes>
 
          <Route index path="/" element={<ChartRaceEje />} />
          <Route   path="/Line" element={<CharLineCom />} />
          <Route   path="/Imagen" element={<Imagen />} />
   
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
