import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const[aceptada,setaceptada]=useState(false);
  const[estadoActual,setestadoActual]=useState('q0');
  const[funid,setfunid]=useState(0);
  const[diccionario,setdiccionario]=useState(['a','b','c']);
  const[funciones,setfunciones]=useState([
    {
      "id":0,
      "estado":'q0',
      "entry":'a',
      "topStack":'Z',
      "estadoDestino":'q0',
      "pila":["A","Z"],
      "color":"green",
      "aceptacion":"false"
    },{
      "id":1,
      "estado":'q0',
      "entry":'a',
      "topStack":'A',
      "estadoDestino":'q0',
      "pila":["A","A"],
      "color":"white",
      "aceptacion":"false"
    },{
      "id":2,
      "estado":'q0',
      "entry":'b',
      "topStack":'Z',
      "estadoDestino":'q1',
      "pila":[],
      "color":"white",
      "aceptacion":"false"
    },{
      "id":3,
      "estado":'q1',
      "entry":'b',
      "topStack":'A',
      "estadoDestino":'q1',
      "pila":[],
      "color":"white",
      "aceptacion":"false"
    },{
      "id":4,
      "estado":'q1',
      "entry":'',
      "topStack":'Z',
      "estadoDestino":'q1',
      "pila":[],
      "color":"white",
      "aceptacion":"true"
    }
  ]);
  const[funcionEstado,setfuncionEstado]=useState('');
  const[funcionEntry,setfuncionEntry]=useState('');
  const[funcionTopStack,setfuncionTopStack]=useState('');
  const[funcionEstadoDestino,setfuncionEstadoDestino]=useState('');
  const[funcionPila,setfuncionPila]=useState('');
  const[funcionAceptacion,setfuncionAceptacion]=useState(true);
  const[pilasize,setpilasize]=useState(1);
  const[pila,setpila]=useState(['Z']);
  const[string,setstring]=useState('');
  const[pasos,setpasos]=useState([]);
  const[pasosid,setpasosid]=useState(0);

  useEffect(()=>{
    setfunid(funciones.length)
  })
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
  function handlestringChange(e){
    setstring(e.target.value.toString());
    setestadoActual('q0');
    setpila(['Z']);
    setpasosid(0);
    setpasos([])
  }

  function NewFunc(){
    setfunciones([...funciones,{
    "id":`${funid}`,
    "estado":`${funcionEstado}`,
    "entry":`${funcionEntry}`,
    "topStack":`${funcionTopStack}`,
    "estadoDestino":`${funcionEstadoDestino}`,
    "pila":`${funcionPila}`.split(","),
    "color":"white",
    "aceptacion":`${funcionAceptacion}`
  }]);
    setfunid(funid+1);
  }
  /*function push(){
     for(let i=0; i<string.length;i++){
        pasoApaso();
        console.log(string.length)
     }
  }*/
  function pasoApaso(){
    let arr = funciones.filter(obj => (obj.estado === `${estadoActual}` && obj.entry === string.split('')[pasosid] && obj.topStack === pila[pila.length-1]));
    console.log(arr);
    console.log(arr.length);
    if (arr.length===1){
      setpasos([...pasos,{
      "id":`${arr[0].id}`,
      "estado":`${arr[0].estado}`,
      "entry":`${arr[0].entry}`,
      "topStack":`${arr[0].topStack}`,
      "estadoDestino":`${arr[0].EstadoDestino}`,
      "pila":`${arr[0].pila}`.split(","),
      "aceptacion":`${arr[0].aceptacion}`
      }]);
      if(arr[0].pila.length===0){
        //setpila(pila.pop())
        let temp = [...pila]
        temp.splice(0,1)
        setpila(temp)
        console.log(arr[0].pila.length)
        setpasosid(pasosid+1);
      }
      if(arr[0].pila.length===1){
        setpila(pila.pop())
        setpila([...pila,arr[0].pila]);
        setpasosid(pasosid+1);
      }
      if(arr[0].pila.length===2){
        setpila(pila.pop())
        setpilasize(pilasize+1)
        setpila([...pila,arr[0].pila[0],arr[0].pila[1]]);
        setpasosid(pasosid+1);
      }
    }else
      if(pila.length===1)
        alert("Esta cadena es aceptada")
      else
        alert("Esta cadena no es aceptada")
  }
  return (
    <div className="App">
    <div className="row">
      <div className="col s8 offset-s2">
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
    </div>
    <div>
    <hr/>
                    <h5>Transiciones</h5><p>El ejemplo por default prueba leguanje a^n b^n</p>
     <div className="container" id="tabla">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Estado</th>
                        <th>Entrada</th>
                        <th>Pila</th>
                        <th>EstadoDestino</th>
                        <th>PilaDespues</th>
                        <th>Estado de aceptacion?</th>
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
                  <td>{funcion.aceptacion}</td>
                  <button onClick={()=>{setfunciones(funciones.filter(obj => obj.id !== funcion.id))}
                  }>Delete</button>
                </tr>

              ))}
                 </tbody>
            </table>
            </div>
            <hr/>
     <div className="container">
      <input id="Cadena a probar" type="text" placeholder="Cadena que probara el Automata" value={string} onChange={handlestringChange}/>
      <button onClick={pasoApaso}>Por pasos</button>
{/*      <button onClick={push}>Todo el proceso</button>*/}
            <div className="row">
              <div className="col s2">
                <p>Estado actual:{estadoActual}</p>
              </div>
              <div className="col s2">
              {pila.length <= 0 
              ? <p>{'La pila esta vacia'}</p> 
              : pila.map((elemento) =>(
                  <div>{elemento}</div>))
                }
              </div>
              <div className="col s7">
              {pasos.length <= 0
            ?<p> {'Aun no hay ningun paso'}</p>
            : pasos.map((paso) => (
              <div className= "col s5 card">
                <p>Id:{paso.id} Estado: {paso.estado} Entrada: {paso.entry}</p>
                <p>Tope de la pila: {paso.topStack}</p>
                <p>{paso.pila}</p>
              </div>
              ))}
              </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;