import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron  } from 'react-bootstrap';
import {API_BASE} from "../constants.js";


class Logout extends Component {
  componentDidMount(){
    let token = localStorage.getItem('token');
      window.location.href="/login";
      axios.post(API_BASE+'/Users/logout?access_token='+token)
              .then(function (response) {
                console.log(response);
                localStorage.removeItem('token');
                localStorage.removeItem('role');
                  window.location.href="/";
              })
              .catch(function(error) {

              })
  }

  render() {

    return (
      <div>
      <Jumbotron>
        <h1>Cerrando sesion...</h1>
      </Jumbotron>;

      </div>
    );
  }
}

export default Logout;
