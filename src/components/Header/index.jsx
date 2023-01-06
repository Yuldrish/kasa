import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    
    //state
    const [className, setClassName] = useState ({
        home: "header__link linkActive",
        aboutus: "header__link"
    })

    const pathname = useLocation().pathname

    //comportements
    

    //affichage
    return (
        <header>
            <img src={logo} alt="logo_kasa" className="header__logo" />
            <nav>
                <Link to="/">Acceuil</Link>
                <Link to="/À-propos-de-nous">À propos</Link>
            </nav>
        </header>
    )
}