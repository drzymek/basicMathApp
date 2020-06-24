import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navigation.css'

const buttonsList = [
    { name: "main", path: '/', exact: true },
    { name: "addition", path: '/addition' },
    { name: "subtraction", path: '/subtraction' },
    { name: "multiplication", path: '/multiplication' },
    { name: "division", path: '/division' }
]

const Navigation = () => {
    const buttons = buttonsList.map(button => (
        <button key={button.name}>
            <NavLink to={button.path} className={button.className} >{button.name}</NavLink>
        </button>
    ))
    return (
        <div className='navigation'>
            {buttons}
        </div>
    );
}

export default Navigation;