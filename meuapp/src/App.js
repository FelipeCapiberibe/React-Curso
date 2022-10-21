 import React, { useState } from 'react';
 
 import "./App.css";

const App = () => {
  // let message = "Hello World";
  const [message, setMessage] = useState('Hello World');
  return (
    <div>
      <div className="container">{message}</div> 
      <button onClick={() => setMessage ("Hellooo")}> 
      Mudar mensagem
      </button>
    </div>
  );
};
export default App;  