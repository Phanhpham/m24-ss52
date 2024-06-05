import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Elements from "./assets/components/Elements";
import Index from "./assets/components/Index";
import Service from "./assets/components/Service";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
     <Link to={"/about"}>about</Link>
      
      <Link to={"/contact"}>contact</Link>
   
      <Link to={"/elements"}>elements</Link>

      <Link to={"/index"}>index</Link>
      
      <Link to={"/service"}>service</Link>
   
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/elements" element={<Elements></Elements>}></Route>
        <Route path="/index" element={<Index></Index>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
      </Routes>
    </>
  );
}

export default App;
