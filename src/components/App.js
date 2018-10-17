import React, { Component } from 'react';
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';
import Nav from './Nav';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/battle' component={Battle}/>
            <Route path='/popular' component={Popular}/>
            <Route render={ () => {
              return <p>Life's what you make it</p>
            }}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
