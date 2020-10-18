import { combineReducers, createStore, applyMiddleware }from "redux"
import  Api from './Reducers/Api'
import thunk from 'redux-thunk'
import Carrito from './Reducers/Carrito'
import Buscador from "./Reducers/Buscador"

const reducer=combineReducers({
   Api,
   Carrito,
   Buscador
})
const Store=createStore(reducer,applyMiddleware(thunk))
export default Store