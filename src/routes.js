import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, Redirect} from 'react-router';
import App from './containers/App/App';


const Home = React.createClass({
    render: function () {
        return (<div>Hello world</div>)
    }
})
export const makeRoutes = () => (
    <Router>
        <Route path="/" component={Home}/>
        <Redirect from="*"to="/"/>
        </Router>
)

export default makeRoutes;