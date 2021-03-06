import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '../css/App.css';
import Navigation from './Navigation';
import Page from './Page';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav>
            {<Navigation />}
          </nav>
          <main>
            <section className='page'>
              {<Page />}
            </section>
            <section>
              {<Button />}
            </section>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
