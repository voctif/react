import React from "react";
import alunos from "../../data/alunos";

export default (props) => {
    const li1 = (
        <li>
            {alunos[0].id} {alunos[0].nome}  {alunos[0].nota}
        </li>
    );

    const lis = alunos.map((aluno) => {
        return <li>
            {alunos.id} {alunos.nome}  {alunos.nota}
        </li>
    })

    return (
        <div>
            <ul>
                <li>um</li>
                <li>dois</li>
                <li>tres</li>
                <li>quatro</li>
            </ul>
        </div>
    );
}