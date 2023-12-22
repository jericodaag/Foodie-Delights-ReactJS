import React, {useState} from 'react'; 

const EventHandlingExample = () => {
    const [clickCount, setClickCount] = useState (0);

    const handleButtonClick = (param1, param2) => { 
        setClickCount (clickCount + 1);
        alert(`Button clicked with parameter:${param1}, ${param2}`)
};

return (
    <div class = "container">
        <h1>Event Handling</h1>
        <p> Button Click: {clickCount} </p>
        <button onClick = {() => handleButtonClick('My First Parameter', 'Second Parameter')}>Click Me </button>
    </div>
);
};

export default EventHandlingExample;