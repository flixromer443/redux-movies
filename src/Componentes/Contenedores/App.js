import React from 'react';
import '../../Estilos/App.css';
import Navegacion from './Navegacion/Navegacion';
import Productos from '../Normales/Productos'
import {BrowserRouter as Router,Route,Switch,  } from 'react-router-dom';
import Accion from '../Normales/Accion';
import Carrito from '../Carrito/Carrito';
import Terror from '../Normales/Terror';
import VistaPrevia from '../Normales/VistaPrevia';
function App() {
  return (
    <Router>
    <div className="App">
      <Navegacion/>
     

      <Switch>
        <Route path="/Normales/Accion"><Accion/></Route>
        <Route path="/Normales/Terror"><Terror/></Route>
        <Route path="/Carrito"><Carrito/></Route>
        <Route path="/Normales/VistaPrevia"><VistaPrevia /></Route>
        <Route path="/"><Productos/></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
