import React, {useState} from 'react';
import './usestate.css';

function ParentComponent(){
    const[count, setCount] = useState(0);

    const increment = ()=>{
        setCount (count + 1);
    };

    return(
        <div class = "container">
        <h1>Counter App</h1>
        <p>Count: {count}</p>

        <ChildComponent count = {count} onCount = {increment}/>
        </div>
    )
}

function ChildComponent(props){

    return(
        <div>
            <p>Child Component: Count - {props.count}</p>
            <center>
            <button onClick = {props.onCount}> Increment</button>
            </center>
        </div>
    );

}

export default ParentComponent;

