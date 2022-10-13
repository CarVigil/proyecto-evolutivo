import React from 'react'

export default function fibonacci() {
        let fibonacci = new Array(20);
        fibonacci[0] = 1;
        fibonacci[1] = 1;
        for (let i = 2; i < fibonacci.length; i++) {
            fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
        }
        const listar = fibonacci.map((number, i) =>
            <p key={i}>
                {number}
            </p>);

  return (
    <div>
    <h1>Ejecutar sucesión de fibonacci</h1>
      {listar}
    </div>
  )
}
