// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const TaskListWithEdit = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const addOrEditTask = () => {
    if (isEditing) {
      const updatedTasks = tasks.map((t, index) =>
        index === currentIndex ? task : t
      );
      setTasks(updatedTasks);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setTasks([...tasks, task]);
    }
    setTask('');
  };

  const editTask = (index) => {
    setTask(tasks[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  return (
    <div>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Ingresa una tarea" 
      />
      <button onClick={addOrEditTask}>
        {isEditing ? 'Editar tarea' : 'Agregar tarea'}
      </button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} 
            <button onClick={() => editTask(index)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListWithEdit;
