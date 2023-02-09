import React from "react";
import './card.css'

export default (props) => {
    return(
        <div className="card">
            <div className="titulo"><h2>{props.titulo}</h2></div>
            <div className="content">{props.children}</div>
        </div>
    )
}