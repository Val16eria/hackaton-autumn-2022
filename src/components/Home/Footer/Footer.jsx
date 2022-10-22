import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container3">
            {/* LOGO */}
                <div className="logo2">
                    <img src="../../assets/Image/page/Logo.svg" alt="logo" />
                </div>
                <div className="inner_footer">
                    <li><a href="/">О вузе</a></li>
                    <li><a href="/">Абитуриентам</a></li>
                    <li><a href="/">Профсоюз</a></li>
                    <li><a href="/">Творческий центр</a></li>
                    <li><a href="/">Научная работа</a></li>
                    <li><a href="/">Контакты</a></li>
                </div>
            </div>
        </footer>
    );
}

export default Footer;