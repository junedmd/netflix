import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
export default function Navbar(){
         return(
            <>
                <div className="navbar ">
                         < Link className="asd" to="/" > HOME </Link>
                         < Link className="asd" to="/about" > ABOUT </Link> 
                         < Link  className="asd" to="/contact" > BOOK TABLE </Link> 
                       
                </div>

            </>
         )
}