import Header from './components/header'
import Container from './components/container'
import ProductContainer from './components/product-container'
import BlackContainer from './components/black-container'
import Footer from './components/footer'

import {data} from './dados/dados'

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        {data.map(produto => (
          <>
            <ProductContainer dados={produto} />
            <BlackContainer dados={produto} />
          </>
        ))}
        
        <Footer />
      </Container>
    </div>
  );
}

export default App;
