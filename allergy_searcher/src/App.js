import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MenuData from './Data.json';


function App() {
  return (
    <div className="App">
      <h1>El Vez Allergy Search</h1>
      <SearchBar placeholder="Enter Menu Item" data={MenuData} />
    </div>
  );
}

export default App;
