import { NavLink } from "react-router-dom";
import "./Autorization.css";

const Autorization = () => {
    return (
        <section id="main-banner">
            <div className="container">
                <div className="rowAu">
                    <div className="contAu">
                    <h2>Войти</h2>
                        <form>
                            <input type="text" name="fio" placeholder="ФИО" id="fio"/>
                            <input type="text" name="login" placeholder="Логин" id="login"/>
                            <input type="password" name="password" placeholder="Пароль" id="password"/>

                            <div className="bott">
                                <input type="radio" id="student" name="vbr" value="tudent" />
                                <label htmlFor="student">Студент</label>

                                <input type="radio" id="teacher" name="vbr" value="teacher" />
                                <label htmlFor="teacher">Преподаватель</label>

                                <input type="radio" id="sotr" name="vbr" value="sotr" />
                                <label htmlFor="sotr">Сотрудник</label>
                            </div>
                            <div className="btAu">
                                <NavLink to="/sotr">
                                    <img src="../../assets/Image/page/bt.svg" alt="facebook" />
                                </NavLink>
                                <NavLink to="/noAccount">
                                    <p>Нет аккаунта</p>
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Autorization;