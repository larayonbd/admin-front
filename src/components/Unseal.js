import React, { Component } from 'react';
//import { Link } from 'react-router';
import Nav from './Nav';
//import axios from 'axios';
import {API_BASE} from "../constants.js";
import { Form, FormControl, FormGroup, ControlLabel , Col  } from 'react-bootstrap';

class Unseal extends Component {

  state = {
    key1: '',
    key2: '',
    key3: ''
  };

  /*
  handleSumbmit = event => {
    event.preventDedault();

    const key1 = {
      key1: this.state.key1
    }

    const key2 = {
      key2: this.state.key2
    }

    const key3 = {
      key3: this.state.key3
    }

    axios.post('',{key1})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

  }
*/
  render() {

    return (
      <div>
        <Nav />
        <h3 className="text-center">Unseal Vault</h3>
        <hr/>

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Key1
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="key1" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Key2
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Key2" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Key3
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Key3" />
                </Col>
              </FormGroup>
            </Form>
            <button className="btn btn-lg btn-info"> Unseal Vault</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Unseal;
