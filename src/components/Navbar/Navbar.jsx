import React from "react";
import './Navbar.css';
import logo from '../../images/Logo.png'
import Search from '../Search/Search';

function Navbar(){
    return(
        <header className="navbar">
            <nav className="navbar_navigation">
                <div className="navbar_logo"> 
                    <a href="/"><img src={logo} alt="marvel logo"></img></a>
                </div>
                <div className="navbar_title"> 
                    <a href="/">MARVEL CHARACTERS</a>   
                </div>
                <div className="navbar_search">
                    <Search ></Search>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;