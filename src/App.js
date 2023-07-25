import './style.css'
import './Components/Pantalla.css'
import React from 'react';
import Boton from './Components/Boton';
import Pantalla from './Components/Pantalla';
import BotonClear from './Components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input,setInput] = useState('');

  const agregarInput = (val) =>{
    setInput(input + val);
  }

  const calcularResultado = () =>{

    if (input){
      setInput (evaluate(input));
    }else{
      alert("por favor ingresa valores")
    }
    
  } 



  return (
    <div className="grilla_calculadora">

      <div className="pantalla">
        <Pantalla input={input}/>
      </div>

      <div className="fila">
        <Boton manejarCLic={agregarInput}>1</Boton>
        <Boton manejarCLic={agregarInput}>2</Boton>
        <Boton manejarCLic={agregarInput}>3</Boton>
        <Boton manejarCLic={agregarInput}>+</Boton>
      </div>

      <div className="fila">
        <Boton manejarCLic={agregarInput}>4</Boton>
        <Boton manejarCLic={agregarInput}>5</Boton>
        <Boton manejarCLic={agregarInput}>6</Boton>
        <Boton manejarCLic={agregarInput}>-</Boton>
      </div>

      <div className="fila">
        <Boton manejarCLic={agregarInput}>7</Boton>
        <Boton manejarCLic={agregarInput}>8</Boton>
        <Boton manejarCLic={agregarInput}>9</Boton>
        <Boton manejarCLic={agregarInput}>*</Boton>
      </div>

      <div className="fila">
        <Boton manejarCLic={calcularResultado}>=</Boton>
        <Boton manejarCLic={agregarInput}>0</Boton>
        <Boton manejarCLic={agregarInput}>.</Boton>
        <Boton manejarCLic={agregarInput}>/</Boton>
      </div>

      <div className="fila">
      <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
      </div>

    </div>
  );
}


export default App;
