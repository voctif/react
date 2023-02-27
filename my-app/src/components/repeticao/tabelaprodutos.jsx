import React from "react";
import alunos from "../../data/produtos";

export default (props) => {
 
    const lis = alunos.map((produto) => {
        return (
            <li key={produto.id}>
                {produto.id})  {produto.nome} - {produto.preco}
            </li>
        );
    });

    return (
        <div>
            <ul style={ {listStyle:"none"} }>
                <li>{lis}</li>

            </ul>
        </div>
    );
}