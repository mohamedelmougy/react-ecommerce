import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const initialState ={}
const meddleware=[thunk]

const store = createStore(rootReducer,initialState ,composeWithDevTools(applyMiddleware(...meddleware))  )

export default store;