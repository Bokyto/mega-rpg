import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#">Создать персонажа</a></li>
                <li><a href="#">Поле боя</a></li>
                <li><a href="#">Последние успехи</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;