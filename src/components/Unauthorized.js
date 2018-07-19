import React, { Component } from 'react';
//import axios from 'axios';
import { Button,Jumbotron  } from 'react-bootstrap';

class Unauthorized extends Component {
  componentDidMount(){
      let user =  localStorage.getItem('role');
      let logged = localStorage.getItem('token');
      if(logged == null){
      window.location.href="/login";
      }
  }

  render() {

    return (
      <div class="row">
      <Jumbotron class="col-xs-1 text-center center-block" >
        <h1>Oops, no tienes permisos para esta sección</h1>
      </Jumbotron>
      <Button bsStyle="warning" href="/">Ir al inicio</Button>
      </div>
    );
  }
}

export default Unauthorized;
