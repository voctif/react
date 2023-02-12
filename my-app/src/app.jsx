import React from "react";
import './apps.css';

import familia from "./components/basicos/familia";
import Aleatorio from "./components/basicos/aleatorio";

import Primeiro from './components/basicos/primeiro';
import ComParametro from './components/basicos/comParametro';
import Fragmento from './components/basicos/fragmento';
import Card from "./components/layout/Card";
import Familia from "./components/basicos/familia";


export default () => (
    <div className="app">
        <div className="cards">

            <Card titulo="familia" color="#0F0">
                <Familia sobrenome="ferreira"></Familia>
            </Card>

            <Card titulo="desafio aleatorio" color="#0F0">
                <Aleatorio min={1} max={100}/>
            </Card>

            <Card titulo="fragmento" color="#0F0">        
                <Fragmento></Fragmento>
            </Card>

            <Card titulo="primeiro" color="#0F0">
                <Primeiro></Primeiro>
            </Card>

            <Card titulo="com parametro" color="#0F0">
                <ComParametro titulo="parametro 2" aluno="victor" nota="10"/>
            </Card>
        </div>
    </div>
    
)