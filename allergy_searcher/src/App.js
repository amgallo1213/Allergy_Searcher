import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Main from './views/Main';
import SearchBar from './components/SearchBar';
import MenuData from './Data.json';


function App() {
  return (
    <div className="App">
      <h1 className="h1">El Vez Menu Item Allergy Search</h1>
      <SearchBar placeholder="Enter Menu Item" data={MenuData} />
      {/* <Main /> */}
    </div>
  );
}

export default App;
