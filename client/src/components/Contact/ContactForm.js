import React from 'react';

import { Button, Form, Col, Row, FormGroup, Label, Input} from 'reactstrap';
// import API from "./Api";

export default class ContactForm extends React.Component {
  constructor(){
    super()
    this.state={
      response: null
    }
  }

  render() {
    return (
      <Form className="itemForm" onSubmit={event => this.props.handleSubmit(event)}>
        <Row>
          <FormGroup>
          <Col lg="6">
            <Label for="Name">Name</Label>
          </Col>
          <Col lg="6">
            <Input required={true} type="textfield" style = {{width: 500}} name="name" id="Name" placeholder="Please leave your name..." />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col lg="6">
            <Label for="email">Email</Label>
          </Col>
          <Col lg="6">
            <Input required={true} type="email" style = {{width: 500}} name="email" id="email" placeholder="example@email.com" />
          </Col>
        </FormGroup>
        <FormGroup>
        <Col lg="6">
          <Label for="Subject">Subject</Label>
          </Col>
          <Col lg="6">
          <Input required={true} type="textfield" style = {{width: 500}}name="subject" id="subject" placeholder="" />
          </Col>
        </FormGroup>
        </Row>
        <Row>
        <FormGroup>
        <Col lg="6">
          <Label for="message">Message</Label>
          </Col>
          <Col lg="6">
          <Input required={true} type="textarea"  style = {{width: 500, height: 200}} name="message" id="meesage" />
          </Col>
        </FormGroup>
        <Button color="primary btn btn-outline-light btn-lg" type="Submit">Submit</Button>
        </Row>
      </Form>
    );
  }
}
