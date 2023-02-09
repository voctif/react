import React from "react";
import './card.css'

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#F00'
    }

    return(
        <div className="card" style={cardStyle}>
            <div className="titulo"><h2>{props.titulo}</h2></div>
            <div className="content">{props.children}</div>
        </div>
    )
}