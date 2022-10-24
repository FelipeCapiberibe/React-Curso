import React, { useState } from "react"; 
import Button from "./Button";
import "./AddTask.css";


    const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState(""); //para pegar o que digitar no container e guardar em algum lugar usando o usestate 

    const handleInputChange = (e) => { //Aqui usando o Handle estamos lidando com a alteração que o input irá sofrer
        setInputData(e.target.value)
    };
    
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
    }
    
    return (
        <div className="add-task-container">
        <input  
                onChange={handleInputChange} 
                value={inputData}
                className="add-task-input" 
                type="text" 
        />
        ;
        <div className="add-task-button-container"> 
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
    
};

export default AddTask; 
//a propriedade onChance que é executada sempre que a gente muda esse input 