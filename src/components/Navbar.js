import React from "react";
import {Link} from 'react-router-dom';
import logox from '../assets/img/logox4.png'

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/home" className= "navbar-brand">
                <img heigth ="50" width="50" src={logox} alt="Logo react js"/>&nbsp;&nbsp;
                <strong>Home</strong>
            </Link>

            <Link  to="/perfiles" className="btn btn-info mr-3">
                REGISTROS
            </Link>

            <Link to="#" className="btn btn-info">
                RESERVAS
            </Link>
        </nav>
    )
}
export default Navbar

