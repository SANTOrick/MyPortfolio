import React from 'react'
import  '../App.css'
import  NavButton from './NavButton'



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
              route={"/projects"}
              action={"Projects"}
              key={"Projects"}
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
