import React from "react";
import logo from './logo.svg';
import menuIcon from './menu-icon.svg';
function NavBar() {
    return (
        <nav>
            <div className="nav-logo">
                <img src={logo}></img>
                <span>Bartosz Bugajski</span>
            </div>
            <div className="links">
                <a>About</a>
                <a>Projects</a>
                <a>Contact</a>
            </div>
            <img id="menu-icon" src={menuIcon}></img>
        </nav>
    )
}
export default NavBar;
