import React, { Component } from 'react';
import Nav from './Nav';
import axios from 'axios';
import { Alert, Form, FormControl, FormGroup, ControlLabel , Col, Button  } from 'react-bootstrap';
import {API_BASE} from "../constants.js";

export default class Unseal extends Component {

  constructor(props) {
    super(props);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      key1: "",
      key2: "",
      key3: "",
      show: true
    };
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  validateForm() {
    return this.state.key1.length > 0 && this.state.key2.length > 0 && this.state.key3.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { key1, key2, key3 } = this.state;
    axios.put(API_BASE+'/vault-service/unseal',{key1: key1, key2: key2, key3: key3})
      .then(function (res)  {
        console.log(res.data);

      })
      .catch(function(error) {
        console.log(error);
      })
  }

  render() {
    const { key1, key2, key3 } = this.state;
    return (
      <div>
        <Nav />
        <h3 className="text-center">Unseal Vault</h3>
        <hr/>

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormGroup controlId="key1" bsSize="large">
                  <Col componentClass={ControlLabel} sm={2}>
                    Key1
                  </Col>
                  <Col sm={10}>
                    <FormControl
                      placeholder="key1"
                      value={key1}
                      onChange={this.handleChange}
                      type="password"
                    />
                  </Col>
                </FormGroup>
                <FormGroup controlId="key2" bsSize="large">
                  <Col componentClass={ControlLabel} sm={2}>
                    Key2
                  </Col>
                  <Col sm={10}>
                    <FormControl
                      placeholder="Key2"
                      value={key2}
                      onChange={this.handleChange}
                      type="password"  />
                  </Col>
                </FormGroup>
                <FormGroup controlId="key3" bsSize="large">
                  <Col componentClass={ControlLabel} sm={2}>
                    Key3
                  </Col>
                  <Col sm={10}>
                    <FormControl
                      placeholder="Key3"
                      value={key3}
                      onChange={this.handleChange}
                      type="password"  />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Button
                    block
                    bsSize="large"
                    type="submit"
                    className="btn btn-lg btn-info">
                    Unseal Vault
                  </Button>
                </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
