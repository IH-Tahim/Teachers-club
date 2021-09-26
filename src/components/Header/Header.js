import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header className="header">

            <img src={logo} alt="logo" className="logo" />
            <h2>Choose The best teachers to create a club</h2>
            <h4>Total Budget: $2000000</h4>
        </header>
    );
};

export default Header;