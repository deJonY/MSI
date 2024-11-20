import React from 'react';
import "../section/Section2.css";
import icon1 from "../img/icon-1.png";
import icon2 from "../img/icon-2.png";
import icon3 from "../img/icon-3.png";
import msiLogo from "../img/msi-logo.png";
import ellipseLogo from "../img/Ellipse 1 (Stroke).png";

function Section2() {
    return (
        <div>
            <p className="S2-Title">Получите профессию прямо сейчас</p>
            <div className="row Row">
                <div className="col-xl-4 text-center">
                    <img src={icon1} alt="" className="center-icon"/>

                    <p className="miniTitle">Только практические навыки в работе</p>
                    <p className="mini-Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit
                        quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat
                        dui.</p>
                </div>
                <div className="col-xl-4 text-center">
                    <img src={icon2} alt="" className="center-icon"/>

                    <p className="miniTitle">Работа на самом современном оборудовании</p>
                    <p className="mini-Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit
                        quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat
                        dui.</p>
                </div>
                <div className="col-xl-4 text-center">
                    <img src={icon3} alt="" className="center-icon"/>

                    <p className="miniTitle">Сертификация по окончании обучения</p>
                    <p className="mini-Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit
                        quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat
                        dui.</p>
                </div>
            </div>

            <div className="msi__logo">
                <div className="logo__text">
                    <img src={ellipseLogo} alt="" className="ellipse__logo"/>
                    <p className="text">Партнеры - топовые бренды</p>
                </div>

                <div className="msi__images">
                    <div className="images1">
                        <img src={msiLogo} alt="" className="msiImg"/>
                        <div className="line"/>
                        <img src={msiLogo} alt="" className="msiImg"/>
                        <div className="line"/>
                        <img src={msiLogo} alt="" className="msiImg"/>
                        <div className="line"/>
                        <img src={msiLogo} alt="" className="msiImg"/>
                    </div>
                    <div className="center__line"/>
                    <div className="images2">
                        <img src={msiLogo} alt="" className="msiImg"/>
                        <div className="line"/>
                        <img src={msiLogo} alt="" className="msiImg"/>
                        <div className="line"/>
                        <img src={msiLogo} alt="" className="msiImg"/>
                        <div className="line"/>
                        <img src={msiLogo} alt="" className="msiImg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section2;