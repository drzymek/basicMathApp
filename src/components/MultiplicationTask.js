import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MultiplicationTask = () => {
    const [number1, setNumber1] = useState("click me!");
    const [number2, setNumber2] = useState("click me!")
    return (
        <div className="task">
            <div className="divNumber" onClick={() => setNumber1(Math.floor(Math.random() * 10))}>
                {number1}
            </div>
            <FontAwesomeIcon icon="times" />
            <div className="divNumber" onClick={() => setNumber2(Math.floor(Math.random() * 10))}>
                {number2}
            </div>
            <FontAwesomeIcon icon="equals" />
            <input type="text" maxLength="10" placeholder="your answer" onFocus="this.placeholder = ''" />
        </div>
    );
}

export default MultiplicationTask;