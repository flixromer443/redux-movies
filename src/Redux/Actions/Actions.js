import { GUARDAR_DATOS_API,
    GUARDAR_DATOS_CARRITO, 
    AGREGAR_AL_CARRITO, 
    QUITAR_DEL_CARRITO, 
    BUSCAR_PELICULAS } from '../Types/Types'

const guardar=(datos)=>{
    return{
        type:GUARDAR_DATOS_API,
        payload:datos
    }
}

export const llamadaAccion=()=>{
        return disptach=>{
            fetch(`https://www.omdbapi.com/?s=action&apikey=f211d40f`)
            .then(res=>res.json())
            .then(datos=>{
                disptach(guardar(datos.Search))
            })
        }
        
    
}
export const llamadaTerror=()=>{
    return disptach=>{
        fetch(`https://www.omdbapi.com/?s=Terror&apikey=f211d40f`)
        .then(res=>res.json())
        .then(datos=>{
            disptach(guardar(datos.Search))
        })
    }
    

}


 const otra=(datos)=>{
    return{
        type:GUARDAR_DATOS_CARRITO,
        payload:datos
    }
}

export const Agregar=(datos)=>{
   return dispatch=>{
       dispatch(otra(datos))
   }
}


const AñadirCarrito=(datos)=>{
    return{
        type:AGREGAR_AL_CARRITO,
        payload:datos
    }
}

export const Añadir=(datos)=>{
    return dispatch=>{
        dispatch(AñadirCarrito(datos))
    }
}


const QuitardelCarrito=()=>{
    return{
        type:QUITAR_DEL_CARRITO,
    }
}
export const Quitar=()=>{
    return dispatch=>{
        dispatch(QuitardelCarrito())
    }
}

const Busqueda=(datos)=>{
    return{
        type:BUSCAR_PELICULAS,
        payload:datos

    }

}

export const Buscar=(dato)=>{
   
        return disptach=>{
            fetch(`https://www.omdbapi.com/?s=${dato}&apikey=f211d40f`)
            .then(res=>res.json())
            .then(datos=>{
                disptach(Busqueda(datos.Search))
            })
        }
      
   
}