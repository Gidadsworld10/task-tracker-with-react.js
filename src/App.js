import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import React from "react";
import AddTask from "./components/AddTask";





const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Gidado's appointment",
      day: "October 1st by 1:pm",
      reminder: true
    },
    {
      id: 2,
      text: "Mum's appointment",
      day: "October 1st by 3:pm",
      reminder: true
    },
    {
      id: 3,
      text: "Dad's appointment",
      day: "October 1st by 6:pm",
      reminder: false
    }
  ]);

  // Add Task
  const addTask = (task) => {
     const id = Math.floor(Math.random()* 100000) +1
     const newTask = {id, ...task}
     setTasks([...tasks, newTask])
  }


  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  };

  // reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  };


  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask )} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks}    
        onDelete={deleteTask}
        onToggle={toggleReminder} />) :
        (<p className="child">No task to show</p>)}
    </div>
  );
};



export default App;
