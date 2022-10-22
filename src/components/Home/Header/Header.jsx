import "./Header.css";
import { HeaderData } from "../../../__mocks__/Header/HeaderData";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            {/* ЛОГОТИП */}
            <div className="logo">
                <NavLink to="/">
                    <img src="../../assets/Image/page/Logo.svg" alt="logo" />
                </NavLink>
            </div>
            {/* ВКЛАДКИ */}
            <div className="nav">
                <ul className="mnu-top">
                {HeaderData.map(el => {
                    return <li key={el.id}>{el.name}</li>
                })}
                </ul>
            </div>
            {/* ВОЙТИ */}
            <div className="btnsH">
                <NavLink id ="aEye" to="/">
                    <img src="../../assets/Image/page/eye.svg" alt="eye" />
                </NavLink>
                <NavLink  id ="aButton" className="btnH" to="/autorization">
                    Авторизация
                </NavLink>
            </div>
        </header>
    );
}

export default Header;