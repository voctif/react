import React from "react";

export default (props) => {
    const min = props.min;
    const max = props.max;
    const aleatorio =
      Math.floor(Math.random() * (max - min) + min);
    return(
        <div>
            <p>valor minimo: {min}</p>
            <p>valor maximo: {max}</p>
            <p>valor escolhido: {aleatorio}</p>

        </div>
        );
};