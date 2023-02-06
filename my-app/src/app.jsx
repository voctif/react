import React from "react";

import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/comParametro'
import Fragmento from './components/basicos/fragmento'

export default (props) => {
    return(
        <div>
        <Fragmento></Fragmento>
        <ComParametro titulo="parametro 3" aluno="teste" nota="10"></ComParametro>  
        <Primeiro></Primeiro>
      </div>
    )
}