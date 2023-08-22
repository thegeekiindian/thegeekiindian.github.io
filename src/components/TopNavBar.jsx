import { Outlet, Link } from "react-router-dom";
import React, { useState, Component } from "react";
import navbarconfig from "../staticdata/navbarconfig.json";

const NavBarOption = (prop) => {
  console.log("Row : ", prop.prop)
    return (<h1><Link to={prop.prop.Path}>{prop.prop.Title}</Link></h1>)
}

class TopNavBar extends Component {

  render() {
    const options = []
    for (let i=0; i< navbarconfig.Components.length; i++) {
      options.push(<NavBarOption prop={navbarconfig.Components[i]}/>)
    }
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3">
          <a className="navbar-brand" href="#">
            {options}
          </a>
        </nav>
      </React.Fragment>
    )
  }
}

export default TopNavBar;