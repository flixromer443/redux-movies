import { AGREGAR_AL_CARRITO, GUARDAR_DATOS_CARRITO, QUITAR_DEL_CARRITO } from "../Types/Types";

const defaultState=[{
    Container:[{
        title:"hola"
    }],
    Carrito:[],
    dispatched:false,
    lleno:false
}]

const Carrito=(state=defaultState,action)=>{
    switch(action.type){
        case GUARDAR_DATOS_CARRITO:
            console.log(state.Container)
            return{
                ...state,
                Container:action.payload,
                dispatched:true
            }
            case AGREGAR_AL_CARRITO:
                return{
                    ...state,
                    Carrito:action.payload,
                    lleno:true 
                }
            case QUITAR_DEL_CARRITO:
                console.log(state.Carrito)
               return{
                   ...state,
                   lleno:false
               }

        default:
            console.log(state.Carrito)
            return{
                ...state,
                dispatched:false
            } 
    }
}
export default Carrito