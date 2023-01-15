import { useState } from "react";
import arrow from "../../assets/img/arrow.svg"

export default function Collapse({label, description}) {
    const [isHidden, setIsHidden] = useState(true)

    return (
        <div className="collapse">
            <div className="collapse__header">
                <div className="collapse__header__label">{label}</div>
                {isHidden ?
                (<div onClick={() => setIsHidden(false)} className="collapse__header__icon arrow__down"><img src={arrow} alt="fleche vers le bas" /></div>)
                :
                (<div onClick={() => setIsHidden(true)} className="collapse__header__icon arrow__up"><img src={arrow} alt="fleche vers le haut" /></div>)}
            </div>
            {!isHidden && <div className="collapse__description">{description}</div>}
        </div>
    )
}