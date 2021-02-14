import {Switch, Route} from 'react-router-dom'

import Header from './components/header'
import Container from './components/container'
import HomePage from './pages/homepage'
import ProductPage from './pages/product-page'

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/produto" component={ProductPage} />
          </Switch>
      </Container>
    </div>
  );
}

export default App;
