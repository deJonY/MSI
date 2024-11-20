import React from 'react';
import "../component/Footer.css";
import vk from "../img/vk.png";
import youtube from "../img/youtube.png";
import facebook from "../img/facebook (3).png";
import instagram from "../img/instagram (3).png";

function Footer() {
    return (
        <div className="container pb-5">
            <p className="F-title">Статьи каждую неделю</p>
            <p className="F-text">Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>

            <div className="input__button">
                <input type="email" className="inp" placeholder="E-mail" name="email"/>
                <button className="F-button">
                    <a href="#" className="F-button-link">Подписаться</a>
                </button>
            </div>

            <div className="centered">
                <div className="social">
                    <div className="social__icon">
                        <img src={vk} alt="" className=""/>
                    </div>
                    <div className="social__icon">
                        <img src={youtube} alt="" className=""/>
                    </div>
                    <div className="social__icon">
                        <img src={facebook} alt="" className=""/>
                    </div>
                    <div className="social__icon">
                        <img src={instagram} alt="" className=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;