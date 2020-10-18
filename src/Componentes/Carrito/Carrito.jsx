import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OutlinedCard from './Child/Imagenes'
import { Button } from '@material-ui/core';
import './Style.css'
function Carrito(){
    const dispatch=useDispatch()
    const datos=useSelector(state=>state.Carrito)
    console.log(datos.Carrito)
    return(
        <div>

            {  
                datos.lleno? 
                <div>
                    
                    <OutlinedCard
                     title={datos.Carrito.Title} 
                     year={datos.Carrito.Year} 
                     type={datos.Carrito.Type}
                      image={datos.Carrito.Poster} 
                     />
                </div>:<h1>El carrito se encuentra vacio</h1>
            }
        </div>
    )
}
export default Carrito