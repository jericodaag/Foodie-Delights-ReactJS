import React, {useState} from 'react';
import './usestate.css';

function  Counter()
{
    const[count, setCount] = useState(0);
    
    const increment = ()=>{
        setCount (count + 1);
    };

    const decrement = ()=>{
        setCount (count - 1);
    };

    return (
      <div class = "container">
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <br></br>
        <button onClick={decrement}>Decrement</button>

      </div>
    );

}

export default Counter;