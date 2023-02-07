import React from "react";

import card from "./components/layout/Card";
import Aleatorio from "./components/basicos/aleatorio";

import Primeiro from './components/basicos/primeiro';
import ComParametro from './components/basicos/comParametro';
import Fragmento from './components/basicos/fragmento';
import Card from "./components/layout/Card";


export default () => (
    <div id="app">
        <Card titulo="desafio aleatorio">
          <Aleatorio min={10} max={60}/>
        </Card>

        <Card titulo="fragmento">        
            <Fragmento></Fragmento>
        </Card>

        <Card titulo="primeiro">
            <Primeiro></Primeiro>
        </Card>

        <Card titulo="com parametro">
            <ComParametro titulo="parametro 2" aluno="victor" nota="10"/>
        </Card>

    </div>
    
)