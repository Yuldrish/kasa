import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function Slideshow({photosArray}) {
    console.log(photosArray)
    const numberOfPhotos = photosArray.length
    const firstPhoto = photosArray[0]
    console.log(firstPhoto)
    const lastPhoto =photosArray[numberOfPhotos - 1]
    console.log(lastPhoto)
    const [actualPhoto, setActualPhoto] = useState(firstPhoto)

    const previousPhoto = function (actualPhoto) {
        if (actualPhoto === firstPhoto) {
            console.log(actualPhoto)
            setActualPhoto(lastPhoto)
        } else {
            const actualPhotoIndex = photosArray.indexOf(actualPhoto)
            setActualPhoto(photosArray[actualPhotoIndex - 1])
        }
    }
    const nextPhoto = function (actualPhoto) {
        if (actualPhoto === lastPhoto) {
            setActualPhoto(lastPhoto)
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
                    <span className="slideshow__arrowRight arrow" onClick={() => nextPhoto(actualPhoto)}><FaAngleRight /></span>
                    <span className="slideshow__arrowLeft arrow" onClick={() => previousPhoto(actualPhoto)}><FaAngleLeft /></span>
                    <div className="slideshow__bulletpoint">
                        {photosArray.indexOf(actualPhoto) + 1}/{numberOfPhotos}
                    </div>
                </div>
            }
        </div>
    )
}