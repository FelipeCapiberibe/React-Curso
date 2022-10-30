import React from "react";

import "./Task.css"; 

const Task  = ({ task, handleTaskClick}) => { //Quando eu coloco algo como parâmetro() dentro da minha const em {} está sendo utilizado com JS. 
    return (
    <div 
            className="task-container"
            style={task.completed ? { borderLeft: "6px solid charteuse" } : {}}
    >
        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                { task.title }
                </div>        
        <div className="buttons-container">
            <button className="remove-task-button">X</button>
        </div>
    </div>
    
    );
    // return <div className="task-container">{task.title}</div>; 
    //Aqui eu importei meu css e coloquei o tasktitle para repetir dentro do navegador
};

export default Task;