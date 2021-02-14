
import Carousel from '../../components/carousel'
import Specs from '../../components/specs'
import Upgrade from '../../components/upgrade'
import Purchase from '../../components/purchase'

import './product-page.css'

export default function ProductPage() {
    return (
        <main>
            <div class="product-container">
                <Carousel />
            </div>

            <div class="specs-container">
                <h2 class="specs-header">Customize your Orus Book to best suit your needs.</h2>
                <Specs />
                <Upgrade />
                <Purchase />
            </div>
        </main>
    )
}