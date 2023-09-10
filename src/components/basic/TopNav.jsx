import '../../App.css';
import React from 'react';
import logo from '../../logo.svg';
import { Route, Routes, Link } from "react-router-dom";
import About from './About';
import Home from './Home';

class Topnav extends React.Component {
    render() {
       return (
        <div className="App">
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="/about" Component={About}/>
          </Routes>
        </div>
       );
    }

}

export default Topnav;