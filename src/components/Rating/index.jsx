
export default function Rating({ rate }) {
    const rateMax = 5
    const numberOfColoredStars = rate
    const numberOfGreyStars = rateMax - numberOfColoredStars
    let starsArray = []
    for (let i = 0; i < numberOfColoredStars; i++) {
        starsArray.push(<div className="rating__coloredStar">★</div>)
    }
    for (let i = 0; i < numberOfGreyStars; i++) {
        starsArray.push(<div className="rating__greyStar">★</div>)
    }
    return (
        <div className="rating">
            {starsArray.map((rate, index) => (
                <span key={index}>{rate}</span>
            ))}
        </div>
    )
}