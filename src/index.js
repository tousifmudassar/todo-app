import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Login from './Components/Login/LoginContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/style.css';

ReactDOM.render(
   <Login />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
