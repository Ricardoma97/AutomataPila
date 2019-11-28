import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const[estadoActual,setestadoActual]=useState('q0');
  const[funid,setfunid]=useState(2);
  const[diccionario,setdiccionario]=useState(['a','b','c']);
  const[funciones,setfunciones]=useState([{
    "id":0,
    "estado":'q0',
    entry:'a',
    "topStack":'b',
    "estadoDestino":'q1',
    "pila":["a","b"],
    "color":"red"
  },{
    "id":1,
    "estado":'q1',
    "entry":'a',
    "topStack":'a',
    "estadoDestino":'q1',
    "pila":["a","b"],
    "color":"white"
  }]);
  const[funcionEstado,setfuncionEstado]=useState('');
  const[funcionEntry,setfuncionEntry]=useState('');
  const[funcionTopStack,setfuncionTopStack]=useState('');
  const[funcionEstadoDestino,setfuncionEstadoDestino]=useState('');
  const[funcionPila,setfuncionPila]=useState('');
  const[funcionAceptacion,setfuncionAceptacion]=useState(true);
  const[pila,setpila]=useState(['Z0']);
  const[string,setstring]=useState('');

  function handlefuncionEstadoChange(e){
    setfuncionEstado(e.target.value.toString());
  }
  function handlefuncionEntryChange(e){
    setfuncionEntry(e.target.value.toString());
  }
  function handlefuncionTopStackChange(e){
    setfuncionTopStack(e.target.value.toString());
  }
  function handlefuncionEstadoDestinoChange(e){
    setfuncionEstadoDestino(e.target.value.toString());
  }
  function handlefuncionPilaChange(e){
    setfuncionPila(e.target.value.toString());
  }
  function handlefuncionAceptacionChange(e){
    setfuncionAceptacion(e.target.value.toString());
  }

  function NewFunc(){
    setfunciones([...funciones,{
    "id":`${funid}`,
    "estado":`${funcionEstado}`,
    "entry":`${funcionEntry}`,
    "topStack":`${funcionTopStack}`,
    "estadoDestino":`${funcionEstadoDestino}`,
    "pila":`${funcionPila}`.split(","),
    "color":"white"
  }]);
    setfunid(funid+1);
  }
  function push(){

  }
  return (
    <div className="App">
    <div className="container">
        <p>Proyecto de Matematicas Computacionales</p>
        <p>Automata de Pila</p>
    <input id="Estado" type="text" placeholder="Estado Inicial" value={funcionEstado} onChange={handlefuncionEstadoChange}/>
    <input id="Entry" type="text" placeholder="Caracter" value={funcionEntry} onChange={handlefuncionEntryChange}/>
    <input id="TopStack" type="text" placeholder="Caracter en la plia" value={funcionTopStack} onChange={handlefuncionTopStackChange}/>
    <input id="EstadoDestino" type="text" placeholder="Estado Destino" value={funcionEstadoDestino} onChange={handlefuncionEstadoDestinoChange}/>
    <input id="funcionPila" type="text" placeholder="Caracter que se agrega a la plia" value={funcionPila} onChange={handlefuncionPilaChange}/>
    {funcionAceptacion ? 
    <button onClick={()=>{setfuncionAceptacion(false)}}>DE aceptacion</button>
    :
    <button onClick={()=>{setfuncionAceptacion(true)}}>NO de aceptacion</button>
    }
    
    <button onClick={NewFunc}>NuevaFuncion</button>
    </div>
    <div>
     <div id="tabla">
            <table>
                <thead>
                    <h5>Transiciones</h5>
                    <tr>
                        <th>ID</th>
                        <th>Estado</th>
                        <th>Entrada</th>
                        <th>Pila</th>
                        <th>EstadoDestino</th>
                        <th>PilaDespues</th>
                    </tr>
                </thead>
                <tbody>
                    {funciones.length <= 0
            ?<td> {'Aun no se agregan las Tranciciones'}</td>
            : funciones.map((funcion) => (
                <tr className={funcion.color}>
                  <td>{funcion.id}</td>
                  <td>{funcion.estado}</td>
                  <td>{funcion.entry}</td>
                  <td>{funcion.topStack}</td>
                  <td>{funcion.estadoDestino}</td>
                  <td>{funcion.pila}</td>
                </tr>

              ))}
                 </tbody>
            </table>
            <p>Estado actual:{estadoActual}</p>
            <p>Pila</p>{
            pila.map((elemento) =>(
              <div>{elemento}</div>))
          }

        </div>
    </div>
    </div>
  );
}

export default App;
