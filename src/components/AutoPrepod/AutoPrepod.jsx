import { NavLink } from "react-router-dom";
import "./AutoPrepod.css";

const AutoPrepod = () => {
    return (
        <section id="main-banner">
            <div className="container">
                <div className="rowAuPrep">
                    <div className="contAuPrep">
                    <h2>Регистрация</h2>
                        <form>
                            <input type="text" name="fio" placeholder="ФИО" id="fioPrep" required/>
                            <input type="text" name="dolj" placeholder="Должность" id="doljPrep" required/>
                            <input type="text" name="login" placeholder="Логин" id="loginPrep" required/>
                            <input type="password" name="password" placeholder="Пароль" id="passwordPrep" required/>
                            <div className="btAuPrep">
                                <NavLink to="/teacher">
                                    <input type="submit" src="../../assets/Image/page/bt.svg" alt="facebook" />
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AutoPrepod;