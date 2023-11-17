import React, {useState} from "react";

const Calculator = () => {
    const [Index, setIndex] = useState(0);
    const handleIndex = () => {
        setIndex((prevIndex)=> prevIndex + 1)
    }
    return (
    <div className="app__Station">
        <div className="app__Station-container">
            <h1 className="app__Station-name">Calculator</h1>
        </div>
    </div>
);};

export default Calculator;