/**
 * Ejemplo de uso del método componenteWillUnmount para componente clase
 * y ejemplo de uso de hooks para componente funcional
 * (cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

export default class WillUnmount extends Component {

  componentWillUnmount(){
    console.log('comportamiento antes de que el componente desaparezca')
  }

    render() {
    return (
      <div>
        <h1>WilUnmount</h1>
      </div>
    )
  }
}



export const WillUnmountHook = () => {

    useEffect(()=>{
        //aqui no ponemos nada
        return () => {
            console.log('comportamiento antes de que el componente desaparezca')
        };
    },[])

  return (
    <div>
      <h1>WilUnmount</h1>
    </div>
  )
}

