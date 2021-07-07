import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from 'pages';
import ComingSoon from "../pages/ComingSoon";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={ComingSoon} />
            <Route component={Home} />
        </Switch>
    </Router>
);