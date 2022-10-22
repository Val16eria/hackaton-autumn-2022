import { NavLink } from "react-router-dom";
import "./Counter.css";

const Counter = () => {
    return (
        <section id="main-banner">
            <div className="container">
                <div className="rowC1">
                    {/* ТЕКСТ BIG*/}
                    <div className="big-text">
                        <h2 id="h2Web">
                            <span id="black">W</span>
                            <span id="yellow">E</span>
                            <span id="black">B</span>
                            <span id="gray">practice</span>
                        </h2>
                        <h2 id="h2edu"><span id="yellow">ducation</span></h2>
                    </div>

                    {/* ТЕКСТ SMALL*/}
                    <div className="small-text">
                        <p>
                            Образование — система воспитания и обучения личности, 
                            а также совокупность приобретаемых знаний, умений, навыков.
                        </p>
                    </div>

                    {/* ФОТО */}
                    <div className="students-img">
                        <img src='../../assets/Image/page/students.svg' alt="fon"/>
                    </div>
                </div>


                <div className="rowC2">
                    {/* ДВЕ КНОПКИ */}
                    <div className="btnsС">
                        <NavLink id ="cpesial" to="/" className="btnС1">
                            Специальности
                        </NavLink>
                        <NavLink id ="zayv" to="/" className="btnС2">
                            Подать заявку
                        </NavLink>
                    </div>

                    {/* ИКОНКИ */}
                    <div className="icons">
                        <ul>
                        {/* ВКОНТАКТЕ */}
                            <li className="icon-v">
                                <NavLink to="/">
                                    <img src="../../assets/Image/page/vk.svg" alt="vk" />
                                </NavLink>
                            </li>
                            {/* ТЕЛЕГРАММ */}
                            <li className="icon-t">
                                <NavLink to="/">
                                    <img src='../../assets/Image/page/tg.svg' alt="telegram" />
                                </NavLink>
                            </li>
                            {/* ФЕЙСБУК */}
                            <li className="icon-f">
                                <NavLink to="/">
                                    <img src="../../assets/Image/page/face.svg" alt="facebook" />
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* ФОТО */}
                    <div className="walv-img">
                        <img src='../../assets/Image/page/walv1.svg' alt="walv"/>
                    </div>

                    {/* ТЕКСТ SMALL*/}
                    <div className="news-text">
                        <h2>
                            Новости
                        </h2>
                    </div>

                    {/* ФОТО */}
                    <div className="door-img">
                        <img src='../../assets/Image/page/door.svg' alt="door"/>
                    </div>

                    <NavLink id ="" to="/" className="sslka">
                        Остальные новости →
                    </NavLink>

                    {/* ФОТО */}
                        <div className="project-text">
                            <h2>
                                Наши проекты
                            </h2>
                        </div>
                            <img src='../../assets/Image/page/new1.svg' alt="new1" id="new1" />
                            <img src='../../assets/Image/page/new2.svg' alt="new2" id="new2"/>
                        <div className="walv-img">
                            <img src='../../assets/Image/page/walv1.svg' alt="walv"/>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Counter;