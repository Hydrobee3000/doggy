import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import doggyReducer from './reducers/doggyReducer'

let rootReducer = combineReducers({
  doggy: doggyReducer,
})

//create store with redux extension, and with middle layer redux-thunk
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
