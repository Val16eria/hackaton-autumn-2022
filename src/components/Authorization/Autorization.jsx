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
                            <input type="text" name="fio" placeholder="ФИО" id="fio" required/>
                            <input type="text" name="login" placeholder="Логин" id="login" required/>
                            <input type="password" name="password" placeholder="Пароль" id="password" required/>

                            <div className="bott">
                                <NavLink to="/student">
                                    <label htmlFor="student">Студент</label>
                                </NavLink>

                                <NavLink to="/teacher">
                                    <label htmlFor="teacher">Преподаватель</label>
                                </NavLink>

                                <NavLink to="/sotr">
                                    <label htmlFor="sotr">Сотрудник</label>
                                </NavLink>
                            </div>
                            <div className="btAu">
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