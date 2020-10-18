import React, {useEffect} from 'react'
import {llamadaTerror} from '../../Redux/Actions/Actions'
import {useSelector, useDispatch } from 'react-redux'
import OutlinedCard from './Child/Imagenes';
import "./Estilos/Style.css"
import { Link } from 'react-router-dom';
import {Añadir} from '../../Redux/Actions/Actions'
import { Button } from '@material-ui/core';


function Terror(){
    const datos=useSelector(state=>state.Api)
    const dispatch=useDispatch();
        useEffect(()=>{
            dispatch(llamadaTerror())
        },[])
          
    
    return(
    <div className="contain"> 
        <h1>Terror</h1>
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

export default Terror