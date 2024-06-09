import { useState } from 'react'
import ToDoItem from "./ToDoItem"
import InputArea from "./Inputarea";

function App() {
  const [items, setItems] = useState([]);
  const [taskCount, setTaskCount] = useState(0);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setTaskCount(taskCount + 1);
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      }); 
    });
    setTaskCount(taskCount - 1);
  }

  function removeAll() {
    setItems([]);
    setTaskCount(0)
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <p>Total Task:{taskCount}</p>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
      <button className="remove" onClick={removeAll}>Remove All</button>
    </div>
  );
}

export default App;
