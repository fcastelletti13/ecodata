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

export default App;
