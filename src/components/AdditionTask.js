import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AdditionTask = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    return (
        <div className="task">
            <div className="divNumber" onClick={() => setNumber1(Math.floor(Math.random() * 100))}>{number1}</div>
            <FontAwesomeIcon icon="plus" />
            <div className="divNumber" onClick={() => setNumber2(Math.floor(Math.random() * 100))}>{number2}</div>
        </div>
    );
}


export default AdditionTask;