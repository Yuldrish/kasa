import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Slideshow({photosArray}) {
    const numberOfPhotos = photosArray.length
    const firstPhoto = photosArray[0]
    const lastPhoto =photosArray[numberOfPhotos - 1]
    const [actualPhoto, setActualPhoto] = useState(firstPhoto)

    const previousPhoto = function (actualPhoto) {
        if (actualPhoto === firstPhoto) {
            setActualPhoto(lastPhoto)
        } else {
            const actualPhotoIndex = photosArray.indexOf(actualPhoto)
            setActualPhoto(photosArray[actualPhotoIndex - 1])
        }
    }
    const nextPhoto = function (actualPhoto) {
        if (actualPhoto === lastPhoto) {
            setActualPhoto(firstPhoto)
        } else {
            const actualPhotoIndex = photosArray.indexOf(actualPhoto)
            setActualPhoto(photosArray[actualPhotoIndex + 1])
        }
    }

    return (
        <div className="slideshow">
            <div className="slideshow__img">
                <img src={actualPhoto} alt="logement" />
            </div>
            {numberOfPhotos !== 1 && 
                <div>
                    <span className="slideshow__arrowRight arrow" onClick={() => nextPhoto(actualPhoto)}><FontAwesomeIcon icon={faAngleRight} /></span>
                    <span className="slideshow__arrowLeft arrow" onClick={() => previousPhoto(actualPhoto)}><FontAwesomeIcon icon={faAngleLeft} /></span>
                    <div className="slideshow__bulletpoint">
                        {photosArray.indexOf(actualPhoto) + 1}/{numberOfPhotos}
                    </div>
                </div>
            }
        </div>
    )
}