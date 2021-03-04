import "./App.css";
import React from 'react'

import Family from './components/basics/Family';
import FamilyMember from './components/basics/FamilyMember';
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
        <Card title="#05 - Desafio com Filhos" color="#FFC33C">
          <Family surname="Souza">
            <FamilyMember name="Abner"/>
            <FamilyMember name="Juliana"/>
            <FamilyMember name="Matheus"/>
          </Family>
        </Card>
        <Card title="#04 - Desafio Aleatório" color="#080">
          <Random min={2} max={5} />
        </Card>
        <Card title="#03 - Desafio Fragmento" color="#69D2E7">
          <Fragments />
        </Card>
        <Card title="#02 - Desafio Com Parâmetro" color="#542733">
          <WithParameter
            title="Situação aluno"
            student="Abner" grade={3.5} />
        </Card>
        <Card title="#01 - Desafio Primeiro Componente" color="#DC403B">
          <First />
        </Card>
      </div>
    </div>
  )
}