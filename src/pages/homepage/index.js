import {data} from '../../dados/dados'

import ProductContainer from '../../components/product-container'
import BlackContainer from '../../components/black-container'
import Footer from '../../components/footer'

export default function HomePage() {
    return (
        <>
            {data.map(produto => (
          <>
            <ProductContainer dados={produto} />
            <BlackContainer dados={produto} />
          </>
        ))}
        
        <Footer />
        </>
    )
}