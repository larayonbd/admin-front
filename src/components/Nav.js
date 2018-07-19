import React, {Component} from 'react';
import {Link} from 'react-router';
//import {login, logout, isLoggedIn} from '../utils/AuthService';
import '../App.css';

class Nav extends Component{
    render() {
        return (
          <nav className="navbar navbar-default">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Admin</Link>
            </div>
            <ul className="nav navbar-nav">
              <li>
                 <Link to="/unseal">Unseal</Link>
              </li>
              <li>
                 <Link to="/renew-token">Renew Token</Link>
              </li>
              <li>
                 <Link to="/vault-status">Vault Health</Link>
              </li>
              <li>
                <Link to="/logout">Salir</Link>
              </li>
            </ul>
          </nav>
        );
    }
}

export default Nav;
