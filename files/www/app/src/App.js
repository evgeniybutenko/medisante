import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home.js';

import './css/bootstrap.min.css';
import './css/app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={"/medisante"}>
        <Switch>
          <Route exact path={`/`} component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
