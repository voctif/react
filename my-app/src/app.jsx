import React from "react";

import Aleatorio from "./components/basicos/aleatorio";

import Primeiro from './components/basicos/primeiro';
import ComParametro from './components/basicos/comParametro';
import Fragmento from './components/basicos/fragmento';

export default () => (
    <div id="app">
        <Aleatorio/>

        <Fragmento></Fragmento>
        <Primeiro></Primeiro>
        <ComParametro titulo="parametro 2" aluno="victor" nota="10"/>
    </div>
    
)