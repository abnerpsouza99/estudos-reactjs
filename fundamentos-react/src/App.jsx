import React from 'react'

import Random from './components/basics/Random';
import First from './components/basics/First';
import WithParameter from './components/basics/WithParameter';
import Fragments from './components/basics/Fragments';

export default () => {
  return (
    <div>
      <Random min={1} max={10}/>
      <h1>Fundamentos Reactjs</h1>
      <Fragments />
      <WithParameter
        title="Situação aluno"
        student="Abner" grade={3.5} />
      <First />
    </div>
  )
}