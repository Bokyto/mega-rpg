import React, { useEffect } from 'react';
import './MainPage.css';


const MainPage = () => {

    return (
        <div className="mainpage">
            <div className="section section-1">
                <h1>Akvelon RPG</h1>
                <p>Вау, это круто! Давай заходи!</p>
            </div>
            <div className="section section-2">
                <button>Зарегистрироваться</button>
                <p>Присоединяйся к нашему сообществу!</p>
            </div>
            <div className="section section-3">
                <img src="placeholder1.jpg" alt="Placeholder 1" />
                <img src="placeholder2.jpg" alt="Placeholder 2" />
                <img src="placeholder3.jpg" alt="Placeholder 3" />
            </div>
            <div className="section section-4 footer">
                <p>Контактная информация:</p>
                <p>Email: info@akvelonrpg.com</p>
                <p>Телефон: +123 456 789</p>
            </div>
        </div>
    );
};

export default MainPage;