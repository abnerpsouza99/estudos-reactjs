import React from 'react';

export default function WithParameter(props) {
  const status = props.grade >= 5 ? 'Aprovado' : 'Reprovado';
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>
        <strong> {props.student} tem nota: {props.grade}</strong> e foi
        <strong> {status}</strong>!
      </h3>
    </div>
  )
}