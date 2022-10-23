import { NavLink } from "react-router-dom";
import "./Student.css";

const Student = () => {
    return (
        <section id="main-banner">
            <div className="container">
                <div className="rowSt">
                    <img src="../../assets/Image/page/11.png" alt="foto" id="Stfon"/>
                    <div className="BSt-Text">
                        <h2>Михайленко Валерия Михайловна</h2>
                        <h3>ПОКС-32B</h3>
                    </div>
                    <div className="space">
                    <NavLink to="/rosp">
                        <img src="../../assets/Image/page/cardSudent.svg" alt="foto" id="Cards"/>
                    </NavLink>
                    <NavLink to="/brief">
                        <img src="../../assets/Image/page/cardTeacher.svg" alt="foto" id="Cards"/>
                    </NavLink>
                    <NavLink to="/what">
                        <img src="../../assets/Image/page/cardSotr.svg" alt="foto" id="Cards"/>
                    </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Student;