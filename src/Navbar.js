import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
            <div>
                <nav className="nav">
                    <ul className="menu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Ourwork">Our Work</Link>
                        </li>
                        <li>
                            <Link to="/Ourproject">Our Projects</Link>
                        </li>
                        <li>
                            <Link to="/Community">Community</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                        <li>
                            <Link to="/Register">Register</Link>
                        </li>
                        <li>
                            <Link to="/Compare">Compare</Link>
                        </li>
                        
                        <li className="donate-button">
                        <Link to="/Donate">Donate</Link>
                        </li>
                        {/* <li>
                            <Link to="/Profile">Profile</Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
    );
}
