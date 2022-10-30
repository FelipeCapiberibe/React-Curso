import React from "react";
import {CgClose, CgInfo} from 'react-icons/cg'; 

import "./Task.css"; 

const Task  = ({ task, handleTaskClick, handleTaskDeletion}) => { //Quando eu coloco algo como parâmetro() dentro da minha const em {} está sendo utilizado com JS. 
    return (
    <div 
            className="task-container"
            style={task.completed ? { borderLeft: "6px solid charteuseq "} : {}}
    >
        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                { task.title }
                </div>        
        <div className="buttons-container">
            <button 
                    className="remove-task-button" 
                    onClick={() => handleTaskDeletion (task.id)}>
                        <CgClose />
            </button>
            <button 
                    className="see-task-details-button" 
                    
                    >
                        <CgInfo />
            </button>
        </div>
    </div>
    
    );
    // return <div className="task-container">{task.title}</div>; 
    //Aqui eu importei meu css e coloquei o tasktitle para repetir dentro do navegador
};

export default Task;