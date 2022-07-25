import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Slideshow from './components/Slideshow';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          {/* <Slideshow/> */}
          <News pageSize={5} country="in" category="entertainment"/>
        </Router>
      </div>
    )
  }
}
