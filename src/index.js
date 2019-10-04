import React from 'react';
import ReactDOM from 'react-dom';
import './App/index.css';
import App from './App/';
import registerServiceWorker  from './serviceWorker';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
    <App /> ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

