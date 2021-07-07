import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home,  ComingSoon} from '../pages';

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={ComingSoon} />
            <Route component={Home} />
        </Switch>
    </Router>
);