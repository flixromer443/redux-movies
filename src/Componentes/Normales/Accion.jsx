import React, {useEffect} from 'react'
import {llamadaAccion} from '../../Redux/Actions/Actions'
import {useSelector, useDispatch } from 'react-redux'
import OutlinedCard from './Child/Imagenes';
import "./Estilos/Style.css"
import { Link } from 'react-router-dom';
import {Añadir} from '../../Redux/Actions/Actions'
import { Button } from '@material-ui/core';


function Accion(){
    const datos=useSelector(state=>state.Api)
    const dispatch=useDispatch();
        useEffect(()=>{
            dispatch(llamadaAccion())
        },[])
          
    
    return(
    <div className="contain"> 
        <h1>Accion</h1>
        {datos.found ?
            <div> 
             <table>
                 <tbody>
                 <tr> 
                {datos.nombres.map(m=>(
                
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
            </div>: <h1>cargando</h1> 
        }
        
    </div>
)}

export default Accion 