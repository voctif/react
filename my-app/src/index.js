import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/comParametro'

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametro titulo="parametro 2" aluno="victor" nota="10"></ComParametro>  
  </div>,
  document.getElementById('root')
)