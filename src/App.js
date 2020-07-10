import React from 'react';
import './App.css';
import Navs from './components/nav/Navs' ;
import Home from './components/Home';
import Lesson from "./components/Lesson" ;
import FormDaftar from "./components/FormDaftar" ;
import Footer from "./components/Footer" ;

import {BrowserRouter as Router , Route , Switch} from "react-router-dom";

function App() {


  // App Route
  return (
    <Router>
    <div className="App">
       <Navs/>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/lesson" component={Lesson}/>
          <Route path="/form" component={FormDaftar}/>
          </Switch>
        <Footer/>
    </div>
    </Router>
  );
}



export default App;
