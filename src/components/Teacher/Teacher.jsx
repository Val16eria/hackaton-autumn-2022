import { NavLink } from "react-router-dom";
import "./Teacher.css";

const Teach = () => {
    return (
        <section id="main-banner">
            <div className="container">
                <div className="rowTeach">
                    <img src="../../assets/Image/page/13.png" alt="foto" id="Teachfon"/>
                    <div className="BSt-Text">
                        <h2>Наскалова Олеся Викторовна</h2>
                        <h3>Преподаватель Математики</h3>
                    </div>
                    <div className="space">
                    <NavLink to="/rasp">
                        <img src="../../assets/Image/page/rosp2.svg" alt="foto" id="Cards"/>
                    </NavLink>
                    <NavLink to="/brief">
                        <img src="../../assets/Image/page/brief2.svg" alt="foto" id="Cards"/>
                    </NavLink>
                    <NavLink to="/what">
                        <img src="../../assets/Image/page/what2.svg" alt="foto" id="Cards"/>
                    </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Teach;