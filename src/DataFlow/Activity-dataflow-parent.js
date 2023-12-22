import React, {useState} from 'react';
import './usestate.css';


function ParentComponent(){
    const[message, setMessage] = useState("From Parent");

    const updateMessage = ()=>{
        setMessage("");
    };

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    return(
        <div class = "container">
            <h1>Data Flow Parent-Child Callback</h1>
            <input type="text" onChange={handleInputChange} value ={message}/>
            <br></br>
            <button onClick = {updateMessage}>Clear Textbox</button>
            <br></br>
            <ChildComponent message = {message}/>
        </div>

    )
}


function ChildComponent(props){

    return(
        <div> 
             <center>
            <h2>Child Component</h2>
            <p>Message From Parent: {props.message}</p>
            </center>
        </div>
    );

}

export default ParentComponent;










