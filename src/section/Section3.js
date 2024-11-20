import React from 'react';
import "../section/Secton3.css";
import Ellipse from "../img/Ellipse 1 (Stroke) (1).png";
import line from "../img/Line 5.png";
import Ellipse2 from "../img/Ellipse 1 (Stroke) (2).png";
import user1 from "../img/Ellipse 2.png";
import user2 from "../img/Ellipse 2 (1).png";
import user3 from "../img/Ellipse 2 (2).png";

function Section3() {


    return (
        <div className="container">
            <div className="center__icon">
                <img src={Ellipse} alt="" className=""/>
            </div>
            <p className="S3__Title">Программа обучения</p>
            <p className="S3__Text">Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>

            <div className="text-lines">
                <div className="text__line text__side1">
                    <div className="text__line__texts margin-bottom">
                        <div className="">
                            <p className="text__line__title">Неделя №1</p>
                            <p className="text__line__text">Красивая часть курса,
                                которая помогает в успехе</p>
                        </div>
                        <img src={line} alt="" className="LINE"/>
                    </div>
                    <div className="text__line__texts margin-bottom">
                        <div className="">
                            <p className="text__line__title">Неделя №3</p>
                            <p className="text__line__text">Красивая часть курса,
                                которая помогает в успехе</p>
                        </div>
                        <img src={line} alt="" className="LINE"/>
                    </div>
                    <div className="text__line__texts  margin-bottom">
                        <div className="">
                            <p className="text__line__title">Неделя №5</p>
                            <p className="text__line__text">Красивая часть курса,
                                которая помогает в успехе</p>
                        </div>
                        <img src={line} alt="" className="LINE"/>
                    </div>
                    <div className="text__line__texts margin-bottom">
                        <div className="">
                            <p className="text__line__title">Неделя №7</p>
                            <p className="text__line__text">Красивая часть курса,
                                которая помогает в успехе</p>
                        </div>
                        <img src={line} alt="" className="LINE"/>
                    </div>

                </div>
                <div className="center-line"/>
                <div className="text__line text__side2">
                    <div className="text__line__texts margin-bottom">
                        <img src={line} alt="" className=""/>
                        <div className="">
                            <p className="text__line__title">Неделя №2</p>
                            <p className="text__line__text">Красивая часть курса,
                                которая помогает в успехе</p>
                        </div>
                    </div>
                    <div className="text__line__texts margin-bottom">
                        <img src={line} alt="" className=""/>
                        <div className="">
                            <p className="text__line__title">Неделя №4</p>
                            <p className="text__line__text">Красивая часть курса,
                                которая помогает в успехе</p>
                        </div>
                    </div>
                    <div className="text__line__texts margin-bottom">
                        <img src={line} alt="" className=""/>
                        <div className="">
                            <p className="text__line__title">Неделя №6</p>
                            <p className="text__line__text">Красивая часть курса,
                                которая помогает в успехе</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="logo-title">
                <img src={Ellipse2} alt="" className="logo"/>
                <p className="S3__Title1">Ваши преподаватели</p>
            </div>

            <div className="profile">
                <div className="user">
                    <img src={user1} alt="" className="user__img"/>
                    <p className="user__name">Дмитрий Иванов</p>
                    <p className="user__position">Специалист по видеокартам</p>

                    <button className="about__user">
                        <a href="#" className="about__user__link">Биография</a>
                    </button>
                </div>
                <div className="user">
                    <img src={user2} alt="" className="user__img"/>
                    <p className="user__name">Дмитрий Иванов</p>
                    <p className="user__position">Специалист по видеокартам</p>

                    <button className="about__user">
                        <a href="#" className="about__user__link">Биография</a>
                    </button>
                </div>
                <div className="user">
                    <img src={user3} alt="" className="user__img"/>
                    <p className="user__name">Дмитрий Иванов</p>
                    <p className="user__position">Специалист по видеокартам</p>

                    <button className="about__user">
                        <a href="#" className="about__user__link">Биография</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Section3;