import { NavLink } from "react-router-dom";
import "./AutoOther.css";

const AutoOther = () => {
    return (
        <section id="main-banner">
            <div className="container">
                <div className="rowAuP">
                    <div className="contAuP">
                    <h2>Регистрация</h2>
                        <form>
                            <input type="text" name="fio" placeholder="ФИО" id="fioP"/>
                            <input type="text" name="dolj" placeholder="Должность" id="doljP"/>
                            <input type="text" name="login" placeholder="Логин" id="loginP"/>
                            <input type="password" name="password" placeholder="Пароль" id="passwordP"/>
                            <div className="btAuP">
                                <NavLink to="/teacher">
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

export default AutoOther;