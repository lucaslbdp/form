import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import './index.css';
import Routes from './Routes/Routes';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
ReactDOM.render(

  <React.StrictMode>
    <Router>
    <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

