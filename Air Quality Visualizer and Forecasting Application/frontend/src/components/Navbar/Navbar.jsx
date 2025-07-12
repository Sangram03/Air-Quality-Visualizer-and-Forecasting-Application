import React from "react";
import "./Navbar.css";
import { Airplay, Github, Facebook, Twitter } from "lucide-react";

const Navbar = () => {
  return (
    <>
    <nav className="nav">
        <div className="left">PROJECT X</div>
        <div className="mid">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li><Airplay className="w-6 h-6 text-orange-600" /></li>
            <li> <Github className="w-6 h-6 text-orange-600" /></li>
            <li><Facebook className="w-6 h-6 text-orange-600" /></li>
            <li><Twitter className="w-6 h-6 text-orange-600" /></li>
          </ul>
        </div>
      </nav>

    </>

  );
};

export default Navbar;
