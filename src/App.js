import React from 'react';
import logo from './logo.svg';
import './App.css';
import pizzaImg from './img/pizza_fresca.jpg';
import dDuck from './img/dduck.png'
function App() {
  return (
    <div className="App">
      <h1>Shayke's Place</h1>
      <img src={dDuck} alt="" className="src" />
    </div>
  );
}

export default App;
