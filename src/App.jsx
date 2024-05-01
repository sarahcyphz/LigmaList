import React, { useState } from "react";
import "./App.css";
import trash from "/trash.svg";

function App() {
  // State to store the list of spice items
  const [spices, setSpices] = useState([]);
  // State to store the user's input for a new spice item
  const [input, setInput] = useState("");

  // Function to handle input changes and update the input state
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Function to add a new spice item to the list
  const addSpice = () => {
    if (input.trim()) {
      setSpices([...spices, { id: Date.now(), text: input.trim(), completed: false }]);
      setInput("");
    }
  };

  // Function to delete a spice item from the list
  const deleteSpice = (id) => {
    setSpices(spices.filter((todo) => todo.id !== id));
  };

  // Function to edit the text of a spice item in the list
  const editSpice = (id, newText) => {
    setSpices(
      spices.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div>
      <h1>Spice Inventory</h1>
      <div className="search-add-container">
        <input
          type="text"
          placeholder="Enter a new spice"
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={addSpice} className="spice-button">Add</button>
      </div>
      <div className="spices-container">
        {spices.map((spice) => (
          <div className="spice-card" key={spice.id}>
            <h2 className="spice-name">{spice.text}</h2>
            <button className="spice-button"
              onClick={() => {
                const newText = prompt("Edit your spice:", spice.text);
                if (newText) {
                  editSpice(spice.id, newText);
                }
              }}
            >
              Edit
            </button>
            <img src={trash} className="delete-button" alt="trash" onClick={() => deleteSpice(spice.id)}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
