import React, { useState } from "react";
import "./App.css";
import trash from "/trash.svg";

export const initialSpices = [
  { id: 1, text: "Salt", completed: false },
  { id: 2, text: "Pepper", completed: false },
  { id: 3, text: "Paprika", completed: false },
  { id: 4, text: "Cumin", completed: false },
  { id: 5, text: "Cinnamon", completed: false },
  { id: 6, text: "Garlic Powder", completed: false },
  { id: 7, text: "Onion Powder", completed: false },
  { id: 8, text: "Chili Powder", completed: false },
  { id: 10, text: "Ginger", completed: false },
  { id: 11, text: "Oregano", completed: false },
  { id: 12, text: "Basil", completed: false },
  { id: 13, text: "Garlic and Herb", completed: false },
  { id: 14, text: "Lemon Pepper", completed: false },
  { id: 15, text: "Italian Seasoning", completed: false },
  { id: 16, text: "Garlic Salt", completed: false },

];


function App() {
  // State to store the list of spice items
  const [spices, setSpices] = useState(initialSpices);
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

  // Function to sort the spices alphabetically
  const sortSpices = () => {
    const sortedSpices = [...spices].sort((a, b) => a.text.localeCompare(b.text));
    setSpices(sortedSpices);
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
        <button onClick={sortSpices} className="spice-button">Sort</button>
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
