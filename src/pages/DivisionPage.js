import React, { Component } from 'react';

import '../css/Tasks.css'

import DivisionTask from '../components/DivisionTask';


class DivisionPage extends Component {
    render() {
        let divs = [];
        for (let i = 0; i < 4; i++) {
            divs.push(<DivisionTask key={i} />)
        }
        return <div className="tasks">{divs}</div>
    }
}

export default DivisionPage;