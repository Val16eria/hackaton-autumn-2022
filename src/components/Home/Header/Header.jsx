import "./Header.css";
import { HeaderData } from "../../../__mocks__/Header/HeaderData";


const Header = () => {
    return (
        <header id="header">
            {/* ЛОГОТИП */}
            <div className="logo">
                <a href="/">
                    <img src="../../assets/Image/page/Logo.svg" alt="logo" />
                </a>
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
                <a id ="aEye" href="/">
                    <img src="../../assets/Image/page/eye.svg" alt="eye" />
                </a>
                <a id ="aButton" href="/" className="btnH">
                    Авторизация
                </a>
            </div>
        </header>
    );
}

export default Header;