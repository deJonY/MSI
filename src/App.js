import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./component/Header";
import Section1 from "./section/Section1";
import Section2 from "./section/Section2";
import Section3 from "./section/Section3";
import Footer from "./component/Footer";

function App() {
    return (
        <div className="App">

            <Header/>

            <div className="zakazat__kurs">
                <button className="zakazatBtn">
                    <a href="#" className="zakazatBtnLink">Заказать курс</a>
                </button>

                <div className="statistic">
                    <div className="students__number">
                        <p className="student">Учеников всего:</p>
                        <p className="std_num">200</p>
                    </div>
                    <div className="students__number">
                        <p className="end__courses">Успешно закончили курс:</p>
                        <p className="courses_num">190</p>
                    </div>
                </div>

                <div className="work__line">
                    <div className="work__text">
                        <p className="w_text">Заработано учениками:</p>
                        <p className="price">400 000₽</p>
                    </div>
                    <div className="big__line">
                        <div className="mini__line"/>
                    </div>
                    <div className="line__numbers">
                        <p className="zero">0</p>
                        <p className="mln">1 000 000₽</p>
                    </div>
                </div>
            </div>

            <Section1/>

            <Section2/>

            <Section3/>

            <Footer/>
        </div>
    );
}

export default App;
