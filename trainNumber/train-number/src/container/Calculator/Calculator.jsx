import React, {useState} from "react";

const Calculator = () => {
    const num1 = 7;
    const num2 = 2;
    const num3 = 2;
    const num4 = 1;
    const [divs, setDivs] = useState([num1, num2, num3, num4]);
    const [displayValue, setDisplayValue] = useState(''); // State to track the displayed value
    const [currentValue, setCurrentValue] = useState(''); // State to store the current value for calculation

    const [operator, setOperator] = useState(null);// State to store the current value

    // Function to handle number clicks
  const handleNumberClick = (number) => {
    setDisplayValue((prevDisplayValue) => prevDisplayValue + number);
  };

    // Function to handle operator clicks
    const handleOperatorClick = (op) => {
        setCurrentValue(displayValue);
        setDisplayValue('');
        setOperator(op);
      };
      const handleClearClick = () => {
        setDisplayValue('');
        setCurrentValue('');
        setOperator(null);
      };
      const handleImpossibleClick = () => {
        setDisplayValue('');
        setCurrentValue('');
        setOperator(null);
      };

    return (
        <div className="app__Calculator">
            <div className="app__Calculator-display">
                <div className="app__Calculator-digit">
                    
                </div>
                <div className="app__Calculator-digit">
                    
                </div>
                <div className="app__Calculator-digit">
                    
                </div>
                <div className="app__Calculator-digit">
                    
                </div>
            </div>
{/***************************************************************************************************************************************************** */}
            <div className="app__Calculator-keypad">
                <div className="buttons-grid">
                    <button onClick={() => handleOperatorClick('/')}>/</button>
                    <button onClick={() => handleOperatorClick('*')}>*</button>
                    <button onClick={() => handleOperatorClick('-')}>-</button>
                    <button onClick={() => handleOperatorClick('+')}>+</button>
                </div>
                <div className="buttons-grid-special">
                    <button onClick={handleClearClick}>C</button>
                    <button onClick={handleImpossibleClick}>Not Possible</button>
                </div>
            </div>
    </div>
);};

export default Calculator;