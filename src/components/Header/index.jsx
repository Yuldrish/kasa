import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
    //affichage
    return (
        <header>
            <img src={logo} alt="logo_kasa" />
            <nav>
                <Link to="/">Acceuil</Link>
                <Link to="/À-propos-de-nous">À propos</Link>
            </nav>
        </header>
    )
}