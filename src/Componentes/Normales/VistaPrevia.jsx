import React from 'react'
import './Estilos/Style.css'
import { Link } from 'react-router-dom';
import {Añadir} from '../../Redux/Actions/Actions'
import { Button } from '@material-ui/core';
import OutlinedCard from './Child/Imagenes';
import { useDispatch,useSelector } from 'react-redux'

//echar un vistazo aca!
function VistaPrevia(){

    const datos=useSelector(state=>state.Buscador);
    console.log(datos.peliculas);
    const dispatch=useDispatch();

return(
    <div className="contain"> 
    <h1>Resultados</h1>
    {datos.peliculas ?
        <div> 
         <table>
             <tbody>
             <tr> 
            {datos.peliculas.map(m=>(
            
                  <td key={m.imdbID}>
                    <OutlinedCard 
                        title={m.Title} 
                        year={m.Year} 
                        type={m.Type}
                        image={m.Poster} 
                        />
                    <Link to="/Carrito">
                        <Button variant="contained" color="primary" onClick={()=>dispatch(Añadir(m))}>Agregar al carrito</Button>
                    </Link>
                    </td>
       
               
            ))}

            </tr>
            </tbody>
         </table>
        </div>: <h1>No se encontraron resultados</h1> 
    }
    
</div>
  
    )
}
   

export default VistaPrevia