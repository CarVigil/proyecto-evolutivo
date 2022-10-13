import React, { useState, useRef, useEffect } from 'react'

export default function Ejemplo2() {

  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  const miRef = useRef();


  function incrementar1(){
    setContador1(contador1+1);
  }

  function incrementar2(){
    setContador2(contador2+1);
  }


  // useEffect(()=>{
  //   console.log('cambio en el estado del componente');
  //   console.log('Mostrando referencia a elemento del DOM');
  //   console.log(miRef);
  // },[]);

//  useEffect(()=>{},[contador2]);


  return (
    <div>
      <h1>***Ejemplo useState, useRef y useEffect***</h1>
      <h2>CONTADOR 1: {contador1}</h2>
      <h2>CONTADOR 2: {contador2}</h2>
      <h4 ref={miRef}>
        Ejemplo de elemento referenciado
      </h4>

      <div>
        <button onClick={incrementar1} >incrementar contador 1</button>
      </div>
      <button onClick={incrementar2} >incrementar contador 2</button>

    </div>
  )
}
