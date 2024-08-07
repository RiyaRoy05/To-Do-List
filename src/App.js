import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

   const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
   }

   useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);
  
    return () => clearInterval(timer); 
  }, []);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple To-Do List</h1>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Enter a new task" 
        />
        <button onClick={addTodo}>Add To-Do</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo} <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App