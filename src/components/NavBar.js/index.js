import React from 'react'
import { Link } from 'react-router-dom';
import "./nav.css"

import logo from '../../assets/img/logo.png';

export default function NavBar() {
    return (
        <nav className='navbar'> 
            <div className='container-main'>

                <div className='logo-container'>
                    <img className='logo' src={logo} alt='falha logo'></img>
                    <Link className='title-logo-red' to="/">Baita</Link>
                    <Link className='title-logo-green' to="/">Chef</Link>
                </div>

                <div className='container-selectores'>
                    <Link className='title-selectores' to="/">Home</Link>
                    <Link className='title-selectores' to="/HealthySelector">Saúdavel</Link>
                    <Link className='title-selectores' to="/SelectorSalgado">Salgado</Link>
                    <Link className='title-selectores' to="/CandySelector">Doces</Link>
                    <Link className='title-selectores' to="/QuickSelector">Rápidos</Link>
                </div>

            </div>
        </nav>
    )
}

