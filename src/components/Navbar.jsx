import { useState } from "react";
import logo from "../assets/img/icon.png";

function Navbar() {


return (
    <div className="navbar col-lg-12">

        <div className="navbar__content">
            <div className="logo">
                <img src={logo} className="img-logo"></img>      
                <h2>unit converter</h2>
            </div>
        </div>

    </div>

);

}

export default Navbar;