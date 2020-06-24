import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = () => {
    return (
        <div>
            <button>reset</button>
            <button>
                <Link to='/'>Try Again</Link>
            </button>
        </div>
    );
}

export default Buttons;