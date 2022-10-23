import { NavLink } from "react-router-dom";
import "./Sotr.css";

const Sotr = () => {
    return (
        <section id="main-banner">
            <div className="container">
                <div className="rowSotr">
                    <img src="../../assets/Image/page/12.png" alt="foto" id="Sotrfon"/>
                    <div className="BSt-Text">
                        <h2>Иванов Иван Иванович</h2>
                        <h3>Сотрудник учебной части</h3>
                    </div>
                    <div className="space">
                    <NavLink to="/rasp">
                        <img src="../../assets/Image/page/rosp.svg" alt="foto" id="Cards"/>
                    </NavLink>
                    <NavLink to="/brief">
                        <img src="../../assets/Image/page/brief.svg" alt="foto" id="Cards"/>
                    </NavLink>
                    <NavLink to="/what">
                        <img src="../../assets/Image/page/test.svg" alt="foto" id="Cards"/>
                    </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sotr;