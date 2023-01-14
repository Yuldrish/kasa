import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Collapse({label, description}) {
    const [isHidden, setIsHidden] = useState(true)

    return (
        <div className="collapse">
            <div className="collapse__header">
                <div className="collapse__header__label">{label}</div>
                {isHidden ?
                (<div onClick={() => setIsHidden(false)} className="collapse__header__icon"><FontAwesomeIcon icon={faAngleDown} /></div>)
                :
                (<div onClick={() => setIsHidden(true)} className="collapse__header__icon"><FontAwesomeIcon icon={faAngleUp} /></div>)}
            </div>
            {!isHidden && <div className="collapse__description">{description}</div>}
        </div>
    )
}