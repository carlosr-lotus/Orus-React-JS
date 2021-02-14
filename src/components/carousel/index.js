import laptopImg from '../../images/laptop/laptop-1.png'

import './carousel.css'

export default function Carousel() {
    return (
        <div class="carousel">
            <div data-js="carousel-item" class="carousel-photo carousel-photo--visible">
                <img src={laptopImg} alt="orus-book" />
            </div>

            <div class="carousel-arrows">
                <button data-js="carousel_arrow-prev" aria-label="Previous slide">L</button>

                <button data-js="carousel_arrow-next" aria-label="Next slide">R</button>
            </div>
        </div>
    )
}