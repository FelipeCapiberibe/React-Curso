import React from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";

import "./TaskDetails.css"; 


const TaskDetails = () => {
    const params = useParams(); //um hook é uma função que vai te retornar alguma coisa
    console.log(params); 
    return(
    <>
        <div className="back-button-container"></div>
                <Button>Voltar</Button>
        <div className="task-details-container">
                <p></p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio corrupti alias quaerat magnam, deserunt deleniti laudantium placeat molestiae 
                    temporibus omnis voluptatum, ea, id totam quod tenetur suscipit sit quae voluptatem.
                </p>
        </div>
        </>
    ); 
};
export default TaskDetails; 