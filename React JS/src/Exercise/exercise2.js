import React from 'react';

import './styles.css';

export default function App() {
    const [counter,setIncrement] = React.useState(0);
function increment(){
    setIncrement(prevCounter => prevCounter + 1);
}

    return (
      <div>
        <p id="counter">{counter}</p>
        <button onClick = {increment}>Increment</button>
      </div>
    );
}
