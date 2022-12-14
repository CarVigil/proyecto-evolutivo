import React, { useEffect, useState } from 'react'
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task'

const TaskListComponent = () => {

  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
// Estado del componente
  const [tasks, setTasks] = useState([defaultTask])
  const [loading, setLoading] = useState(true);

  // control del ciclo de vida del componente

  useEffect(()=>{
    console.log('Task State has been modified');
    setLoading(false);
    return () =>{
      console.log('TaskList component is going to unmoun')
    }
  }, [tasks])

    const changeCompleted = (id) => {
      console.log('TODO: Cambiar estado de una tarea')
    }

  return (
    <div>
        <div><h1>Your Tasks:</h1></div>
        {/* TODO Aplicar un for/map para traer las tareas*/}
        <TaskComponent task={defaultTask} ></TaskComponent>
    </div>
    
  )
}

export default TaskListComponent;

