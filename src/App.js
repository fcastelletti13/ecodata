import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./components/Home";
import Informacion from "./components/Informacion";
import Layout from "./components/Layout";
import Comparativas from "./components/Comparativas"; 

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/comparativas" element={<Comparativas />}></Route>
            <Route path="/informacion" element={<Informacion />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
//data:  https://datos.bancomundial.org/indicator/EN.ATM.CO2E.PC
//       https://es.ucsusa.org/sites/default/files/styles/original/public/2023-07/cumulative%20exp%20CO2%202021%20Spa_v4.png?itok=i0_QCFBf
//       https://es.ucsusa.org/sites/default/files/styles/original/public/2023-07/2020%20annual%20CO2%20emissions%20Spa_v3.png?itok=omiyXyPy
//       https://www.travelperk.com/es/soluciones/sostenibilidad/greenperk/
export default App;
