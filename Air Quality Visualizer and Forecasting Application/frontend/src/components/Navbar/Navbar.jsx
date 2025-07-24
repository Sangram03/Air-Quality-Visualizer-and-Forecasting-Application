import React, { useState } from "react";
import "./Navbar.css";
import { User , Github, Facebook, Twitter ,CloudHail } from "lucide-react";

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home")
  return (
    <>
    <nav className="nav">
      <ul>
        <li><CloudHail className="w-6 h-6 text-green-600" /></li>
        </ul>
        <div className="mid">
          <ul>
            <li onClick={()=>setMenu("home")} className={menu ==="home" ? "active" : ""}>Home</li>
            <li onClick={()=>setMenu("about")} className={menu ==="about"  ? "active" : ""}>About</li>
            <li onClick={()=>setMenu("service")} className={menu ==="service"  ? "active" : ""}>Service</li>
            <li onClick={()=>setMenu("Contact-us")} className={menu ==="Contact-us"  ? "active" : ""}>Contact Us</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li><User onClick={() => setShowLogin(true)} className="w-6 h-6 text-orange-600" /></li>
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
