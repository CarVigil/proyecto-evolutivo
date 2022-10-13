/**
 * Ejemplo de uso del método del ciclo de vida en componente clase y el hoo
 * de ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react'

export  class DidMount extends Component {

    componentDidMount(){
        console.log('comportamiento antes de que el componente sea añadido al DOM')
    }


  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    )
  }
}

export const DidMountHook = () => {

    useEffect(()=>{
        console.log('Comportamiento antes de que el componente sea añadido al dom')
    }, []);

  return (
    <div>
      <h1>DidMount</h1>
    </div>
  )
}

export default DidMount

