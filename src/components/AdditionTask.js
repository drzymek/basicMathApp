import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdditionTask = (props) => {
    const [number1, setNumber1] = useState("click me!");
    const [number2, setNumber2] = useState("click me!");
    const [score, setScore] = useState("your answer");

    const drawFirstNumber = () => setNumber1(Math.floor(Math.random() * 100));
    const drawSecondNumber = () => setNumber2(Math.floor(Math.random() * 100));
    const handleScore = (e) => setScore(e.target.value);

    return (
        <div className="task">
            <div className="divNumber" onClick={drawFirstNumber}>
                {number1}
            </div>
            <FontAwesomeIcon icon="plus" />
            <div className="divNumber" onClick={drawSecondNumber}>
                {number2}
            </div>
            <FontAwesomeIcon icon="equals" />
            <input type="text" maxLength="10" placeholder={score} onFocus="this.placeholder = ''" onChange={handleScore} />
        </div >
    );
}

export default AdditionTask;