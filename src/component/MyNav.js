import React from 'react';
import "../component/MyNav.css";
import logo from "../img/logo.png";


function MyNav() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" className="logoImg"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Главная</a>
                            </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Курсы</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Расписание</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Преподаватели</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Рассылка</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Контакты</a>
                                </li>
                        </ul>
                    </div>
                    <button className="navBtn" type="button">
                        <a href="#" className="navBtnLink">Зайти в кабинет</a>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default MyNav;