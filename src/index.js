import React from 'react';
import ReactDOM from 'react-dom';
import Unseal from './components/Unseal';
import Logout from './components/Logout';
import VaultStatus from './components/VaultStatus';
import Home from './components/Home';
import RenewToken from './components/RenewToken';
import Login from './components/Login';
import Unauthorized from './components/Unauthorized';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';
//import { requireAuth } from './utils/AuthService';
import './index.css';

const Root = () => {
    return (
        <div className="container">
            <Router history={browserHistory}>
                <Route path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/unseal" component={Unseal}/>
                <Route path="/vault-status" component={VaultStatus}/>
                <Route path="/renew-token" component={RenewToken} />
                <Route path="/logout" component={Logout} />
                <Route path="/unauthorized" component={Unauthorized} />
            </Router>
        </div>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
