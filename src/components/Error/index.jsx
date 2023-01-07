import { Link } from "react-router-dom";

export default function Error() {

    return (
        <div className="error">
            <div className="error__404">404</div>
            <div className="error__text">Oups! La page que vous demandez n'existe pas.</div>
            <Link to="/" className="error__backHome">Retourner sur la page d'accueil</Link>
        </div>
    )
} 