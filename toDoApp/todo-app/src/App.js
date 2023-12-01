import React, { useState } from 'react';
import './App.css';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    setTodoItems([...todoItems, { id: Date.now(), title: newItem, completed: false }]);
    setNewItem(""); // Clear the input field after adding a new item
  }

  const deleteItem = (id) => {
    setTodoItems(todoItems.filter(todo => todo.id !== id));
  }

  const toggleCompletion = (id) => {
    setTodoItems(todoItems.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  }

  return (
    <div className="App">
      <form onSubmit={addItem} className='topHalf'>
        <label className='toDo_label'>New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
        <button className='btn'>Add</button>
      </form>
      <div className='list'>
        <ul className='list'>
          {todoItems.map(todo => (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCompletion(todo.id)}
                />
                {todo.title}
              </label>
              <button className='btn btn-danger' onClick={() => deleteItem(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

