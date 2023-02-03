import React from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = React.useState(0)


  function add(){
    setCounter(function(prevCounter){
      return prevCounter + 1
    })
  }

  function subtract(){
    setCounter(function(prevCounter){
      return prevCounter - 1
    })
  }

  return (
    <div className="counter">
        <button className='counter--minus' onClick={subtract}>-</button>
        <div className='counter--count'>
          <h1>{counter}</h1>
        </div>
        <button className='counter--plus' onClick={add}>+</button>
    </div>
  );
}

export default App;
