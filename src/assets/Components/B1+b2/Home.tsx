import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      
          <Link to={"/home"}>Home</Link>
      
          <Link to={"/about"}>About</Link>
       
          <Link to={"/contact"}>Contact</Link>
        
    </div>
  );
};

export default Home;
