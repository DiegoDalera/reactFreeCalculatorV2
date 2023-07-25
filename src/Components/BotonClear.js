import React from "react";
import './BotonClear.css'



const BotonClear = (props) => {
    return(
        <div className="boton_clear" 
            onClick={props.manejarClear}>
            {props.children}
        </div>
    )
}

export default BotonClear;