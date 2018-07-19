import React, { Component } from 'react';
//import { Link } from 'react-router';
import Nav from './Nav';
//import { isLoggedIn } from '../utils/AuthService';
import axios from 'axios';
import { PageHeader  } from 'react-bootstrap';
import {API_BASE} from "../constants.js";


class Home extends Component{

    state = {services: []};

    getServices(){
        axios.get(API_BASE+'/services')
            .then(res =>  {
                this.setState({ services: res.data })
            })
    }
    componentDidMount(){
        let logged = localStorage.getItem('token');
        if(logged){
          this.getServices();
        }else {
          window.location.href="/login";
        }

    }

    render() {
        const {services} = this.state;

        return (
            <div>
                <Nav />
                <h3 className="text-center"> Servicios </h3>
                <hr/>
                <div className="col-sm-12">
                { services.map((data, index) => (
                    <div className="col-md-6" key={index} >
                      <PageHeader>
                        {data.name} <small>{data.host}</small>
                      </PageHeader>
                </div>
                ))}
                </div>
            </div>
        );
    }
}

export default Home;
