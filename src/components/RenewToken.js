import React, { Component } from 'react';
//import { Link } from 'react-router';
import Nav from './Nav';
import axios from 'axios';
import { Form, FormControl, FormGroup, ControlLabel , Col  } from 'react-bootstrap';
import {API_BASE} from "../constants.js";


class RenewToken extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: ""
      //show: true
    };
  }

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

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let client_token = "adadsda";
    var obj = JSON.stringify({"vault_token":client_token, "token": this.state.token});
    console.log(this.state);
    axios.post(API_BASE+'/vault-service/renew_token',JSON.parse(obj))
      .then(function (res)  {
        console.log(res.data);
        if(res.data.data.renew === false || res.data.data.data === false ){
          let data = JSON.stringify(res.data.data, null,2)
          window.alert("Algo fue mal a  la hora de renovar el token: \n"+ data)
        }else {
          window.location.href="/vault-status";
        }

      })
      .catch(function(error) {
        console.log(error);
      })
    }

  render() {
    const { token } = this.state;
    return (
      <div>
        <Nav />
        <h3 className="text-center">Renovar Token</h3>
        <hr/>

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <Form horizontal onSubmit={this.handleSubmit}>
              <FormGroup controlId="token">
                <Col componentClass={ControlLabel} sm={2}>
                  Token
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="vault token"
                    value={token}
                    onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <button className="btn btn-lg btn-info" type="submit"> Renovar</button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default RenewToken;
