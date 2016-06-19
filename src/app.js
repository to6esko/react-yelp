import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import {bowserHistory} from 'react-router';
import './app.css';
import App from './containers/App/App';
import makeRoutes from './routes';


const routes = makeRoutes();


const mountNode = document.querySelector('#root');
ReactDOM.render(<App history={bowserHistory} routes={routes}/>, mountNode);
