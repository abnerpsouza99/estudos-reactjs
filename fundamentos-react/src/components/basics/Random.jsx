import React from 'react';

export default function Random(props){
  function getRandomNumber(min, max){
    return Math.floor(Math.random() * (min + max + 1) + min)
  }
  return (
    <div>
      <h3>Número aleatório entre 1 e 10: <strong>{ getRandomNumber(props.min, props.max)}</strong></h3>
    </div>
  )
}