import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = () => {
    return (
        <div>
            <button>
                <Link to='/'>Try Again</Link>
            </button>
        </div>
    );
}

export default Buttons;