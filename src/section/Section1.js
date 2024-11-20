import React from 'react';
import "../section/Section1.css";
import comp from "../img/about__img.png";
import icon_handing from "../img/icon-heading.png";
import rectangle1 from "../img/Rectangle 7.png";
import rectangle2 from "../img/Rectangle 8 (1).png";
import rectangle3 from "../img/Rectangle 9 (2).png";
import rectangle4 from "../img/Rectangle 10.png";

function Section1() {
    return (
        <div className="container">
            <div className="row block__one">
                <div className="col-xl-6">
                    <img src={comp} alt="" className="leftComp"/>
                </div>
                <div className="col-xl-6">
                    <p className="Title1">Чем мы занимаемся?</p>
                    <p className="Text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim
                        et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum
                        vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean
                        facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit,
                        sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. Nullam turpis arcu
                        malesuada arcu interdum placerat nisi, lobortis.</p>
                </div>
            </div>
            <div className="row block__two">
                <div className="icon__text">
                    <div className="icons">
                        <img src={icon_handing} alt="" className="icon__handing"/>
                        <p className="Title2">Быстрый старт</p>
                    </div>
                    <p className="miniText">Больше 90% учеников прошли полный курс и смогли собрать свой первый
                        компьютер</p>
                </div>

                <div className="col-xl-3">
                    <p className="numberPersent">100%</p>
                    <img src={rectangle1} alt="" className="rec1"/>
                    <p className="Text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit
                        quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat
                        dui.</p>
                </div>
                <div className="col-xl-3">
                    <p className="numberPersent">75%</p>
                    <img src={rectangle2} alt="" className="rec2"/>
                    <p className="Text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit
                        quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat
                        dui.</p>
                </div>
                <div className="col-xl-3">
                    <p className="numberPersent">50%</p>
                    <img src={rectangle3} alt="" className="rec3"/>
                    <p className="Text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit
                        quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat
                        dui.</p>
                </div>
                <div className="col-xl-3">
                    <p className="numberPersent">Итог</p>
                    <img src={rectangle4} alt="" className="rec4"/>
                    <p className="Text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit
                        quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat
                        dui.</p>
                </div>
            </div>
        </div>
    );
}

export default Section1;