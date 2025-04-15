import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import prof_img from '../../assets/profile_img.png'
import dropdown_icon from '../../assets/caret_icon.svg'
function Navbar(){
    return(
        <>
        <div className="navbar">
            <div className="nav-left">
                <img src={logo} alt="" className=""/>
                <ul>
                    <li>Home</li>
                    <li>Tv Shows</li>
                    <li>New & Popular</li>
                    <li>My list</li>
                    <li>Browse by Languages</li>

                </ul>
            </div>
            <div className="nav-right">
                <img src={search_icon} alt="search-icon" className="icons"/>
                <p>Children</p>
                <img src={bell_icon} alt="search-icon" className="icons"/>
                <div className="nav-profile">
                <img src={prof_img} alt="search-icon" className="profile"/>
                <img src={dropdown_icon} alt="search-icon" className=""/>
                <div className="dropdown">
                    <p> Logout</p>
                </div>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default Navbar;