import { NavLink } from "react-router-dom";
import "./Chat.css";

const Chat = () => {
    return (
        <section id="main-banner">
            <div className="container">
                <div className="rowText">
                    <div className="Text">
                        <NavLink to="/">
                            <h2>Скоро вы сможете обратиться к ректору</h2>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Chat;