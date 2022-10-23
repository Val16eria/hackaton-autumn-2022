import { NavLink } from "react-router-dom";
import "./Who.css";

const Who = () => {
    return (
        <section id="main-banner">
            <div className="container">
                <div className="rowQue">
                    
                    <div className="BQue-Text">
                        <h2>Какой у тебя статус?</h2>
                    </div>
            
                    {/* ТРИ КНОПКИ */}
                    <div className="btnsQue">
                        <NavLink id ="btnSotr" to="/autoRegP" className="btnQue1">
                            Сотрудник
                        </NavLink>
                        <NavLink id ="btnTeacher" to="/autoRegP" className="btnQue2">
                            Преподаватель
                        </NavLink>
                        <NavLink id ="btnStud" to="/chat" className="btnQue3">
                            Студент
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Who;