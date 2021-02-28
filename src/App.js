import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { PageTransition } from '@steveeeie/react-page-transition';
import NavBar  from './components/navbar.js';
import Home  from './pages/home.js';
import About  from './pages/about.js';
import Projects from './pages/projects.js';
import Contact from './pages/contact.js';





/*---------commented out pages without animation------------*/

/*class App extends Component {
    
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <PageTransition
              preset="moveToLeftFromRight"
              transitionKey={location.pathname}
            >
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            </Switch>
            </PageTransition>
        </Router>
      </React.Fragment>
   )
  }
}*/


/*------React Page Transitions pt.2--------- */

/*class App extends Component {
    
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Route render={({ location }) => {
          return (
          <PageTransition
              preset="fall"
              transitionKey={location.pathname}
            >
            <AnimatePresence>
            <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            </Switch>
            </AnimatePresence>
            </PageTransition>
          );
        }}
        />
        </Router>
      </React.Fragment>
   )
  }
};*/
      
/*--------Framer Motion-------------*/
class App extends Component {
    
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Route render={({ location }) => {
          return (
            <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            </Switch>
          );
        }}
        />
        </Router>
      </React.Fragment>
   )
  }
};




export default App;
