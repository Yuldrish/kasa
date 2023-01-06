export default function Card({ title, picture }) {
    
    //affichage
    return(
        <div className="card">
            <img src={picture} alt={title} className="card__img" />
            <div className="card__title">{title}</div>
        </div>
    )
}