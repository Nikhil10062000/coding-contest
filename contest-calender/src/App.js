import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import Header from "./Header/Header";
import Section from "./Section/Section";
import Home from "./Section/Home";
import { BrowserRouter, Routes , Route } from "react-router-dom";
function App() {
  return (
    <>
    <Header />
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="section" element={<Section />}/>
    </Routes>
    </BrowserRouter>
      
      
    </>
  );
}

export default App;
