import React, { useState } from 'react';

const TaskManager = () => {
  // State for tasks and toggle for completed tasks visibility
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);

  // Add new task to the list
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  // Mark a task as completed
  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  // Toggle visibility of completed tasks
  const toggleCompletedVisibility = () => {
    setShowCompleted(!showCompleted);
  };

  // Reset task list
  const resetTasks = () => {
    setTasks([]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Task Manager</h1>

      {/* Input field to add a new task */}
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
        style={{ width: '70%', padding: '10px', marginRight: '10px' }}
      />
      <button onClick={addTask} style={{ padding: '10px' }}>
        Add Task
      </button>

      {/* List of tasks */}
      <ul style={{ padding: '20px 0' }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              display: task.completed && !showCompleted ? 'none' : 'block',
              marginBottom: '10px',
            }}
          >
            {task.text}
            <button
              onClick={() => toggleTaskCompletion(index)}
              style={{
                marginLeft: '20px',
                padding: '5px',
              }}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>

      {/* Button to toggle completed tasks visibility */}
      <button onClick={toggleCompletedVisibility} style={{ marginRight: '10px' }}>
        {showCompleted ? 'Hide Completed' : 'Show Completed'}
      </button>

      {/* Button to reset task list */}
      <button onClick={resetTasks}>Reset Task List</button>
    </div>
  );
};

export default TaskManager;
