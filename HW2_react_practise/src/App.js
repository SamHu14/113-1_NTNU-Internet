import React, { useState } from 'react';
import FormComponent from './FormComponent';
import DisplayComponent from './DisplayComponent';
import './App.css'; // 為了美編

const App = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div className="App">
      <h1>My Diary</h1>
      <FormComponent addEntry={addEntry} />
      <DisplayComponent entries={entries} />
    </div>
  );
};

export default App;
