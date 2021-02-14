import {createStore} from 'redux'

import product from './reducers/product'

const store = createStore(product)

export default store