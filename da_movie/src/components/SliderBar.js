import { useEffect } from "react";
import "../css/style.css"

function SliderBar() {
    useEffect(() => {
        let track = document.getElementById("image-track");
        window.onmousedown = e => {
            track.dataset.mouseDownAt = e.clientX;
        }
        window.onmousemove = e => {
            if (track.dataset.mouseDownAt == "0") return;
            let mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
            let maxDelta = window.innerWidth / 2;
            let percentage = (mouseDelta / maxDelta) * -100;
            let nextPercentageDefault = parseFloat(track.dataset.previousPercentage) + percentage;
            let nextPercentage = Math.max(Math.min(nextPercentageDefault, 0), -100)

            track.dataset.percentage = nextPercentage;
            track.animate({
                transform: `translate(${nextPercentage}%, -50%)`
            }, { duration: 1000, fill: "forwards" });

            for (let image of track.getElementsByClassName("image")) {
                image.animate({
                    objectPosition: `${nextPercentage + 100}% center`
                }, { duration: 1000, fill: "forwards" })
            }
        }
        window.onmouseup = e => {
            track.dataset.mouseDownAt = "0";
            track.dataset.previousPercentage = track.dataset.percentage;
        }
    }, [])

    return (
        <>
            <div className="slider-body">
                <div id="image-track" data-mouse-down-at="0" data-previous-percentage="0">
                    {/* <img className="image" src="https://lh6.googleusercontent.com/B0uQRPzgf2AX6EVvlqNWwV7ql2-TbAuWbJcnkHuC_uzEtG0viA6__4_v-bfdas4iM8MqIm8wcoDeaLRxugVFycbVvaelnagmzAsH9-ug-y0X2BxvEjFfhavM_fvWHDEnNKBFamG9=s0" draggable="false" /> */}
                    <img className="image" src="https://livijumpa2.files.wordpress.com/2013/12/impossible.jpg" draggable="false" />
                    <img className="image" src="https://preview.redd.it/atyf1poo8oe31.jpg?auto=webp&s=d28749798085f4b4947e99c167dc3b2ab1f04e30" draggable="false" />
                    <img className="image" src="https://i0.wp.com/www.heyuguys.com/images/2015/10/star-wars-the-force-awakens-poster-landscape.jpg?fit=1536%2C864&ssl=1" draggable="false" />
                    <img className="image" src="https://images.template.net/wp-content/uploads/2016/10/24110602/Korean-Thriller-Movie-Poster.jpg" draggable="false" />
                    <img className="image" src="https://www.joblo.com/wp-content/uploads/2014/10/interstellar-quad-nolan-1.jpg" draggable="false" />
                </div>
            </div>
        </>
    )
}

export default SliderBar