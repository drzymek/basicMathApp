import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '../css/App.css';
import Welcome from './Welcome';
import Navigation from './Navigation';
import Page from './Page';
import Buttons from './Buttons';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            {<Welcome />}
          </header>
          <nav>
            {<Navigation />}
          </nav>
          <main>
            <section className='page'>
              {<Page />}
            </section>
            <section>
              {<Buttons />}
            </section>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
