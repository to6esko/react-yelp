import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, Redirect} from 'react-router';
import makeMainRoutes from 'views/Main/routes';


export const makeRoutes = () => {
    const main = makeMainRoutes();
    return (
        <Route path="">
            {main}
            </Route>
   )
}

export default makeRoutes;