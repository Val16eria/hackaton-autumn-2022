import { NavLink } from "react-router-dom";
import "./SpisokSotr.css";

const SpisokSotr = () => {
    return (
        <section id="main-banner">
            <div className="container">
                <div className="rowSpisok">
                    
                    <div className="BSpisok-Text">
                        <h2>Преподаватели/Сотрудники</h2>
                    </div>

                    {/* СПИСОК СОТРУДНИКОВ */}
                    <div className="btnsSpisok">
                        <NavLink id ="btnSotr1" to="/chat" className="chat1">
                            Дегтярёв Сергей Сергеевич
                        </NavLink>
                        <NavLink id ="btnSotr2" to="/chat" className="chat2">
                            Наскалова Олеся Викторовна
                        </NavLink>
                        <NavLink id ="btnSotr3" to="/chat" className="chat3">
                            Иванов Иван Иванович
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SpisokSotr;