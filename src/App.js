import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/Greeting';
// import GreetingF from './components/pure/GreetingF';
// import TaskListComponent from './components/container/task_list'
// import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* componente propio  greeting.jsx */}
        {/*<Greeting name="Carla"></Greeting>*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        <MiComponenteConContexto></MiComponenteConContexto>
        <Ejemplo4 nombre = 'Carla'> <h3>Contenido del children</h3></Ejemplo4>
      </header>
    </div>
  );
}

export default App;
