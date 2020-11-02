
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import DataBox from './components/databox.js'
import NavBar from './components/NavBar.js'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <DataBox></DataBox>
    </div>
  );
}

export default App;
