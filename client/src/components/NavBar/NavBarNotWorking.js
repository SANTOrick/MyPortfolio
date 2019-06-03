import React from 'react'
import  '../App.css'
import  NavButton from './NavButton'

import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import { Collapse, NavbarToggler } from "reactstrap";


export default class NavBar extends React.Component{

  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render(){
    return(
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar smallNav">
      <div className="container">
          <ul className="nav navbar-nav ml-auto">
            <NavButton route={"/"} action={"Home"} key={"Home"} />
            <NavButton
              route={"/resume"}
              action={"Resume"}
              key={"Resume"}
            />
            <NavButton
              route={"/contact"}
              action={"Contact"}
              key={"Contact"}
            />
          </ul>
      </div>
    </nav>
    )
  }
}
