import {  GUARDAR_DATOS_API } from "../Types/Types";

const defaultState=[{
    nombres:[],
    found:false
}]

const Api=(state=defaultState,action)=>{
    switch(action.type){
        
        case GUARDAR_DATOS_API:
            return{
                ...state,
                nombres:action.payload,
                found:true    
            }
          
        default:
            return state
    }      
}
export default Api


