import React from 'react';
import "../component/Header.css";
import MyNav from "./MyNav";

function Header() {
    return (
        <div className="header__bg">
            <MyNav/>

            <p className="H-Title">Первый курс по компьютерной сборке</p>

            <div className="time">
                <div className="mini-box">
                    <p className="time_number">18</p>
                    <p className="time_day">Дней</p>
                </div>
                <div className="mini-box">
                    <p className="time_number">18</p>
                    <p className="time_day">Часов</p>
                </div>
                <div className="mini-box">
                    <p className="time_number">18</p>
                    <p className="time_day">Минут</p>
                </div>
                <div className="mini-box">
                    <p className="time_number">18</p>
                    <p className="time_day">Секунд</p>
                </div>
            </div>
            
            <div>
                {/*<div className="zakazat__kurs">*/}
                {/*    <button className="zakazatBtn">*/}
                {/*        <a href="#" className="zakazatBtnLink">Заказать курс</a>*/}
                {/*    </button>*/}
                {/*    */}
                {/*    <div className="statistic">*/}
                {/*        <div className="students__number">*/}
                {/*            <p className="student">Учеников всего:</p>*/}
                {/*            <p className="std_num">200</p>*/}
                {/*        </div>*/}
                {/*        <div className="students__number">*/}
                {/*            <p className="end__courses">Успешно закончили курс:</p>*/}
                {/*            <p className="courses_num">190</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="work__line">*/}
                {/*        <div className="work__text">*/}
                {/*            <p className="w_text">Заработано учениками:</p>*/}
                {/*            <p className="price">400 000₽</p>*/}
                {/*        </div>*/}
                {/*        <div className="big__line">*/}
                {/*            <div className="mini__line"/>*/}
                {/*        </div>*/}
                {/*        <div className="line__numbers">*/}
                {/*            <p className="zero">0</p>*/}
                {/*            <p className="mln">1 000 000₽</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Header;