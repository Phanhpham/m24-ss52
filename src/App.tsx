import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/Components/B1+b2/Home";
import About from "./assets/Components/B1+b2/About";
import Contact from "./assets/Components/B1+b2/Contatct";

export default function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}
