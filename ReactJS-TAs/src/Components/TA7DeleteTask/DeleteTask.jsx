// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const TaskListWithDelete = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Ingresa una tarea" 
      />
      <button onClick={addTask}>Agregar tarea</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => deleteTask(index)}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListWithDelete;
