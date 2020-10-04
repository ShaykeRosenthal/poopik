import React from 'react';
import logo from './logo.svg';
import './App.css';
import pizzaImg from './img/pizza_fresca.jpg';
function App() {
  return (
    <div className="App">
      <h1>Shayke's pizza</h1>
      <img src={pizzaImg} alt="" className="src" />
    </div>
  );
}

export default App;
