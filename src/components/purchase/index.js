
import './purchase.css'

export default function Purchase() {
    return (
        <div class="purchase-info">
            <div class="buy-container">

                <h2 class="final-price">$<span data-js="final-price">1099.00</span></h2>

                <p>12x $<span data-js="installments-price">91.58</span></p>
                <button class="buy-button"><a href="#">Buy Now</a></button>
            </div>
        </div>
    )
}