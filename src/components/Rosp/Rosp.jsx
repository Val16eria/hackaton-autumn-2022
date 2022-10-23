import { NavLink } from "react-router-dom";
import "./Rosp.css";

const Rosp = () => {
    return (
        <section id="main-banner">
            <div className="container">
                <div className="rowText">
                    <div className="Text">
                        <NavLink to="/">
                            <h2>Расписание временно недоступно</h2>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Rosp;