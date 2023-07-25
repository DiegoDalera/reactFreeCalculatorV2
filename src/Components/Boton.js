import React from 'react'
import './Boton.css'


function Boton(props){

    const esOperador = (valor) =>{
            return isNaN(valor) && (valor !== '.') && (valor !== '=')
    }

    return(
        <div className={`contenedor_boton ${esOperador(props.children)? 'operador' : ''}`.trimEnd()}
             onClick={ () => props.manejarCLic(props.children)}>
            {props.children}
        </div>

    );
}


export default Boton