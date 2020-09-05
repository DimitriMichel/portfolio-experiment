import React from 'react';
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sidebar/>
        <Main/>
      </header>
    </div>
  );
}

export default App;
