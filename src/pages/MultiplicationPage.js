import React, { Component } from 'react';

import '../css/Tasks.css';

import MultiplicationTask from '../components/MultiplicationTask';

class MultiplicationPage extends Component {
    render() {
        let divs = [];
        for (let i = 0; i < 4; i++) {
            divs.push(<MultiplicationTask key={i} />)
        }
        return <div className="tasks">{divs}</div>
    }
}

export default MultiplicationPage;