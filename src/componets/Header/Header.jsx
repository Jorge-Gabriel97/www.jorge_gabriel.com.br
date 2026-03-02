import { Link } from "react-router-dom";
//Assets
import Logo from "../../assets/Logo.png";
import "./Header.css";

//Components
import Button from '../Button/Button';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo} alt="Logo Jorge" /></Link>
                    <div className="mobile-menu">
                        <Button buttonStyle="secondary">
                            Menu
                        </Button>
                    </div>
                </div>
                <nav>
                    <ul className="d-flex">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/about">Sobre mim</Link></li>
                        <li><Link to="/Projects">Projetos</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header >
    )
}

export default Header;