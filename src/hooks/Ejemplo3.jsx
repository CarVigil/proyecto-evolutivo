import React, { useState, useContext } from 'react'

/**
 * 
 * @returns Dispone de un contexto que va a tener un valor que recibe desde el padre
 */

 const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto)
  return (
    <div>
      <h1>
        El token es {state.token}
      </h1>
      <Componente2></Componente2>
    </div>
  )
}

const Componente2 = () => {

    const state = useContext(miContexto);

  return (
    <div>
      <h2>
        La sesión es: {state.sesion}
      </h2>
    </div>
  )
}


export default function MiComponenteConContexto() {
    const estadoInicial = {
        token: 1234567,
        sesion: 1,
    }

    //creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial)

    function actualizarSesion(){
        setSessionData({
            token: 'JWT13465413513',
            sesion: sessionData.sesion + 1,
        })
    }
  return (
    <miContexto.Provider value={sessionData}>
    {/** Todo lo que este aqui dentro puede leer los datos de sessionData */}
    {/* Ademas si se actualiza los componentes de aqui tambien lo actualizan */}
    <h1>Ejemplo de useState y useContext</h1>
    <Componente1></Componente1>
    <button onClick={actualizarSesion}>Actualizar Sesion</button>
    </miContexto.Provider>
  )
}


