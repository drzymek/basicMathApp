import React, { Component } from 'react';

import '../css/Tasks.css';
import SubtractionTask from '../components/SubtractionTask';

class SubtractionPage extends Component {
    render() {
        let divs = [];
        for (let i = 0; i < 4; i++) {
            divs.push(<SubtractionTask key={i} />)
        }
        return (
            <div className="tasks">{divs}</div>
        );
    }
}

export default SubtractionPage;