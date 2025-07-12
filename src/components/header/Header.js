import React from 'react';
import './Header.css';
import MenuBar from '../menu_bar/MenuBar';
import logo from '../../assets/images/logo.jpeg'

function Header() {
    return (
        <div className="header-container">
            
            <img src={logo} alt="Adornik Logo" className="header-logo" />
            <div className="header-text">
                <h1>Bem-vindo à Adornik Arte e Aço</h1>
                <p>Descubra nossas coleções exclusivas de joias em aço inoxidável.</p>
            </div>
        <MenuBar />
        </div>

    )
}

export default Header;