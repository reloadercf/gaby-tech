import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <img src="" alt=""/>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/">Proyectos</Link>
                    </li>
                    <li>
                        <Link to="/purchase">Comprar Bonos</Link>
                    </li>
                    <li><a href="#validacion">Validación</a></li>
                </ul>
            </nav>

        </div>
            
        </>
    )
}

export default Navbar
