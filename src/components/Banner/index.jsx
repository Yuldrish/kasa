export default function Banner({ text = "", picture }) {

    //affichage
    return(
        <div className="banner">
            <img src={picture} alt="bannier" className="banner__img" />
            <p className="banner__text">{text}</p>
        </div>
    )
}