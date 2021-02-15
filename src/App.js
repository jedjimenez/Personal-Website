import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar  from './components/navbar.js';
import Home  from './pages/home.js';
import About  from './pages/about.js';
import Projects from './pages/projects.js';
import Contact from './pages/contact.js';




class App extends Component {
    
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
      </React.Fragment>
   )
  }
}

export default App;
