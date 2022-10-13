import React, { useState } from 'react'
import PropTypes from 'prop-types'

function GreetingF(props) {

    // Breve intro a useState
    //const [variable, método para actualizar la variable] = useState(valor inicial);
    const [age, setAge] = useState(29);

    const birthday = () => {
        //actualizamos el state
        setAge(age+1);
    }

  return (
    <div>
        <h1>HOLA { props.name } desde componente funcional </h1>
        <h2>Tu edad es: { age } </h2>
        <div>
          <button onClick={birthday}>
            Cumplir años
          </button>
        </div>
    </div>
  )
}

GreetingF.propTypes = {
    name: PropTypes.string,

}

export default GreetingF

