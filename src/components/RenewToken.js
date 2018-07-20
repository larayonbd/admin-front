import React, { Component } from 'react';
//import { Link } from 'react-router';
import Nav from './Nav';
//import axios from 'axios';
import { Form, FormControl, FormGroup, ControlLabel , Col  } from 'react-bootstrap';

class RenewToken extends Component {

  componentDidMount(){
    let role =  localStorage.getItem('role');
      let logged = localStorage.getItem('token');
      if(logged == null ){
        window.location.href="/login";
      }else {
        if (role !== "operations") {
          window.location.href="/unauthorized";
        }
      }

  }

  render() {

    return (
      <div>
        <Nav />
        <h3 className="text-center">Renovar Token</h3>
        <hr/>

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Token
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="vault token" />
                </Col>
              </FormGroup>
            </Form>
            <button className="btn btn-lg btn-info"> Renovar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default RenewToken;
