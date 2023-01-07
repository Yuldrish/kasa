import { FaStar } from "react-icons/fa";

export default function Rating({ rate }) {
    const rateMax = 5
    const numberOfColoredStars = rate
    const numberOfGreyStars = rateMax - numberOfColoredStars
    let startsArray = []
    for (let i = 0; i < numberOfColoredStars; i++) {
        startsArray.push(<div className="rate__coloredStar"><FaStar /></div>)
    }
    for (let i = 0; i < numberOfGreyStars; i++) {
        startsArray.push(<div className="rate__grayStar"><FaStar /></div>)
    }
    return (
        <div className="rating">
            {startsArray.map((rate, index) => (
                <span key={index}>{rate}</span>
            ))}
        </div>
    )
}