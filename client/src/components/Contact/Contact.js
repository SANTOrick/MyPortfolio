import React from 'react';
import ContactForm from './ContactForm'

import { BrowserRouter, Switch } from "react-router-dom";
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
      this.setState({ response: true })

  }

  render() {
    return (
      <div>
      {
        this.state.response
        ?<p style={{color:"green", marginTop:"-5%"}}>Message submitted, Thank You!</p>
        :null
      }
      <BrowserRouter>
      <ContactForm handleSubmit={this.handleSubmit}/>
      <Switch>
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}
