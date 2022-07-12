import React from 'react';
import "./AppHeader.css";
import logo from '../logo.svg';


const AppHeader = ({ title }) => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                {title}
            </p>
        </header>)
};

export default AppHeader;