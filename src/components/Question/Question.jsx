import { NavLink } from "react-router-dom";
import "./Question.css";

const Question = () => {
    return (
        <section id="main-banner">
            <div className="container">
                <div className="rowQue">
                    
                    <div className="BQue-Text">
                        <h2>Выберите, кому задать вопрос</h2>
                    </div>
            
                    {/* ТРИ КНОПКИ */}
                    <div className="btnsQue">
                        <NavLink id ="btnSotr" to="/spisokSotr" className="btnQue1">
                            Сотрудник
                        </NavLink>
                        <NavLink id ="btnTeacher" to="/spisokSotr" className="btnQue2">
                            Преподаватель
                        </NavLink>
                        <NavLink id ="btnAdmin" to="/chat" className="btnQue3">
                            Администратор
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Question;