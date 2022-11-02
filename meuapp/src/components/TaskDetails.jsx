import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "./Button";

import "./TaskDetails.css"; 


const TaskDetails = () => {
    const params = useParams(); //um hook é uma função que vai te retornar alguma coisa
    const history = useHistory();

    const handleBackDetailsClick = () => {
        history.goBack(); 
        }; 
    return (
    <>
        <div className="back-button-container">
                <Button onClick={handleBackDetailsClick}>Voltar</Button>
        </div>
        <div 
             className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio corrupti alias quaerat magnam, deserunt deleniti laudantium placeat molestiae 
                    temporibus omnis voluptatum, ea, id totam quod tenetur suscipit sit quae voluptatem.
                </p>
        </div>
        </>
    ); 
};
export default TaskDetails; 