import React, { useState } from 'react'

export default function Ejemplo1() {

    const valorInicial = 0;

    const personaInicial = {
        nombre: 'Carla',
        email: 'carvgil21@gmail.com'
    }

    /**
     * Queremos que VALORINICIAL y PERSONAINICIAL sean
     * parte del estadp del componente para así poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente.
     * 
     * const [nombreVariable, funcParaCambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);


    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        // ? funParaCambiar(nuevoValor)
        setContador(contador+1);
    }


    function actualizarPersona(){
        setPersona({
            nombre:'Daiana',
            email:'carladaiana@mail.com'
        })
    }


  return (
    <div>
      <h1>Ejemplo de useState() ***</h1>
      <h2>Contador: {contador} </h2>
      <h2>Datos de la Persona: </h2>
      <h3>Nombre: {persona.nombre} </h3>
      <h3>Email: {persona.email} </h3>
      <div>
        <button onClick={incrementarContador}>Incrementar contador</button>
        <button onClick={actualizarPersona}>Actualizar persona</button>
      </div>
    </div>
  )
}
