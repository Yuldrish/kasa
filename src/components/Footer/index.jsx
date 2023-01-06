import whiteLogo from "../../assets/whiteLogo.png"

export default function Footer() {
    return(
        <footer>
            <img src={whiteLogo} alt="kasa-Logo" />
            <p className="footer__AllRight">© 2020 Kasa All rights reserved</p>
        </footer>
    )
}