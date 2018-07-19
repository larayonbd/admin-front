import React, { Component } from 'react';
import axios from 'axios';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import "../styles/Login.css";
import {API_BASE} from "../constants.js";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  componentDidMount(){
      localStorage.removeItem('token');
      localStorage.removeItem('role');
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post(API_BASE+'/Users/login',{email: this.state.email, password:this.state.password})
            .then(function (response) {
                localStorage.setItem("token",response.data.id);
                localStorage.setItem("role", "operations");
                window.location.href="/";
            })
            .catch(function(error) {
              console.log(error);
if (error.response.status===401) {
    window.alert("Credenciales erroneas");
} else {
    window.alert("Error al conectar con el servicio");
}


            })
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
             className="btn btn-lg btn-info"
            disabled={!this.validateForm()}
            type="submit">
            Acceder
          </Button>
        </form>

      </div>
    );
  }
}
