import React, { Component } from 'react';

import '../css/Tasks.css';

import AdditionTask from '../components/AdditionTask';



class AdditionPage extends Component {
    render() {
        let divs = [];
        for (let i = 0; i < 4; i++) {
            divs.push(<AdditionTask key={i} />)
        }
        return <div className="tasks">{divs}</div>
    }
}

export default AdditionPage;