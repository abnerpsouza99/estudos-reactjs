import React from 'react';

export default function Random(props){
  function getRandomNumber(min, max){
    return Math.floor(Math.random() * (min + max + 1) + min)
  }
  return (
    <div>
      <h2>Desafio Valor Aleatório:</h2>
      <p>
        <strong>Valor Mínimo: </strong> {props.min}
      </p>
      <p>
        <strong>Valor Máximo: </strong> {props.max}
      </p>
      <p>
        <strong>Valor Resultante: </strong> {getRandomNumber(props.min, props.max)}
      </p>
    </div>
  )
}