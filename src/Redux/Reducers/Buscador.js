import { BUSCAR_PELICULAS} from "../Types/Types"

const defaultState=[{
    peliculas:[{
        nombre:"El hombre oveja"
    }],
   
}]
const Buscador=(state=defaultState,action)=>{
    switch(action.type){
        case BUSCAR_PELICULAS:
            return {
                ...state,
                peliculas:action.payload,
            }
           
        default:
            return state
    }
}
export default Buscador