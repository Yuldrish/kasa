import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Rating({ rate }) {
    const rateMax = 5
    const numberOfColoredStars = rate
    const numberOfGreyStars = rateMax - numberOfColoredStars
    let starsArray = []
    for (let i = 0; i < numberOfColoredStars; i++) {
        starsArray.push(<div className="rating__coloredStar"><FontAwesomeIcon icon={faStar} /></div>)
    }
    for (let i = 0; i < numberOfGreyStars; i++) {
        starsArray.push(<div className="rating__greyStar"><FontAwesomeIcon icon={faStar} /></div>)
    }
    return (
        <div className="rating">
            {starsArray.map((rate, index) => (
                <span key={index}>{rate}</span>
            ))}
        </div>
    )
}