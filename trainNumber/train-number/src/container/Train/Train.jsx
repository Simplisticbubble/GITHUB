import React, { useState } from 'react';
import './Train.css'; // You can create a CSS file for styling

const Train = () => {
  const [divs, setDivs] = useState(new Set([1, 2, 3, 4]));
  const [topDiv, setTopDiv] = useState([]);
  const [currOp, setCurrOp] = useState('+');
  const [WL, setWL] = useState('');

  const handleDivClick = (div) => {
    const newDivs = new Set(divs);
    newDivs.delete(div);
    setDivs(newDivs);

    setTopDiv((prevTopDiv) => {
       const updatedTopDiv = [...prevTopDiv, Number(div)];
       if (updatedTopDiv.length === 2) {
        console.log("performed Op");
        performOperation(updatedTopDiv);
       }

       return updatedTopDiv;
    })

  };

  const handleOperatorClick = (op) => {
    setCurrOp(op);

    // If an operator is clicked, perform the operation immediately if two numbers are present
    if (topDiv.length === 2) {
      performOperation();
    }
  };

  const performOperation = (updatedTopDiv) => {
    const num1 = updatedTopDiv[0];
    const num2 = updatedTopDiv[1];
    let result;

    switch (currOp) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        break;
    }

    setTopDiv([result]);
    if(result === 10){
        setWL('win');
    }
  };

  return (
    <div className="dynamic-divs">
        <div className = 'display-Win'>{WL}</div>
        <div className="operations">
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        </div>

      {Array.from(divs).map((div, index) => (
        <div key={index} className="dynamic-div" onClick={() => handleDivClick(div)}>
          {div}
        </div>
      ))}

      <div className="top-divs">
        <h2>Top Divs</h2>
        <div className="current-operation">{currOp}</div>
        {topDiv.map((div, index) => (
          <div key={index} className="top-div">
            {div}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Train;
