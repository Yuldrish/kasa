import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Header() {
    
    //state
    const [className, setClassName] = useState ({
        home: "header__link linkActive",
        aboutus: "header__link"
    })

    const pathname = useLocation().pathname

    //comportements
    useEffect(() => {
        if (pathname === "/") {
            setClassName({
                home: "header__link linkActive",
                aboutus: "header__link"
            })
        } else if (pathname === "/À-propos-de-nous") {
            setClassName({
                home: "header__link",
                aboutus: "header__link linkActive"
            })
        } else {
            setClassName({
                home: "header__link",
                aboutus: "header__link"
            })
        }
    }, [pathname])

    //affichage
    return (
        <header>
            <img src={logo} alt="logo_kasa" className="header__logo" />
            <nav>
                <Link to="/" className={className.home}>Acceuil</Link>
                <Link to="/À-propos-de-nous" className={className.aboutus}>À propos</Link>
            </nav>
        </header>
    )
}