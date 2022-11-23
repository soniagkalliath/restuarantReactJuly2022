import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {restuarntListReducer} from './Reducers/restuarantReducer'

const reducers = combineReducers({
    restuarantReducer:restuarntListReducer
})

const middleware = [thunk]

//store
const store = createStore(reducers,applyMiddleware(...middleware))


export default store