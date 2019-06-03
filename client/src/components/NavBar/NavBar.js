import React from 'react'
import NavButton from './NavButton'
import  '../App.css'

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
        <Collapse isOpen={this.state.isOpen} navbar>
          <ul className="nav navbar-nav ml-auto">
            <NavButton route={"/"} action={"Home"} key={"Home"} />
          </ul>
        </Collapse>
      </div>
    </nav>
    )
  }
}
