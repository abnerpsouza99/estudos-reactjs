import "./App.css";
import React from 'react'

import Card from './components/layout/Card';
import Random from './components/basics/Random';
import First from './components/basics/First';
import WithParameter from './components/basics/WithParameter';
import Fragments from './components/basics/Fragments';

export default () => {
  return (
    <div className="App">
      <h1>Fundamentos Reactjs</h1>
      <div className="Cards">
        <Card title="#04 - Desafio Aleatório">
          <Random min={2} max={5} />
        </Card>
        <Card title="#03 - Desafio Fragmento">
          <Fragments />
        </Card>
        <Card title="#02 - Desafio Com Parâmetro">
          <WithParameter
            title="Situação aluno"
            student="Abner" grade={3.5} />
        </Card>
        <Card title="#01 - Desafio Primeiro Componente">
          <First />
        </Card>
      </div>
    </div>
  )
}