 import React, { useState } from "react";
 import axios from 'axios'; 
 import {v4 as uuidv4} from 'uuid';
 import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

 import Header from "./components/Header";
 import Tasks from "./components/Tasks";
 import AddTask from "./components/AddTask";
 import TaskDetails from './components/TaskDetails';

 import "./App.css";
import { useEffect } from "react";
 

const App = () => {
  const [ tasks,  setTasks ] = useState([
    {
      id: "1", 
      title: "Cronograma de Estudos",
      completed: false,
    },
    {
      id: "2",
      title: "Lista de Tarefas", 
      completed: true,
    },
  
      useEffect (() => {   //esse Hook executa esse bloco de codigo sempre que uma variavel muda.

      })

  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
        if (task.id === taskId) return { ...task, completed: !task.completed}; 
        
        return task; 
    });
        setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle, 
        id: uuidv4(),
        compreted: false,
      },
    ];
      setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  };
  
  return (
      <Router>
      <div className="container">
        <Header />
        <Routes >
        <Route>
                path= "/" 
                exact 
                render= {() => (
            <>
                <AddTask handleTaskAddition={handleTaskAddition}/>
                <Tasks 
                  tasks={tasks} 
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}/>
            </>
          )}
        </Route>
        <Route path="/:taskTitle" exact component={TaskDetails}></Route>
        </Routes>
       </div>
      </ Router>
  );
};
export default App;  