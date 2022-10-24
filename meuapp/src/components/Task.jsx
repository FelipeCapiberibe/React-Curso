import React from "react";

import "./Task.css"; 

const Task  = ({ task }) => { //Quando eu coloco algo como parâmetro() dentro da minha const em {} está sendo utilizado com JS. 
    return <div className="task-container">{task.title}</div>; //Aqui eu importei meu css e coloquei o tasktitle para repetir dentro do navegador
};

export default Task;