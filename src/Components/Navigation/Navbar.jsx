import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">DL</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        <Link className="nav-link" to="/projects">Projects</Link>
        <Link className="nav-link" to="/resume">Resume</Link>
        <Link className="nav-link" to="/blog">Blog</Link>
      
    </nav>
  );
}
export default NavBar;