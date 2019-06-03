import React from 'react';
import "../App.css"
import ErrorPage from '../ErrorPage/ErrorPage'
import SuccessPage from '../SuccessPage/SuccessPage'
import ContactForm from './ContactForm'

import { BrowserRouter, Switch, Redirect, Route, withRouter } from "react-router-dom";
import { Button, Form, Col, Row, FormGroup, Label, Input, FormText } from 'reactstrap';
// import API from "./Api";

export default class Contact extends React.Component {
  constructor(){
    super()
    this.state={
      response: null
    }
  }

  handleSubmit = event =>{
    event.preventDefault()
    console.log(event)
    let newRequest = {
      subject : event.target.subject.value,
      message : event.target.message.value,
      email : event.target.email.value,
      name : event.target.name.value,
    }
    console.log(newRequest)
   this.handleRequest(newRequest)
  }

  handleRequest = serverRequest => {
    fetch("http://localhost:3001/contacts", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(serverRequest)
    }).then(resp=>{
      this.setState({ response: resp.status })
    })
  }

  render() {
    return (
      <BrowserRouter>
      <ContactForm handleSubmit={this.handleSubmit}/>
      <Switch>
      </Switch>
      </BrowserRouter>
    );
  }
}
