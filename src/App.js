import React from 'react';

import './App.css';
import NavBar from './Components/Navigation/Nav'
import Main from './Components/Main/Main'
import {Switch , Route} from 'react-router-dom'
import About from './Components/About/About'
import Front from './Components/Front/Front'
import Skill from './Components/Skills/Skill'
import Project from './Components/Projects/Project'



function App() {
  return (
    <>
      <Switch>
      <Route exact path ="/" component ={Front}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path ='/skill' component={Skill}></Route>
        <Route exact path ='/project' component={Project}></Route>
      </Switch>
    </>
  );
}

export default App;
