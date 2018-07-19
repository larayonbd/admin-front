import React, { Component } from 'react';
//import { Link } from 'react-router';
import Nav from './Nav';
import axios from 'axios';
import {API_BASE} from "../constants.js";
import ReactJson from 'react-json-view';
import { Jumbotron  } from 'react-bootstrap';

class VaultStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { server: "" };
  }
  componentDidMount() {
    let logged = localStorage.getItem('token');
    if(logged){
    axios.get(API_BASE+'/vault-service/vaultHealth').then(
      response => this.setState({server: response.data.data}))
      }else {
        window.location.href="/login";
      }

  }

  render() {

    return (
      <div>
        <Nav />
        <h3 className="text-center">Vault Status</h3>
        <hr/>
        <Jumbotron>
          <div>
            <ReactJson src={this.state.server} theme="monokai" />
          </div>
          </Jumbotron>
      </div>
    );
  }
}

export default VaultStatus;
