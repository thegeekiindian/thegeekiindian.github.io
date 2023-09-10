
import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";

import Topnav from './components/basic/TopNav';

class App extends React.Component {
  render() {
      return (
        <Topnav/>
        );
  }
}

export default App;
