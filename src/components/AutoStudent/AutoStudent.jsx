import { NavLink } from "react-router-dom";
import "./AutoStudent.css";

const AutoStudent = () => {
    return (
        <section id="main-banner">
            <div className="container">
                <div className="rowAuS">
                    <div className="contAuS">
                    <h2>Регистрация</h2>
                        <form>
                            <input type="text" name="fio" placeholder="ФИО" id="fioS"/>
                            <input type="text" name="dolj" placeholder="Группа" id="grupS"/>
                            <input type="text" name="login" placeholder="Логин" id="loginS"/>
                            <input type="password" name="password" placeholder="Пароль" id="passwordS"/>
                            <div className="btAuS">
                                <NavLink to="/student">
                                    <img src="../../assets/Image/page/bt.svg" alt="facebook" />
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AutoStudent;